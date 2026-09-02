import { STOPS } from "@/constants";
import DeparturesContext from "@/services/DeparturesContext";
import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { SectionHeader } from "./AdminPanelControls";

type Props = {
  initialCount?: number;
  maxCount?: number;
  onChange?: (values: string[]) => void;
  onSubmit?: (values: string[]) => void;
};

type FormData = {
  fields: { value: string }[];
};

export default function AdminPanelStopForm({
  initialCount = 1,
  maxCount = 4,
}: Props) {
  const clamp = (n: number) => Math.max(1, Math.min(maxCount, n));
  const initialCountClamped = clamp(initialCount);
  const stopOptions = STOPS;
  const ctx = useContext(DeparturesContext);
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      fields: Array(initialCountClamped).fill({ value: "" }),
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });
  const handleAdd = () => {
    if (fields.length < maxCount) {
      append({ value: "" });
    }
  };
  const handleRemove = () => {
    if (fields.length > 1) {
      remove(fields.length - 1);
    }
  };

  const onFormSubmit = (data: FormData) => {
    const stopIds = data.fields.map((field) => field.value);
    const selectedStops = stopOptions.filter((stop) =>
      stopIds.includes(stop.stopId.toString()),
    );
    console.log("selected stops:", selectedStops);
    ctx.setCurrentStopsInUse(selectedStops);
  };

  const handleReset = () => {
    reset({
      fields: Array(initialCountClamped).fill({ value: "" }),
    });
  };

  const counterButtonClass =
    "w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700 text-white font-bold transition-colors duration-200 ease-in-out hover:bg-gray-600 hover:cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-700";

  return (
    <div>
      <SectionHeader
        eyebrow="Przystanki"
        title="Wybór przystanków"
        description="Wybierz do czterech przystanków wyświetlanych na tablicy odjazdów."
      />
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-4 border border-gray-700 bg-gray-900/50 rounded-lg p-3">
          <span className="text-sm font-semibold text-white">
            {fields.length} / {maxCount} miejsc
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleRemove}
              disabled={fields.length <= 1}
              className={counterButtonClass}
            >
              -
            </button>
            <button
              type="button"
              onClick={handleAdd}
              disabled={fields.length >= maxCount}
              className={counterButtonClass}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {fields.map((field, i) => (
            <div key={field.id} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-blue-600/10 text-blue-400 border border-blue-400/30 text-xs font-bold">
                {i + 1}
              </span>
              <select
                {...control.register(`fields.${i}.value`)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm transition-colors duration-200 ease-in-out hover:border-blue-400 focus:outline-none focus:border-blue-400"
              >
                <option value="">Wybierz przystanek</option>
                {stopOptions.map((stop) => (
                  <option key={stop.stopId} value={stop.stopId}>
                    {stop.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-2 pt-4 border-t-2 border-gray-700">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:cursor-pointer"
          >
            Zatwierdź
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-600 hover:cursor-pointer"
          >
            Wyczyść
          </button>
        </div>
      </form>
    </div>
  );
}

import { STOPS } from "@/constants";
import DeparturesContext from "@/services/DeparturesContext";
import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";

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

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          type="button"
          onClick={handleRemove}
          disabled={fields.length <= 1}
        >
          -
        </button>
        <span>Set stops</span>
        <button
          type="button"
          onClick={handleAdd}
          disabled={fields.length >= maxCount}
        >
          +
        </button>
      </div>

      {fields.map((field, i) => (
        <select
          key={field.id}
          {...control.register(`fields.${i}.value`)}
          style={{ padding: 8 }}
        >
          <option value="">Select a stop</option>
          {stopOptions.map((stop) => (
            <option key={stop.stopId} value={stop.stopId}>
              {stop.name}
            </option>
          ))}
        </select>
      ))}

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

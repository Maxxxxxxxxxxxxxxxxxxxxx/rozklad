import React from "react";

export const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
}> = ({ eyebrow, title, description }) => (
  <div className="mb-5">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
      {eyebrow}
    </p>
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    {description && <p className="text-sm text-white/50 mt-1">{description}</p>}
  </div>
);

export const OptionRow: React.FC<{
  label: string;
  description?: string;
  children: React.ReactNode;
}> = ({ label, description, children }) => (
  <div className="flex items-center justify-between gap-4 border border-gray-700 bg-gray-900/50 rounded-lg p-4">
    <div>
      <p className="text-sm font-semibold text-white">{label}</p>
      {description && (
        <p className="text-xs text-white/50 mt-0.5">{description}</p>
      )}
    </div>
    {children}
  </div>
);

export const Toggle: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}> = ({ checked, onChange, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={() => onChange(!checked)}
    className={`relative w-11 h-6 rounded-full shrink-0 transition-colors duration-200 ease-in-out hover:cursor-pointer ${
      checked ? "bg-blue-600" : "bg-gray-700"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

export const SegmentedControl: React.FC<{
  options: string[];
  value: string;
  onChange: (value: string) => void;
}> = ({ options, value, onChange }) => (
  <div className="flex gap-1 p-1 rounded-lg bg-gray-900 border border-gray-700">
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors duration-200 ease-in-out hover:cursor-pointer ${
          value === option
            ? "bg-blue-600 text-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

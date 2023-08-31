import React from "react";

interface SelectProps {
  options: any[];
  value: any;
  onChange: (value: any) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-lg font-bold bg-white rounded p-4 mb-4 mx-4"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

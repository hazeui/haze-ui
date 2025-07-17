import { ReactNode } from "react";

interface CheckboxProps {
  colour: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: ReactNode;
}

const colourMap = {
  red: "text-red-500 focus:ring-red-400 hover:bg-red-100",
  orange: "text-orange-500 focus:ring-orange-400 hover:bg-orange-100",
  yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-100",
  green: "text-green-500 focus:ring-green-400 hover:bg-green-100",
  blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-100",
  indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-100",
  violet: "text-violet-500 focus:ring-violet-400 hover:bg-violet-100",
};

export default function Checkbox({
  colour,
  checked,
  onChange,
  children,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={`
          'w-5 h-5 rounded border border-gray-300 bg-white',
          'focus:ring-2 transition duration-150 ease-in-out',
          ${colourMap[colour]}
        `}
      />
      <span className="text-sm">{children}</span>
    </div>
  );
}

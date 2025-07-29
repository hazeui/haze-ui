import type { BtnProps } from "./button";

export type Option = {
  value: string;
  name: string;
  iconL?: string;
};

export interface SelectProps {
  options: Option[];
  onChange?: (value: string) => void;
  triggerProps?: BtnProps;
  dropdownCss?: string;
  optionCss?: string;
}

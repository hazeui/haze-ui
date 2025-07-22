import type { BtnProps } from "./button";

type Option = {
  val: string;
  name: string;
  iconL?: string;
};

export interface SelectProps {
  options: Option[];
  onChange?: (val: string) => void;
  triggerProps?: BtnProps;
  dropdownCss?: string;
  inactiveOptionCss?: string;
  activeOptionCss?: string;
}

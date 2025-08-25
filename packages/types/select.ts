export type Option = {
  value: string;
  name: string;
  iconL?: string;
};

export interface SelectProps {
  placeholder?: string;
  options: Option[];
  onChange?: (value: string) => void;
  triggerProps?: any;
  dropdownCss?: string;
  optionCss?: string;
}

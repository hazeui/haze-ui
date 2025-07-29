/**
 * A mapping of size keys to a tuple: [text size class, padding value].
 * Example: sm: ["text-sm", 1]
 */
type TextPad = Record<string, [string, number]>;

/**
 * A mapping of size keys to a numeric value.
 * Example: sm: 4
 */
type Sizes = Record<string, number>;

export interface ShortcutOptions {
  btn: {
    variant: string;
    sizes: TextPad;
  };
  checkbox: {
    variant: string;
    sizes: Sizes;
  };
  input: {
    variant: string;
    sizes: TextPad;
  };
  popover: {
    pos: Record<string, string>;
  };
  switch: {
    variant: string;
    color: string;
    sizes: Sizes;
  };
  radio: {
    color: string;
    sizes: Sizes;
  };
  badge: {
    variant: string;
    sizes: TextPad;
  };
}

export interface OptionTypes {
  shortcuts: ShortcutOptions;
}

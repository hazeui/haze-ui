import { useState, useRef } from "react";
import Btn from "./button";
import type { Props as BtnProps } from "./button";
import { useOnClickOutside } from "./domutils";

type Option = {
  val: string;
  name: string;
  iconL?: string;
};

type CustomSelectProps = {
  options: Option[];
  onChange?: (val: string) => void;
  triggerProps?: BtnProps;
  dropdownCss?: string;
  inactiveOptionCss?: string;
  activeOptionCss?: string;
};

export default ({
  options,
  onChange,
  triggerProps,
  dropdownCss,
  inactiveOptionCss,
  activeOptionCss,
}: CustomSelectProps) => {
  const ref = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hlIndex, setHlIndex] = useState(0);

  useOnClickOutside(ref, () => setIsOpened(false));

  const toggleOptions = () => {
    setIsOpened((prev) => {
      const next = !prev;
      if (next) setHlIndex(selectedIndex); // highlight current on open
      return next;
    });
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      onChange?.(options[index].val);
    }
    setIsOpened(false);
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(hlIndex);
        break;
      case "Escape":
        e.preventDefault();
        setIsOpened(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setHlIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case "ArrowDown":
        e.preventDefault();
        setHlIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative" ref={ref}>
      <Btn
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        iconR="ml-auto i-fa-solid:caret-down"
        variant="outline"
        className="w-full justify-start"
        txt={options[selectedIndex]?.name || "Select"}
        {...triggerProps}
      />

      {isOpened && (
        <ul
          className={`popover z-10 w-full ${dropdownCss}`}
          role="listbox"
          aria-activedescendant={`option-${hlIndex}`}
          tabIndex={-1}
        >
          {options.map((option, i) => (
            <li
              key={option.val}
              id={`option-${i}`}
              role="option"
              aria-selected={selectedIndex === i}
              tabIndex={-1}
              onClick={() => setSelectedThenCloseDropdown(i)}
              className={`justify-start btn-ghost-eqmd transition-none ${inactiveOptionCss} 
                        ${hlIndex === i ? `bg-slate1 ${activeOptionCss}` : ""}`}
            >
              {option.iconL && <span className={option.iconL}></span>}
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

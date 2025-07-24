import { useState, useRef } from "react";
import Btn from "./button";
import { useOnClickOutside } from "./domutils";

import { type SelectProps } from "types/select";

export default ({
  options,
  onChange,
  triggerProps,
  dropdownCss,
  inactiveOptionCss,
  activeOptionCss,
}: SelectProps) => {
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
    e.preventDefault();
    switch (e.key) {
      case "Enter":
        setSelectedThenCloseDropdown(hlIndex);
        break;
      case "Escape":
        setIsOpened(false);
        break;
      case "ArrowUp":
        setHlIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "ArrowDown":
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
              className={`justify-start btn-ghost-eqmd ${inactiveOptionCss} 
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

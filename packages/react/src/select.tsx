import { useState, useRef } from "react";
import Btn from "./button";
import { useOnClickOutside } from "./domutils";

import { type SelectProps } from "types/select";

export default ({
  options,
  onChange,
  triggerProps,
  dropdownCss,
  optionCss,
}: SelectProps) => {
  const ref = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hlIndex, setHlIndex] = useState(-1);

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
      onChange?.(options[index].value);
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

  const activeCss = optionCss?.includes("data-")
    ? optionCss
    : `data-active:bg-muted ${optionCss}`;

  const optcss = `justify-start btn-ghost-eqmd transition-none ${activeCss}`;

  return (
    <div className="inline-flex relative" ref={ref}>
      <Btn
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        iconR="ml5 i-fa-solid:caret-down"
        txt={options[selectedIndex]?.name || "Select"}
        {...triggerProps}
      />

      {isOpened && (
        <ul
          className={`popover z-10 whitespace-nowrap ${dropdownCss}`}
          role="listbox"
          aria-activedescendant={`option-${hlIndex}`}
          tabIndex={-1}
        >
          {options.map((option, i) => (
            <li
              key={option.value}
              id={`option-${i}`}
              role="option"
              data-active={hlIndex === i}
              aria-selected={selectedIndex === i}
              tabIndex={-1}
              onClick={() => setSelectedThenCloseDropdown(i)}
              className={optcss}
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

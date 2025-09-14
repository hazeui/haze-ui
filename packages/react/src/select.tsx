import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "./domutils";
import { useFloating, shift, flip, offset } from "@floating-ui/react";

import { type SelectProps as SelProps } from "types/select";

type Props = Omit<SelProps, "triggerProps"> & {
  triggerProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default ({
  options,
  onChange,
  triggerProps = {},
  dropdownCss,
  optionCss,
}: Props) => {
  const [hlIndex, setHlIndex] = useState(-1);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { refs, floatingStyles } = useFloating({
    transform: false,
    placement: "bottom-start",
    middleware: [shift(), flip(), offset(10)],
  });

  let { className: trigcss = "" } = triggerProps;

  trigcss =
    trigcss + (trigcss.includes("btn-") ? "" : " btn") + " justify-between";

  useOnClickOutside([refs.reference], () => setIsOpened(false));

  const closeMe = () => {
    if (isOpened) setIsOpened(false);
  };

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
    setIsOpened(!isOpened);
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

  useEffect(() => {
    window.addEventListener("resize", closeMe);

    return () => {
      window.removeEventListener("resize", closeMe);
    };
  }, [isOpened]);

  return (
    <>
      <button
        ref={refs.setReference}
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
        {...triggerProps}
        className={trigcss}
      >
        {options[selectedIndex]?.name || "Select"}
        <i className="i-fa-solid:caret-down" />
      </button>

      {isOpened &&
        createPortal(
          <ul
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              minWidth: refs.reference.current?.offsetWidth,
            }}
            className="pop grid p2"
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
          </ul>,
          document.body,
        )}
    </>
  );
};

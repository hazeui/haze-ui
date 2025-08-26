import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "./domutils";

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
  const ref = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLUListElement>(null);

  const [popcss, setPopcss] = useState({});
  const [hlIndex, setHlIndex] = useState(-1);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let { className: trigcss = "" } = triggerProps;

  trigcss =
    trigcss + (trigcss.includes("btn-") ? "" : " btn") + " justify-between";

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

  const updatePos = (popupHeight: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const canOpenUp = spaceBelow < popupHeight && rect.top > spaceBelow;
    const toph = canOpenUp ? -popupHeight - 30 : rect.height + 10;
    const top = window.scrollY + rect.top + toph;

    setPopcss({ minWidth: rect.width, top, left: window.scrollX + rect.left });
  };

  useEffect(() => {
    if (!isOpened || !popupRef.current) return;

    const popupHeight = popupRef.current.getBoundingClientRect().height;
    updatePos(popupHeight);
    window.addEventListener("resize", () => updatePos(popupHeight));

    return () => {
      window.removeEventListener("resize", () => updatePos(popupHeight));
    };
  }, [isOpened]);

  return (
    <>
      <button
        ref={ref}
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
            ref={popupRef}
            className="pop grid p2"
            role="listbox"
            aria-activedescendant={`option-${hlIndex}`}
            tabIndex={-1}
            style={popcss}
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

const round1 = (num: number) => Math.round(num * 10) / 10;

const inputVariants: any = {
  solid: "bg-input",
  outline: "border-(1 solid border) shadow-sm",
};

export default (opts: any) => {
  const sizes = opts.sizes;

  return [
    [
      /^input(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
      ([, arg1, arg2]: RegExpMatchArray) => {
        let variant = opts.variant;
        let size = "md";
        let textSize: string, pad: number;

        if (arg1) {
          if (["solid", "outline"].includes(arg1)) {
            variant = arg1;
            if (arg2 && sizes[arg2]) size = arg2;
          } else if (sizes[arg1]) {
            size = arg1;
          }
        }

        [textSize, pad] = sizes[size] || sizes["md"];

        const disabledbg = variant === "outline" ? "bg-mutedbg" : "";
        const bg = variant === "outline" ? "bg-transparent" : "";

        const p = `py-${pad} px-${+(pad * 1.5).toFixed(3)}`;
        const base = `transition rounded outline-0 focus:(ring-2 ring-primary) 
                     placeholder:text-mutedfg disabled:(muted-95 ${disabledbg})`;

        return `${base} ${inputVariants[variant]} ${textSize} ${p} ${bg}`;
      },
    ],

    [
      /^grinput(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
      ([, arg1, arg2]: RegExpMatchArray) => {
        let variant = opts.variant;
        let size = "md";
        let textSize: string, pad: number;

        if (arg1) {
          if (["solid", "outline"].includes(arg1)) {
            variant = arg1;
            if (arg2 && sizes[arg2]) size = arg2;
          } else if (sizes[arg1]) {
            size = arg1;
          }
        }

        [textSize, pad] = sizes[size] || sizes["md"];

        const py = round1(pad * 0.5);
        const px = round1(pad * 1.5);
        const disabledbg = variant === "outline" ? "bg-mutedbg" : "";

        return `
        inline-flex items-center gap2 px${px} py${py} rounded
        ${inputVariants[variant]} ${textSize} transition
        focus-within:(ring-2 ring-primary) align-middle 
        has-[input:disabled]:(muted-95 ${disabledbg})
        [&>input]:(py1 px0 border-0 outline-0 bg-transparent w-full text-inherit placeholder:text-mutedfg)
        [&>input[disabled]]:(muted)
      `;
      },
    ],
  ];
};

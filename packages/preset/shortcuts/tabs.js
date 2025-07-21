export default [
  [
    /^tabs(?:-(\w+)(?:-(\w+))?)?$/,
    ([, variant = "box", color]) => {
      if (!color) {
        if (["box", "classic", "subtle"].includes(variant)) {
          color = "input";
        } else color = "border";
      }

      const variants = {
        box: `rounded bg-${color} flex p2`,
        line: `border-(b solid ${color}) flex`,
        outline: `border-(b-2 solid ${color}) flex`,
        classic: `bg-${color} flex p2 pb0`,
        subtle: `flex`,
        plain: "flex",
      };

      return variants[variant];
    },
  ],

  [
    // /^tab(?:-(\w+)(?:-(\w+))?)?$/,
    /^tab(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?$/,
    ([, variant = "box", color = "fg", bg = "bg", border = "border"]) => {
      const on = "aria-selected-(";

      const variants = {
        box: `btn-ghost text-inactivefg ${on}bg-${bg} shadow text-${color})`,
        subtle: `btn-ghost text-inactivefg ${on}bg-input text-fg)`,
        plain: `btn-ghost text-inactivefg ${on}text-fg)`,
        line: `btn-ghost rounded-0  -mb-px
                        ${on}text-${color}  border-(b-2 solid ${color}))`,
        outline: `btn-ghost rounded-0 rounded-t -mb-2px
                        ${on}text-${color} bg-${bg} border-(2 solid ${border}))`,

        classic: `btn-ghost rounded-b-0 
                        ${on}text-${color} bg-${bg} )`,
      };

      return variants[variant];
    },
  ],
];

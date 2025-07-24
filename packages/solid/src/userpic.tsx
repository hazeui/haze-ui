import { mergeProps } from "solid-js";
import { type UserpicProps as Props } from "types/userpic";

const colors = [
  "bg-blue",
  "bg-emerald",
  "bg-teal",
  "bg-indigo",
  "bg-orange",
  "bg-lime",
  "bg-rose",
  "bg-pink",
  "bg-amber",
];

function getColorByLetter(letter: string) {
  const index = "abcdefghijklmnopqrstuvwxyz".indexOf(letter.toLowerCase());
  if (index === -1) return colors[0];

  const groupSize = Math.ceil(26 / colors.length);
  const colorIndex = Math.floor(index / groupSize);
  return colors[colorIndex];
}

const formatName = (str: string) => {
  const firstname = str.split(" ")[0];
  return firstname.substring(0, 2).toUpperCase();
};

export default (x: Props) => {
  const m = mergeProps({ class: "wh-8", name: "joe" }, x);
  const bg = getColorByLetter(m.name[0]);

  return x.src ? (
    <img src={x.src} alt={x.alt} class={`rounded-full ${m.class}`} />
  ) : (
    <div class={`rounded-full text-(xs white) centerfull ${bg} ${m.class}`}>
      {formatName(m.name)}
    </div>
  );
};

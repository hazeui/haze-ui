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

interface Props {
  name?: string;
  txt?: string;
  className?: string;
  src?: string;
  alt?: string;
}

const formatName = (str: string) => {
  const firstname = str.split(" ")[0];
  return firstname.substring(0, 2).toUpperCase();
};

export default ({ src, alt, className = "wh-8", name = "joe" }: Props) => {
  const bg = getColorByLetter(name[0]);

  return src ? (
    <img src={src} alt={alt} className={`rounded-full ${className}`} />
  ) : (
    <div
      className={`rounded-full text-(xs white) centerfull ${bg} ${className}`}
    >
      {formatName(name)}
    </div>
  );
};

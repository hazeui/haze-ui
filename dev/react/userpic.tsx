// import Image from "next/image";

const colors = ["bg-blue", "bg-emerald", "bg-teal", "bg-indigo", "bg-orange"];

function getColorByLetter(letter: string) {
  const index = "abcdefghijklmnopqrstuvwxyz".indexOf(letter.toLowerCase());
  return index >= 0 ? colors[Math.floor(index / 5) % colors.length] : "lime";
}

interface Props {
  name?: string | null | undefined;
  w: any;
  txt?: string;
  css?: string;
  [x: string]: any;
}

const formatName = (str: string) => {
  const arr = str.trim().replace(/\s+/g, " ").split(" ");
  return (arr[0][0] + (arr[1] ? arr[1][0] : "")).toUpperCase();
};

export default ({ src, alt, variant = "solid", name="sid" }:any) => {
  return src ? (
    <img src={src} alt={alt} className={`rounded-full wh-8`} />
  ) : (
    <div className="flex items-center justify-center bg-red wh-8 rounded-full text-xs">
      {formatName(name)}
    </div>
  );
};

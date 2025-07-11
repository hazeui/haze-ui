import React, { useState } from "react";

interface Props {
  txt: string;
  iconL?: string;
}

const Button = (props: Props) => {
  const [n, setN] = useState(0);

  const increaseN = () => setN(n + 1);

  return (
    <button onClick={increaseN} className="bruh">
      {props.iconL && <div className={props.iconL}></div>}
      {props.txt}
      {n}
    </button>
  );
};

export default Button;

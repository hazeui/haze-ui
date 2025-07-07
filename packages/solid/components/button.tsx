import { createSignal } from "solid-js";

interface Props {
  txt: string;
  iconL?: string;
  class?:string;
}

const Button = (props: Props) => {
  const [n, setN] = createSignal(0);

  const increaseN = () => setN(n() + 1);

  return (
    <button onClick={increaseN} class={`btn ${props.class}`}>
      {props.iconL && <div class={props.iconL}></div>}
      {props.txt}
      {n()}
    </button>
  );
};

export default Button;

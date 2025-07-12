export interface props {
  txt?: string;
  iconL?: string;
  isLoading?: boolean;
  loaderTxt?: string;
  iconR?: string;
  [x: string]: any;
}

const Btn = ({ iconL, iconR, txt, isLoading, loaderTxt, ...x }: props) => {
  return (
    <button className="btn-outline" {...x}>
      {iconL && <div className={iconL} />}
      {isLoading && <div className="i-eos-icons:loading" />}
      {txt && txt}
      {iconR && <div className={iconR} />}
    </button>
  );
};

export default Btn;

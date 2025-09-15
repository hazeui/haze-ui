import { Btn } from "@haze-ui/react";

export default () => {
  return (
    <>
      <Btn
        className="btn-emerald500 text-white"
        iconL="i-line-md:email-filled"
        txt="Email"
      />
      <Btn iconL="i-iconamoon:send" txt="Send us" className="btn-outline" />

      <Btn
        loading={true}
        loaderTxt="Fetching..."
        disabled={true}
        txt="Fetch data"
      />

      <Btn
        iconL="i-tabler:plus"
        className="btn-primary-eqmd"
        aria-label="plus button"
      />

      <Btn
        iconL="i-iconoir:user"
        className="btn-outline-eqmd rounded-full"
        aria-label="user button"
      />
    </>
  );
};

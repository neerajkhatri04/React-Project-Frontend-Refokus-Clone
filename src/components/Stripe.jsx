/* eslint-disable react/prop-types */
const Stripe = ({ url, num }) => {
  return (
    <div className="flex justify-between w-5/6 px-10 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 text-white max-lg:flex-shrink-0 max-lg:w-[60vw] max-lg:px-5">
      <img className="" src={url} alt="stripe img" />
      <span className="text-xl font-[gilroy]">{num}</span>
    </div>
  );
};

export default Stripe;

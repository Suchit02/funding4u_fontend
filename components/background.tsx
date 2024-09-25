import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Background = ({ className="", setTradingData }: { setTradingData: any; className:any;}) => {
  const router = useRouter();
  const logoutHandler = () => {
    localStorage.clear();
    router.push("/sign-in");
  }
  return (
    <div
      className={`bg-white flex flex-col items-start justify-start pt-[1rem] px-[1.25rem] pb-[28.937rem] gap-[0.512rem] mq750:pt-[1.25rem] mq750:pb-[18.813rem] mq750:box-border mq1100:hidden ${className}`}
    >
      <img
        className="w-[3rem] h-[2.5rem] relative rounded-xl"
        loading="lazy"
        alt=""
        src="/link.svg"
      />
      <div className="w-[3rem] h-[0.063rem] relative border-lightgray-200 border-t-[1px] border-solid box-border overflow-hidden shrink-0" />
      <img
        className="w-[3rem] h-[2.5rem] relative rounded-xl"
        alt=""
        src="/link-1.svg"
      />
      <img
        className="w-[3rem] h-[2.5rem] relative rounded-xl"
        alt=""
        src="/link-2.svg"
      />
      <img
        className="w-[3rem] h-[2.5rem] relative rounded-xl"
        alt=""
        src="/link-3.svg"
      />
      <img
        onClick={logoutHandler}
        className="w-[3rem] h-[2.5rem] relative rounded-xl cursor-pointer"
        alt=""
        src="/button-1.svg"
      />
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;

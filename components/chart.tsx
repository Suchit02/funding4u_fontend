import LeftText from "./left-text";
import BottomText from "./bottom-text";
import PropTypes from "prop-types";

const Chart = ({ className = "", showLeftText = true }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-boundvariablesdata shrink-0 max-w-full z-[2] text-right text-[1.006rem] text-black-40 font-inter mq750:flex-wrap ${className}`}
    >
      {showLeftText && <LeftText />}
      <div className="flex-1 flex flex-col items-start justify-start relative min-w-[31.313rem] max-w-full text-center mq750:min-w-full">
        <div className="self-stretch h-[20.444rem]" />
        <BottomText />
        <img
          className="w-full h-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
          alt=""
          src="/01@2x.png"
        />
      </div>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
  showLeftText: PropTypes.bool,
};

export default Chart;

import PropTypes from "prop-types";

const LeftText = ({ className = "" }) => {
  return (
    <div
      className={`w-[1.938rem] flex flex-col items-end justify-between min-h-[20.438rem] text-right text-[1.006rem] text-black-40 font-inter ${className}`}
    >
      <div className="h-[5.113rem] relative leading-[1.508rem] inline-block min-w-[1.938rem]">
        30K
      </div>
      <div className="h-[5.113rem] relative leading-[1.508rem] inline-block min-w-[1.938rem]">
        20K
      </div>
      <div className="self-stretch h-[5.113rem] relative leading-[1.508rem] inline-block min-w-[1.938rem]">
        10K
      </div>
      <div className="self-stretch h-[5.113rem] relative leading-[1.508rem] inline-block">
        0
      </div>
    </div>
  );
};

LeftText.propTypes = {
  className: PropTypes.string,
};

export default LeftText;

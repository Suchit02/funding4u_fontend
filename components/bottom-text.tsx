import PropTypes from "prop-types";

const BottomText = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute right-[0%] bottom-[-0.006rem] left-[0%] flex flex-row items-center justify-start max-w-full [row-gap:20px] z-[1] text-center text-[1.006rem] text-black-40 font-inter mq750:flex-wrap ${className}`}
    >
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Jan
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Feb
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Mar
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Apr
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        May
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Jun
      </div>
      <div className="flex-1 relative leading-[1.563rem] inline-block min-w-[6.75rem] max-w-[6.875rem] shrink-0">
        Jul
      </div>
    </div>
  );
};

BottomText.propTypes = {
  className: PropTypes.string,
};

export default BottomText;

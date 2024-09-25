import { useMemo } from "react";
import PropTypes from "prop-types";

type RowProps = {
  className?: string;
  propPadding?: string | number;
  propMinWidth?: string | number;
};

const Row: React.FC<RowProps> = ({ className = "", propPadding, propMinWidth }) => {
  const frameDivStyle = useMemo(
    () => ({
      padding: propPadding,
    }),
    [propPadding]
  );

  const data1276Style = useMemo(
    () => ({
      minWidth: propMinWidth,
    }),
    [propMinWidth]
  );

  return (
    <div
      className={`self-stretch bg-white border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[1.031rem] px-[1.5rem] pb-[0.937rem] gap-[2.95rem] max-w-full text-left text-[0.875rem] text-slategray font-inter mq1250:flex-wrap mq750:gap-[1.5rem] ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-gray-100">
        <div className="relative leading-[1.25rem] font-medium inline-block min-w-[3.688rem]">
          GBPUSD
        </div>
      </div>
      <div className="w-[4.55rem] flex flex-col items-start justify-start pt-[0.5rem] pb-[0rem] pl-[0rem] pr-[1.5rem] box-border text-[0.75rem] text-crimson">
        <div className="self-stretch rounded bg-mistyrose-200 flex flex-row items-start justify-start py-[0.25rem] pl-[0.812rem] pr-[0.75rem]">
          <div className="relative leading-[1rem] font-semibold inline-block min-w-[1.375rem]">
            Sell
          </div>
        </div>
      </div>
      <div className="w-[25.969rem] flex flex-row items-start justify-between py-[0rem] pl-[0rem] pr-[1.75rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap">
        <div className="relative leading-[1.25rem]">
          <p className="m-0">May 27, 2024 6:43</p>
          <p className="m-0">PM</p>
        </div>
        <div
          className="w-[1.731rem] flex flex-col items-start justify-start pt-[0.625rem] pb-[0rem] pl-[0rem] pr-[0.25rem] box-border text-[0.438rem]"
          style={frameDivStyle}
        >
          <div
            className="relative leading-[1.25rem] font-semibold inline-block min-w-[1.438rem]"
            style={data1276Style}
          >
            1.276
          </div>
        </div>
        <div className="relative leading-[1.25rem]">
          <p className="m-0">May 27, 2024 6:50</p>
          <p className="m-0">PM</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-[0.488rem]">
        <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[1.875rem]">
          1.27598
        </div>
      </div>
      <div className="w-[11.25rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch relative leading-[1.25rem] font-semibold">
          1.5
        </div>
      </div>
      <div className="w-[3.675rem] flex flex-col items-start justify-start pt-[0.625rem] pb-[0rem] pl-[0rem] pr-[1.25rem] box-border">
        <div className="w-[2.138rem] relative leading-[1.25rem] font-semibold flex items-center">
          3.0
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-seagreen">
        <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[3.125rem]">
          +$3.00
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  propPadding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propMinWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Row;

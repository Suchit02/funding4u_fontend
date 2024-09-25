import React, { useEffect, useState } from "react";

const TradingDataComponent = ({ tradedata }) => {
  const [platform, setPlatform] = useState("");
  const [accountInfo, setAccountInfo] = useState({});
  const [startTradePeriod, setStartTradePeriod] = useState("");
  const [endTradePeriod, setEndTradePeriod] = useState("");
  const [accountSize, setAccountSize] = useState(0);

  // Assume tradedata is being passed as props or fetched from context or redux store
  useEffect(() => {
    if (tradedata) {
      setPlatform(tradedata.accountInfo?.platform || ""); // Set platform from accountInfo
      setAccountInfo(tradedata.accountInfo); // Set accountInfo from tradedata
      setAccountSize(tradedata.accountInfo?.balance || 0); // Assuming account size is the balance
      // Assuming the trade periods are static or fetched from tradedata
      setStartTradePeriod("May 27, 2024");
      setEndTradePeriod("May 28, 2024");
    }
  }, [tradedata]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[0.993rem] min-w-[14.688rem] max-w-full">
      <div className="self-stretch flex flex-row items-end justify-start gap-[0.481rem] mq450:flex-wrap">
        <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[3.938rem]">
          Platform
        </a>
        <div className="flex-1 rounded-md bg-lavender-100 flex flex-row items-start justify-start pt-[0.237rem] px-[0.75rem] pb-[0.231rem] box-border min-w-[5.188rem] text-right text-[0.688rem]">
          <a className="[text-decoration:none] relative leading-[1.063rem] uppercase font-light text-[inherit] inline-block ">
            {platform ? platform : "N/A"}
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start text-[0.994rem]">
        <div className="flex flex-col items-start justify-start gap-[1.068rem]">
          <div className="relative leading-[1.5rem] inline-block min-w-[6.563rem]">
            Account Type
          </div>
          <div className="relative leading-[1.5rem] inline-block min-w-[2.938rem]">
            Phase
          </div>
          <div className="relative text-[1rem] leading-[1.5rem] inline-block min-w-[6.438rem]">
            Account size:
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[1rem] ml-[-3.182rem] text-right text-[1rem]">
          <div className="w-[15.625rem] rounded-lg bg-lavender-100 flex flex-row items-start justify-start pt-[0.237rem] px-[0.75rem] pb-[0.262rem] box-border whitespace-nowrap text-[0.75rem]">
            <div className="relative leading-[1.125rem] uppercase font-light inline-block min-w-[2.563rem]">
              2 Step
            </div>
          </div>
          <b className="self-stretch relative leading-[1.5rem] capitalize">
            {accountInfo.name ? accountInfo.name : "N/A"}
          </b>
          <b className=" relative leading-[1.5rem] flex items-center whitespace-nowrap">
            ${accountSize.toLocaleString()}
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.043rem] text-[0.975rem] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative leading-[1.5rem]">Start trade period:</div>
          <div className="relative text-[0.988rem] leading-[1.5rem] inline-block min-w-[8.088rem]">
            End trade period:
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[1rem] min-w-[9.125rem] text-right text-[1rem]">
          <b className=" relative leading-[1.5rem] flex items-center">
            {startTradePeriod}
          </b>
          <b className="self-stretch relative leading-[1.5rem]">
            {endTradePeriod}
          </b>
        </div>
      </div>
    </div>
  );
};

export default TradingDataComponent;

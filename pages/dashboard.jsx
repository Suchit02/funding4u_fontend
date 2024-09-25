import Nav from "../components/nav";
import Background from "../components/background";
import React, { useEffect, useState } from 'react';
import TradingDataComponent from "../components/TradingDataComponent"
import TradingObjectives from "../components/TradingObjectives"
import TradingHistory from "../components/TradingHistory"
import TradingHistoryTable from "../components/TradingHistoryTable"
import ProfitLossChart from "../components/ProfitLossChart"
import { useRouter } from "next/router";

function Dashboard() {
  const [tradingData, setTradingData] = useState(false);
  const router = useRouter();
  // useEffect(() => {
  //   const storedData = localStorage?.getItem('tradingData');
  //   const rowdata = storedData ? JSON?.parse(storedData) : null;

  //   if (rowdata) {
  //     setTradingData(rowdata)
  //   } else {
  //     router.push("/sign-in")
  //   }

  // }, [localStorage?.getItem('tradingData')])

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('tradingData');
      const rowdata = storedData ? JSON.parse(storedData) : null;

      if (rowdata) {
        setTradingData(rowdata);
      } else {
        router.push("/sign-in");
      }
    }
  }, []); // No dependencies, runs only once after mount



  if(!tradingData){
    return <div>Loading...</div>;
  }

  


  // Calculate currentDailyLoss
  const deals = tradingData.dealsByTimeRange.deals;
  const currentDailyLoss = deals.reduce((total, deal) => {
    return total + (deal.profit < 0 ? deal.profit : 0); // Sum only losses
  }, 0);

  // Calculate total profit from completed deals
  const totalProfit = deals.reduce((total, deal) => total + deal.profit, 0);

  // Calculate Loss Percentage
  const lossPercentage = ((Math.abs(currentDailyLoss) / tradingData.accountInfo.balance) * 100).toFixed(2);

  // Calculate Profit Percentage
  const profitPercentage = ((totalProfit / tradingData.accountInfo.balance) * 100).toFixed(2);

  console.log(`Current Daily Loss: ${currentDailyLoss}`);
  console.log(`Loss Percentage: ${lossPercentage}%`);
  console.log(`Profit Percentage: ${profitPercentage}%`);


  return (
    <div className="App">

      {tradingData && (
        <>
          <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.5rem] box-border leading-[normal] tracking-[normal]">
            <Nav />
            <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.875rem] box-border gap-[1.125rem] max-w-full mq1100:pl-[1.875rem] mq1100:box-border">
              <Background setTradingData={setTradingData} />
              <section className="flex-1 flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_106px)] text-left text-[0.875rem] text-slategray font-inter mq1100:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.143rem] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[1rem] max-w-full mq1250:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.762rem] min-w-[35.938rem] max-w-full mq750:min-w-full">
                      <div className="w-[19.85rem] flex flex-col items-start justify-start gap-[1.437rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.487rem]">
                          <img
                            className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                            loading="lazy"
                            alt=""
                            src="/svg.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                            <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[2.5rem]">
                              Home
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1rem] h-[1rem] relative"
                              alt=""
                              src="/svg-1.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.863rem]">
                            <div className="relative leading-[1.25rem] font-medium inline-block min-w-[4.244rem]">
                              #{tradingData?.accountInfo?.login}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start gap-[0.5rem] text-[1.444rem] text-gray-100">
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.425rem]">
                            <img
                              className="w-[2.869rem] h-[3.125rem] relative overflow-hidden shrink-0 object-cover"
                              loading="lazy"
                              alt=""
                              src="/studentef70e51311a53597bdf3png@2x.png"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[0.987rem]">
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <b className="relative text-nowrap leading-[2rem] capitalize shrink-0 mq450:text-[1.125rem] mq450:leading-[1.625rem]">
                                {`${tradingData?.accountInfo?.name} - ${tradingData?.accountInfo?.login}`}
                              </b>
                              {/* <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] text-[0.738rem]">
                                <div className="mt-[-0.013rem] relative leading-[2rem] capitalize font-light shrink-0">
                                  Created At: May 27, 2024
                                </div>
                              </div> */}
                            </div>
                            <div className={`rounded  flex flex-row items-start justify-start pt-[0.487rem] pb-[0.512rem] pl-[1rem] pr-[0.937rem] box-border whitespace-nowrap text-center text-[0.738rem] ${tradingData?.accountInfo?.tradeAllowed ? "text-green-800 bg-green-200" : "text-crimson bg-mistyrose-100"}`}>
                              <a className="[text-decoration:none] flex-1 relative leading-[1rem] capitalize font-light text-[inherit] inline-block min-w-[4.006rem]">
                                {tradingData?.accountInfo?.tradeAllowed ? "Trade Allowed" : "Trade Not Allowed"}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start pt-[1rem] pb-[12.637rem] pl-[1.5rem] pr-[1.375rem] box-border relative gap-[9.231rem] max-w-full text-[0.969rem] text-gray-100 mq450:gap-[2.313rem] mq450:pb-[5.313rem] mq450:box-border mq1100:gap-[4.625rem] mq1100:pt-[1.25rem] mq1100:pb-[8.188rem] mq1100:box-border">
                        <div className="absolute !m-[0] top-[4.25rem] right-[6.556rem] leading-[1.5rem] font-light inline-block min-w-[2.7rem]">
                          Loss:
                        </div>
                        <div className="absolute !m-[0] top-[4.25rem] right-[2.575rem] text-[1rem] leading-[1.5rem] text-tomato inline-block min-w-[3.5rem]">
                          {lossPercentage}%
                        </div>
                        <img
                          className="w-[1.125rem] h-[1.125rem] absolute !m-[0] top-[4.375rem] right-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowdown4184e505127eb0cffce026aef2181927svg.svg"
                        />
                        <div className="self-stretch flex flex-col items-end justify-start gap-[1.093rem] max-w-full text-[1.106rem]">
                          <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[1.25rem] mq450:flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                                <img
                                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/maxloss755f8d81bc142738c8ebaa98ad0b63afsvg.svg"
                                />
                              </div>
                              <div className="relative leading-[1.75rem] font-semibold">
                                Account Balance
                              </div>
                            </div>
                            <div className="w-[8.281rem] flex flex-col items-start justify-start text-[1.088rem]">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <b className="relative leading-[1.75rem] inline-block min-w-[5.513rem] whitespace-nowrap">
                                  {tradingData?.accountInfo?.balance}
                                </b>
                              </div>
                              <div className="flex flex-row items-start justify-start gap-[0.456rem] text-[0.994rem]">
                                <div className="relative leading-[1.5rem] font-light inline-block min-w-[3.188rem] shrink-0">
                                  Equity:
                                </div>
                                <div className="relative text-[0.988rem] leading-[1.5rem] inline-block min-w-[4.638rem] shrink-0 whitespace-nowrap">
                                  {tradingData?.accountInfo?.equity}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.5rem] pr-[0.312rem] box-border max-w-full">
                            {/* <Chart showLeftText /> */}
                            <ProfitLossChart data={tradingData?.dealsByTimeRange?.deals} />
                          </div>
                        </div>
                        {/* <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[0.187rem] text-center text-[0.875rem]">
                          <div className="w-[19.763rem] flex flex-row items-start justify-start">
                            <div className="w-[4.931rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-blueviolet flex flex-row items-start justify-start py-[0.687rem] pl-[1.187rem] pr-[1.125rem] box-border text-white">
                              <div className="flex-1 relative leading-[1.25rem] font-medium inline-block min-w-[2.575rem]">
                                Today
                              </div>
                            </div>
                            <div className="w-[4.538rem] bg-white border-gainsboro border-t-[1px] border-solid border-gainsboro border-r-[1px] border-solid border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] px-[1rem]">
                              <div className="relative leading-[1.25rem] font-medium inline-block min-w-[2.375rem]">
                                Week
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start text-[0.869rem]">
                              <div className="w-[4.869rem] bg-white border-gainsboro border-t-[1px] border-solid border-gainsboro border-r-[1px] border-solid border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] px-[1rem] shrink-0">
                                <div className="w-[2.694rem] relative leading-[1.25rem] font-medium flex items-center justify-center shrink-0 min-w-[2.694rem]">
                                  Month
                                </div>
                              </div>
                              <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-white border-gainsboro border-t-[1px] border-solid border-gainsboro border-r-[1px] border-solid border-gainsboro border-b-[1px] border-solid flex flex-row items-start justify-start py-[0.562rem] px-[1rem] shrink-0 z-[1] ml-[-0.007rem]">
                                <div className="relative leading-[1.25rem] font-medium inline-block min-w-[3.25rem]">
                                  Custom
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="w-[27.125rem] rounded-2xl bg-white flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border gap-[1rem] min-w-[27.125rem] max-w-full text-[0.994rem] text-gray-100 mq1250:flex-1 mq750:min-w-full">
                      <div className="self-stretch rounded-xl bg-white flex flex-row items-end justify-start py-[1rem] pl-[1.25rem] pr-[1.187rem] box-border gap-[0.5rem] max-w-full text-[0.988rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[1.025rem]">
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-2.svg"
                          />
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-3.svg"
                          />
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-4.svg"
                          />
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-5.svg"
                          />
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-6.svg"
                          />
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative"
                            alt=""
                            src="/svg-6.svg"
                          />
                        </div>
                        {/* <div className="flex-1 flex flex-col items-start justify-start gap-[0.993rem] min-w-[14.688rem] max-w-full">
                          <div className="self-stretch flex flex-row items-end justify-start gap-[0.481rem] mq450:flex-wrap">
                            <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[3.938rem]">
                              Platform
                            </a>
                            <div className="flex-1 rounded-md bg-lavender-100 flex flex-row items-start justify-start pt-[0.237rem] px-[0.75rem] pb-[0.231rem] box-border min-w-[5.188rem] text-right text-[0.688rem]">
                              <a className="[text-decoration:none] relative leading-[1.063rem] uppercase font-light text-[inherit] inline-block min-w-[5.188rem]">
                                matchtrader
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
                                student
                              </b>
                              <b className="w-[15.806rem] relative leading-[1.5rem] flex items-center whitespace-nowrap">
                                $5,000.00
                              </b>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[0.043rem] text-[0.975rem] mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start gap-[1rem]">
                              <div className="relative leading-[1.5rem]">
                                Start trade period:
                              </div>
                              <div className="relative text-[0.988rem] leading-[1.5rem] inline-block min-w-[8.088rem]">
                                End trade period:
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start gap-[1rem] min-w-[9.125rem] text-right text-[1rem]">
                              <b className="w-[13.619rem] relative leading-[1.5rem] flex items-center">
                                May 27, 2024
                              </b>
                              <b className="self-stretch relative leading-[1.5rem]">
                                May 28, 2024
                              </b>
                            </div>
                          </div>
                        </div> */}

                        <TradingDataComponent tradedata={tradingData} />
                      </div>

                      <TradingObjectives data={tradingData} />


                      {/* <>
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-[1.1rem]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                            <div className="flex flex-row items-start justify-start gap-[0.493rem]">
                              <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                                <img
                                  className="w-[1.313rem] h-[1.313rem] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/dailylossdfaa8b26121f898f0cb23ff953fd4032svg.svg"
                                />
                              </div>
                              <div className="relative leading-[1.75rem] font-semibold">
                                Trading objectives
                              </div>
                              <div className="w-[4.888rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border text-center text-[0.738rem] text-lightcoral">
                                <div className="self-stretch rounded bg-mistyrose-200 flex flex-row items-start justify-start py-[0.25rem] pl-[0.5rem] pr-[0.437rem] gap-[0.25rem]">
                                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                                    <img
                                      className="w-[0.75rem] h-[0.75rem] relative"
                                      alt=""
                                      src="/svg-8.svg"
                                    />
                                  </div>
                                  <div className="flex-1 relative leading-[1rem] inline-block min-w-[2.9rem]">
                                    Violated
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.925rem] max-w-full text-[0.994rem] text-blueviolet mq450:flex-wrap">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[0.256rem] min-w-[13.188rem] max-w-full">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                  <div className="flex flex-row items-start justify-start gap-[0.45rem]">
                                    <b className="relative leading-[1.5rem] inline-block min-w-[7.625rem]">
                                      Daily Loss Limit
                                    </b>
                                    <div className="rounded bg-mistyrose-200 flex flex-row items-start justify-start py-[0.25rem] pl-[0.5rem] pr-[0.437rem] gap-[0.25rem] text-[0.75rem] text-gray-100">
                                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                                        <img
                                          className="w-[0.75rem] h-[0.75rem] relative overflow-hidden shrink-0"
                                          alt=""
                                          src="/failedd6053cf57e45a3d15c397348dd16cd25svg.svg"
                                        />
                                      </div>
                                      <div className="relative leading-[1rem] inline-block min-w-[5.063rem]">
                                        Market closed
                                      </div>
                                    </div>
                                  </div>
                                  <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[1.1rem] text-gray-100 mq450:flex-wrap">
                                    <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                                      <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[5.575rem] shrink-0">
                                        $0.00 Left
                                      </div>
                                    </div>
                                    <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[2.75rem] shrink-0">
                                      100%
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch h-[0.375rem] relative rounded-9980xl bg-crimson overflow-hidden shrink-0">
                                  <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] rounded-9980xl bg-crimson h-full hidden" />
                                </div>
                                <div className="relative text-[0.875rem] leading-[1.25rem] text-darkgray">
                                  <p className="m-0">Maximum $237.57 daily loss</p>
                                  <p className="m-0">
                                    Today's starting balance/equity: $4,751.30
                                  </p>
                                  <p className="m-0">Threshold at: $4,513.74</p>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                                <div className="flex flex-col items-end justify-start gap-[1.468rem]">
                                  <img
                                    className="w-[1.063rem] h-[1.063rem] relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src="/information9656d223db89555a04b54d5c91e25e31svg.svg"
                                  />
                                  <img
                                    className="w-[2.25rem] h-[2.25rem] relative rounded-9980xl"
                                    loading="lazy"
                                    alt=""
                                    src="/background.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-blueviolet">
                          <div className="flex-1 rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.906rem] max-w-full mq450:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.188rem] max-w-full">
                              <b className="relative leading-[1.5rem] inline-block min-w-[7.25rem]">
                                Max Loss Limit
                              </b>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[0.256rem] text-[1.088rem] text-gray-100">
                                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                                    <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[6.019rem]">
                                      $10.30 Left
                                    </div>
                                  </div>
                                  <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[3.688rem]">
                                    97.94%
                                  </div>
                                </div>
                                <div className="self-stretch rounded-9980xl bg-gainsboro overflow-hidden flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.375rem]">
                                  <div className="h-[0.375rem] flex-1 relative rounded-9980xl bg-crimson" />
                                </div>
                                <div className="relative text-[0.875rem] leading-[1.25rem] text-darkgray">
                                  <p className="m-0">Maximum $500.00 loss</p>
                                  <p className="m-0">Threshold at: $4,500.00</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                              <div className="flex flex-col items-end justify-start gap-[1.468rem]">
                                <img
                                  className="w-[1.063rem] h-[1.063rem] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/information9656d223db89555a04b54d5c91e25e31svg.svg"
                                />
                                <img
                                  className="w-[2.25rem] h-[2.25rem] relative rounded-9980xl"
                                  alt=""
                                  src="/background-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-blueviolet">
                          <div className="flex-1 rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.937rem] max-w-full mq450:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.188rem] max-w-full">
                              <b className="relative leading-[1.5rem] inline-block min-w-[6.063rem]">
                                Profit Target
                              </b>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[0.256rem] text-[1.1rem] text-gray-100">
                                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                                    <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[6.863rem]">
                                      $889.70 Left
                                    </div>
                                  </div>
                                  <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[1.688rem]">
                                    0%
                                  </div>
                                </div>
                                <div className="self-stretch h-[0.375rem] relative rounded-9980xl bg-gainsboro overflow-hidden shrink-0" />
                                <div className="relative text-[0.869rem] leading-[1.25rem] text-darkgray">
                                  $400.00 Profit target
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                              <div className="flex flex-col items-end justify-start gap-[1.468rem]">
                                <img
                                  className="w-[1.063rem] h-[1.063rem] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/information9656d223db89555a04b54d5c91e25e31svg.svg"
                                />
                                <img
                                  className="w-[2.25rem] h-[2.25rem] relative rounded-9980xl"
                                  alt=""
                                  src="/background-2.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </> */}
                    </div>
                  </div>
                  <TradingHistory data={tradingData?.openOrders} />
                  <TradingHistoryTable data={tradingData?.historyOrdersByTimeRange?.historyOrders} />
                  {/* <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-[1rem] px-[1.25rem] pb-[2.25rem] box-border gap-[1rem] max-w-full text-[1.1rem] text-gray-100 mq750:pt-[1.25rem] mq750:pb-[1.438rem] mq750:box-border">
                    <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[1.5rem] h-[1.5rem] relative shrink-0"
                          alt=""
                          src="/svg-9.svg"
                        />
                      </div>
                      <div className="relative leading-[1.75rem] font-semibold shrink-0">
                        Trading History
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.237rem] max-w-full text-[0.875rem] text-slategray">
                      <div className="self-stretch shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.1)] rounded-lg bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.156rem] box-border relative max-w-full">
                        <div className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-between flex-wrap content-start py-[0.75rem] pl-[1.5rem] pr-[5.625rem] gap-[1.25rem] text-[0.75rem] text-darkslategray mq1250:pr-[2.813rem] mq1250:box-border mq750:pr-[1.375rem] mq750:box-border">
                          <b className="relative leading-[1rem] uppercase inline-block min-w-[3.25rem]">
                            Symbol
                          </b>
                          <b className="relative leading-[1rem] uppercase inline-block min-w-[2.013rem]">
                            Type
                          </b>
                          <b className="relative leading-[1rem] uppercase inline-block min-w-[4.844rem]">
                            Open date
                          </b>
                          <b className="w-[5.688rem] relative leading-[1rem] uppercase flex items-center shrink-0">
                            Open
                          </b>
                          <b className="w-[6.044rem] relative leading-[1rem] uppercase flex items-center shrink-0">
                            Closed date
                          </b>
                          <b className="w-[5.281rem] relative leading-[1rem] uppercase flex items-center shrink-0">
                            Close
                          </b>
                          <b className="w-[1.5rem] relative leading-[1rem] uppercase flex items-center shrink-0">
                            TP
                          </b>
                          <b className="w-[2.65rem] relative leading-[1rem] uppercase flex items-center shrink-0">
                            SL
                          </b>
                          <b className="relative text-[0.6rem] leading-[1rem] uppercase inline-block min-w-[1.563rem]">
                            Lots
                          </b>
                          <b className="relative text-[0.694rem] leading-[1rem] uppercase inline-block min-w-[4.75rem]">
                            Commission
                          </b>
                          <b className="relative text-[0.631rem] leading-[1rem] uppercase inline-block min-w-[2.319rem]">
                            Profit
                          </b>
                        </div>
                        <div className="self-stretch bg-white border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[1rem] px-[1.5rem] pb-[0.937rem] gap-[2.95rem] max-w-full mq1250:flex-wrap mq750:gap-[1.5rem]">
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
                          <div className="w-[25.969rem] flex flex-row items-start justify-between py-[0rem] pl-[0rem] pr-[2.375rem] box-border max-w-full gap-[1.25rem] mq750:flex-wrap">
                            <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.437rem]">
                              <div className="relative leading-[1.25rem]">
                                <p className="m-0">May 27, 2024 6:32</p>
                                <p className="m-0">PM</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-[0.438rem]">
                              <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[1.813rem]">
                                1.27568
                              </div>
                            </div>
                            <div className="relative leading-[1.25rem]">
                              <p className="m-0">May 27, 2024 6:41</p>
                              <p className="m-0">PM</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-[0.481rem]">
                            <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[1.875rem]">
                              1.27583
                            </div>
                          </div>
                          <div className="w-[11.431rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border">
                            <div className="self-stretch relative leading-[1.25rem] font-semibold">
                              0.6
                            </div>
                          </div>
                          <div className="w-[1.788rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border">
                            <div className="self-stretch relative leading-[1.25rem] font-semibold">
                              1.2
                            </div>
                          </div>
                          <div className="w-[6.825rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border text-tomato">
                            <div className="self-stretch relative leading-[1.25rem] font-semibold">
                              -$9.00
                            </div>
                          </div>
                        </div>
                        <Row />
                        <Row
                          propPadding="0.625rem 0.5rem 0rem 0rem"
                          propMinWidth="1.188rem"
                        />
                        <div className="w-full h-[4.563rem] absolute !m-[0] right-[0rem] bottom-[-4.406rem] left-[0rem] bg-white border-gainsboro border-b-[1px] border-solid box-border" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem] text-center text-[0.975rem] text-gray-100">
                        <div className="w-[9.419rem] flex flex-col items-end justify-start gap-[0.512rem]">
                          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.375rem]">
                            <div className="flex-1 relative leading-[1.5rem] inline-block min-w-[6.656rem]">
                              <span>{`Showing `}</span>
                              <b>{`1 `}</b>
                              <span>{`of `}</span>
                              <b>1</b>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start text-[1rem] text-slategray">
                            <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-white border-lightgray-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[0.437rem] pb-[0.5rem] pl-[0.812rem] pr-[0.625rem] opacity-[0.5] shrink-0">
                              <div className="relative leading-[1.25rem] inline-block min-w-[4.125rem]">
                                Previous
                              </div>
                            </div>
                            <div className="w-[3.813rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-white border-lightgray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0.437rem] pb-[0.5rem] pl-[0.812rem] pr-[0.687rem] opacity-[0.5] shrink-0 z-[1] ml-[-0.063rem] text-[0.988rem]">
                              <div className="w-[2.2rem] relative leading-[1.25rem] flex items-center justify-center shrink-0 min-w-[2.2rem]">
                                Next
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <footer className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start pt-[1.487rem] pb-[1.5rem] pl-[2rem] pr-[1.25rem] box-border gap-[0.762rem] max-w-full text-left text-[0.994rem] text-crimson font-inter">
                    <b className="relative leading-[1.5rem] inline-block min-w-[6.188rem]">
                      DISCLAIMER
                    </b>
                    <div className="relative text-[0.875rem] leading-[1.25rem] font-light inline-block max-w-full">
                      <p className="m-0">
                        TRADING RESULTS ON THIS DASHBOARD ARE INFORMATIVE ONLY.
                        REAL-TIME TRADING UPDATES CAN BE MONITORED THROUGH THE TRADING
                        PLATFORM. THE ABOVE ACCOUNT
                      </p>
                      <p className="m-0">
                        STATISTICS ARE AUTOMATICALLY UPDATED PERIODICALLY WHEN YOU
                        HAVE ACTIVE TRADE(S). IN CASE OF ANY DISCREPANCIES, PLEASE BE
                        PATIENT FOR THE DATA TO SYNC, IF THE
                      </p>
                      <p className="m-0">
                        ISSUE STILL PERSISTS PLEASE CONTACT US THROUGH HELP CENTER.
                      </p>
                    </div>
                  </footer>
                </div>
              </section>
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;


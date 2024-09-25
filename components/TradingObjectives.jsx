const TradingObjectives = ({ data }) => {
  const account = data.accountInfo;

  // For simplicity, these are arbitrary values you can replace with actual calculations
  // const dailyLossLimit = 237.57; // Example maximum daily loss
  // const maxLossLimit = 500; // Example maximum total loss
  // const profitTarget = 400; // Example profit target

  // const currentDailyLoss = account.balance - account.equity;
  // const dailyLossPercentage = (currentDailyLoss / dailyLossLimit) * 100;

  // const currentMaxLoss = account.balance - account.equity;
  // const maxLossPercentage = (currentMaxLoss / maxLossLimit) * 100;

  // const currentProfit = account.equity - account.balance;
  // const profitPercentage = (currentProfit / profitTarget) * 100;

  // Log the calculated values for debugging
  // currentDailyLoss;
  // dailyLossPercentage;
  // currentMaxLoss;
  // maxLossPercentage;
  // currentProfit;
  // profitPercentage;
  // dailyLossLimit;
  // maxLossLimit;
  // profitTarget;

  console.log("Current : ");

  const accountBalance = data.accountInfo.balance;
  const deals = data.dealsByTimeRange.deals;

  // Calculate Current Daily Loss
  let currentDailyLoss = 0;
  deals.forEach((deal) => {
    const dealTime = new Date(deal.time);
    const today = new Date();
    if (
      deal.profit < 0 &&
      dealTime.getDate() === today.getDate() &&
      dealTime.getMonth() === today.getMonth() &&
      dealTime.getFullYear() === today.getFullYear()
    ) {
      currentDailyLoss += deal.profit; // Sum losses
    }
  });

  // Calculate Daily Loss Percentage
  const dailyLossPercentage = (currentDailyLoss / accountBalance) * 100;

  // Calculate Current Max Loss
  let currentMaxLoss = Math.min(
    ...deals.filter((deal) => deal.profit < 0).map((deal) => deal.profit),
    0
  ); // Assume max loss is the worst loss recorded

  // Calculate Max Loss Percentage
  const maxLossPercentage = (currentMaxLoss / accountBalance) * 100;

  // Calculate Current Profit
  let currentProfit = deals.reduce((sum, deal) => sum + deal.profit, 0); // Sum all profits

  // Calculate Profit Percentage
  const profitPercentage = (currentProfit / accountBalance) * 100;

  // Assume predefined limits
  const dailyLossLimit = 500; // Example value
  const maxLossLimit = 2000; // Example value
  const profitTarget = 1000; // Example value

  console.log({
    currentDailyLoss,
    dailyLossPercentage,
    currentMaxLoss,
    maxLossPercentage,
    currentProfit,
    profitPercentage,
    dailyLossLimit,
    maxLossLimit,
    profitTarget,
  });

  const isTradingObjectivesViolated =
    currentDailyLoss < -dailyLossLimit ||
    currentMaxLoss < -maxLossLimit ||
    currentProfit < profitTarget;

  console.log("Is Trading Objectives Violated:", isTradingObjectivesViolated);

  return (
    <>
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
            <div className={` flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border text-center text-[0.738rem]  `}>
              <div className={`self-stretch rounded ${isTradingObjectivesViolated ? "bg-mistyrose-200" : "bg-green-200"}  flex flex-row items-start justify-start py-[0.25rem] pl-[0.5rem] pr-[0.437rem] gap-[0.25rem] `}>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  {isTradingObjectivesViolated && <img
                    className="w-[0.75rem] h-[0.75rem] relative"
                    alt=""
                    src="/svg-8.svg"
                  />}
                </div>
                <div className="flex-1 relative leading-[1rem] inline-block text-nowrap min-w-[2.9rem]">
                  {isTradingObjectivesViolated
                    ? "Violated"
                    : "Trading Objectives Met"}
                </div>
              </div>
            </div>
          </div>

          {/* Daily Loss Limit */}
          <div className="self-stretch rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.925rem] max-w-full text-[0.994rem] text-blueviolet mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.256rem] min-w-[13.188rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="flex flex-row items-start justify-start gap-[0.45rem]">
                  <b className="relative leading-[1.5rem] inline-block min-w-[7.625rem]">
                    Daily Loss Limit
                  </b>
                  {/* <div className="rounded bg-mistyrose-200 flex flex-row items-start justify-start py-[0.25rem] pl-[0.5rem] pr-[0.437rem] gap-[0.25rem] text-[0.75rem] text-gray-100">
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
                  </div> */}
                </div>
                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[1.1rem] text-gray-100 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                    <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[5.575rem] shrink-0">
                      {`$${dailyLossLimit - currentDailyLoss} Left`}
                    </div>
                  </div>
                  <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[2.75rem] shrink-0">
                    {`${Math.min(dailyLossPercentage, 100).toFixed(2)}%`}
                  </div>
                </div>
              </div>
              <div
                className={`h-[0.375rem] !w-[100%] outline outline-slate-400 rounded-9980xl`}
              >
                {Math.min(dailyLossPercentage, 100).toFixed(2) >= 1 && (
                  <div
                    className={` max-w-[${Math.min(
                      dailyLossPercentage,
                      100
                    ).toFixed(2)}%] rounded-9980xl bg-crimson h-full`}
                  />
                )}
              </div>
              <div className="relative text-[0.875rem] leading-[1.25rem] text-darkgray">
                <p className="m-0">{`Maximum $${dailyLossLimit} daily loss`}</p>
                <p className="m-0">{`Today's starting balance/equity: $${account.balance.toFixed(
                  2
                )}`}</p>
                <p className="m-0">{`Threshold at: $${(
                  account.balance - dailyLossLimit
                ).toFixed(2)}`}</p>
              </div>
            </div>
          </div>

          {/* Max Loss Limit */}
          <div className="self-stretch rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.906rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.188rem] max-w-full">
              <b className="relative leading-[1.5rem] inline-block min-w-[7.25rem]">
                Max Loss Limit
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.256rem] text-[1.088rem] text-gray-100">
                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                    <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[6.019rem]">
                      {`$${maxLossLimit - currentMaxLoss} Left`}
                    </div>
                  </div>
                  <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[3.688rem]">
                    {`${Math.min(maxLossPercentage, 100).toFixed(2)}%`}
                  </div>
                </div>
                <div
                  className={`h-[0.375rem] !w-[100%] outline outline-slate-400 rounded-9980xl`}
                >
                  {Math.min(maxLossPercentage, 100).toFixed(2) >= 1 && (
                    <div
                      className={` max-w-[${Math.min(
                        maxLossPercentage,
                        100
                      ).toFixed(2)}%] rounded-9980xl bg-crimson h-full`}
                    />
                  )}
                </div>
                <div className="relative text-[0.875rem] leading-[1.25rem] text-darkgray">
                  <p className="m-0">{`Maximum $${maxLossLimit} loss`}</p>
                  <p className="m-0">{`Current balance/equity: $${account.equity.toFixed(
                    2
                  )}`}</p>
                  <p className="m-0">{`Threshold at: $${(
                    account.balance - maxLossLimit
                  ).toFixed(2)}`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profit Target */}
          <div className="self-stretch rounded-xl border-blueviolet border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[0.5rem] gap-[0.906rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.188rem] max-w-full">
              <b className="relative leading-[1.5rem] inline-block min-w-[7.25rem]">
                Profit Target
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.256rem] text-[1.088rem] text-gray-100">
                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.612rem]">
                    <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[6.019rem]">
                      {`$${profitTarget - currentProfit} Left`}
                    </div>
                  </div>
                  <div className="relative text-[1rem] leading-[1.5rem] font-medium inline-block min-w-[3.688rem]">
                    {`${Math.min(profitPercentage, 100).toFixed(2)}%`}
                  </div>
                </div>
                <div
                  className={`h-[0.375rem] !w-[100%] outline outline-slate-400 rounded-9980xl`}
                >
                  {Math.min(profitPercentage, 100).toFixed(2) >= 1 && (
                    <div
                      className={` max-w-[${Math.min(
                        maxLossPercentage,
                        100
                      ).toFixed(2)}%] rounded-9980xl bg-green-500 h-full`}
                    />
                  )}
                </div>
                <div className="relative text-[0.875rem] leading-[1.25rem] text-darkgray">
                  <p className="m-0">{`Target profit: $${profitTarget}`}</p>
                  <p className="m-0">{`Current profit: $${currentProfit.toFixed(
                    2
                  )}`}</p>
                  <p className="m-0">{`Total equity: $${account.equity.toFixed(
                    2
                  )}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingObjectives;

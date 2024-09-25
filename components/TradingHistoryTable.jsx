import React from "react";

const TradingHistoryTable = ({ data }) => {
  return (
    <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-4 px-5 pb-9 box-border gap-4 max-w-full text-[1.1rem] text-gray-700">
      <div className="flex flex-row items-start justify-start gap-2">
        <div className="flex flex-col items-start justify-start">
          <img
            className="w-6 h-6 relative shrink-0"
            alt="icon"
            src="/svg-9.svg"
          />
        </div>
        <div className="relative leading-[1.75rem] font-semibold shrink-0">
          Orders history
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-sm text-slategray overflow-x-auto">
        <table className="max-w-full overflow-x-auto bg-gray-200 shadow-md rounded-lg">
          <thead className="bg-whitesmoke-100">
            <tr className="text-left text-darkslategray uppercase font-bold">
              <th className="py-3 px-6 text-nowrap">Sr. No.</th>
              <th className="py-3 px-6 text-nowrap">ID</th>
              <th className="py-3 px-6 text-nowrap">Platform</th>
              <th className="py-3 px-6 text-nowrap">Type</th>
              <th className="py-3 px-6 text-nowrap">State</th>
              <th className="py-3 px-6 text-nowrap">Symbol</th>
              <th className="py-3 px-6 text-nowrap">Open Price</th>
              <th className="py-3 px-6 text-nowrap">Volume</th>
              <th className="py-3 px-6 text-nowrap">Current Volume</th>
              <th className="py-3 px-6 text-nowrap">Position ID</th>
              <th className="py-3 px-6 text-nowrap">Open Date</th>
              <th className="py-3 px-6 text-nowrap">Done Date</th>
              <th className="py-3 px-6 text-nowrap">Broker Comment</th>
              <th className="py-3 px-6 text-nowrap">Reason</th>
              <th className="py-3 px-6 text-nowrap">Filling Mode</th>
              <th className="py-3 px-6 text-nowrap">Expiration Type</th>
              <th className="py-3 px-6 text-nowrap">Account Currency Exchange Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((trade, index) => (
              <tr key={trade.id} className="border-b last:border-none">
                <td className="py-3 px-6 text-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-nowrap">{trade.id}</td>
                <td className="py-3 px-6 text-nowrap">{trade.platform}</td>
                <td className={`${trade.type.replace("ORDER_TYPE_", "") === "BUY" ? " text-[#6639E4] bg-[#ECE6FF]" : "bg-red-200 text-red-500"} py-3 px-6 text-nowrap`}>
                  {trade.type.replace("ORDER_TYPE_", "")}
                </td>
                <td className="py-3 px-6 text-nowrap">{trade.state}</td>
                <td className="py-3 px-6 text-nowrap">{trade.symbol}</td>
                <td className="py-3 px-6 text-nowrap">{trade.openPrice}</td>
                <td className="py-3 px-6 text-nowrap">{trade.volume}</td>
                <td className="py-3 px-6 text-nowrap">{trade.currentVolume}</td>
                <td className="py-3 px-6 text-nowrap">{trade.positionId}</td>
                <td className="py-3 px-6 text-nowrap">
                  {new Date(trade.time).toLocaleString()}
                </td>
                <td className="py-3 px-6 text-nowrap">
                  {new Date(trade.doneTime).toLocaleString()}
                </td>
                <td className="py-3 px-6 text-nowrap">{trade.brokerComment}</td>
                <td className="py-3 px-6 text-nowrap">{trade.reason}</td>
                <td className="py-3 px-6 text-nowrap">{trade.fillingMode}</td>
                <td className="py-3 px-6 text-nowrap">{trade.expirationType}</td>
                <td className="py-3 px-6 text-nowrap">
                  {trade.accountCurrencyExchangeRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="self-stretch flex flex-row items-center justify-center py-3 px-5 text-center text-base text-gray-600">
        <div>
          Showing <b>1</b> of <b>{data.length}</b>
        </div>
      </div>
    </div>
  );
};

export default TradingHistoryTable;

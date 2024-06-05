import SaleComponent from "./SaleComponent";

import { sales } from "../lib/data";

const SalesComponent = () => {
  return (
    <div className="flex flex-col gap-8 px-5 py-6 bg-white shadow-lg m-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-1 flex-col">
          <h2 className="text-xl text-[#05004E] font-bold">
            Today&apos;s Sales
          </h2>
          <p className="text-base text-gray-200">Sales Summary</p>
        </div>

        <button className="flex items-center gap-2 rounded-md border-1 border-gray-200 border py-1 px-2">
            <img src="assets/icons/ExportIcon.png"/>
            <span className="text-sm">Export</span>
        </button>
      </div>

      <div className="flex  gap-5 ">
        {sales.map((sale, index) => (
          <SaleComponent sale={sale} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SalesComponent;

/* eslint-disable react/prop-types */
const SaleComponent = ({sale}) => {
  return (
    <div className={`${sale.bgColor} flex flex-col items-start gap-2 p-4 rounded-xl hover:shadow-lg duration-200 ease cursor-pointer`}>
        <div className={`${sale.iconBgColor} p-1 rounded-full`}>
        <img src={sale.icon} className="w-4"/>
        </div>
        <h1 className="text-2xl font-bold text-[#151D48]">{sale.sales}</h1>
        <h2 className="text-sm font-semibold">{sale.message}</h2>
        <p className="text-xs text-[#4079ED]">{sale.description}</p>

    </div>
  )
}

export default SaleComponent
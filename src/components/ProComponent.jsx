const ProComponent = () => {
  return (
   <div className="relative">
    {/* <div className="w-[150px] h-[150px] bg-red-500 absolute rounded-full -right-[20%] -top-[20%] overflow-hidden "></div> */}
     <div className="bg-primary flex flex-col gap-2 p-6 items-center justify-center rounded-2xl">
      <img src="/assets/icons/pro.png" className="w-10" />
      <h2 className="text-xl text-white font-bold">Dabang Pro</h2>
      <p className="text-sm text-center text-white">
        Get access to all <br /> features on tetumbas
      </p>

      <button className="bg-white py-2 px-8 rounded-xl font-semibold text-primary mt-1">
        Get Pro
      </button>
    </div>
   </div>
  );
};

export default ProComponent;

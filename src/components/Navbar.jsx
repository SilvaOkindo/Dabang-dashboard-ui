const Navbar = () => {
  return (
    <nav className="flex items-center justify-around cursor-pointer">
      <h1 className="text-2xl text-[#151D48] font-bold">Dashboard</h1>

      <div className="flex items-center gap-10">
      <div className="flex items-center gap-1 bg-gray-200 rounded-md px-3 w-[350px]">
        <img src="/assets/icons/search.png" className="w-4" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none py-2"
        />
      </div>

      <div className="flex items-center gap-3 ">
        <img src="/assets/icons/United.svg" />
        <span className="text-sm font-semibold text-[#374557]">Eng (US)</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <div className="absolute bg-red-400 w-2 h-2 rounded-full right-1 top-1"></div>
          <img src="/assets/icons/Notifications.png" className="w-9" />
        </div>

        <img src="/assets/icons/pic.png" alt="profile pic" className="w-10" />

        <div className="flex items-start flex-col">
          <h2 className="sm font-bold">Silva</h2>
          <p className="text-xs text-gray-200">Okindo</p>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

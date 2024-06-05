import { sidebarLinks } from "../lib/data";
import ProComponent from "./ProComponent";

const SidebarMenu = () => {
  return (
    <aside className=" bg-red-40 flex flex-col gap-10 mb-10">
      <div className="flex items-center gap-5">
        <img src="/logo.png" className="w-10" />
        <h1 className="text-xl text-black font-bold">Dabang</h1>
      </div>

      <div className="flex flex-col gap-6">
        <a
          href="/"
          className="flex items-center gap-4 bg-blue-700 p-2 rounded-md justify-center"
        >
          <img src="/assets/icons/dashboard.png" />
          <span className="text-sm text-white font-bold">Dashboard</span>
        </a>

        {sidebarLinks.map((link, index) => (
          <a
            href={link.url}
            key={index}
            className={
              "flex items-center gap-4 hover:bg-blue-700 p-2 rounded-md hover:text-white duration-200 ease-in"
            }
          >
            <img src={link.icon} alt={link.name} className="w-4" />

            <span className="text-sm text--gray">{link.name}</span>
          </a>
        ))}
      </div>

      <ProComponent />
    </aside>
  );
};

export default SidebarMenu;

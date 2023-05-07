import { useState } from "react";
import { BsChevronBarDown, BsChevronDown, BsFillChatLeftQuoteFill, BsReceipt, BsFillFileEarmarkTextFill } from "react-icons/bs";


const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill",},
    
    { 
        title: "Quotation", 
        src: "Chat",
        submenu:true,
        submenuItems: [
            {
              title: "Quotation Manual",
              icon: <BsFillChatLeftQuoteFill/>
            },
            {
              title: "Quotation Rekomendasi",
              icon: <BsReceipt/>
            },
            {
              title: "Quotation",
              icon: <BsFillFileEarmarkTextFill/>
            }
        ],
    },
        

    { 
        title: "Data Vendor", 
        src: "User",
        submenu:true,
        submenuItems:[
            {title: "Data Area Wisata"},
            {title: "Data Destinasi Wisata"},
            {title: "Data Bus"},
            {title: "Data Hotel"},
            {title: "Data Rumah Makan"},
        ],
    },

    { title: "Data Item Quotation", src: "User"},
    { title: "Report", src: "Calendar" },
    { title: "Hak Akses", src: "Search" },
  ];
  

  return (
    <div className="flexside">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            HayuJalan</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              {Menu.submenu && (
                <BsChevronDown className={'${submenuOpen && "rotate-180"}'} onClick={() => 
                    setSubmenuOpen(!submenuOpen)} />
              )}
            </li>
            {Menu.submenu && submenuOpen &&  (
                <ul>
                    {Menu.submenuItems.map((submmenuItem, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 text-m hover:bg-light-white rounded-md">
                            {submmenuItem.icon} {submmenuItem.title} 
                            </li>
                    ))}
                 </ul>
            )}
            </>
            
          ))}
        </ul>
      </div>
    </div>
  );

 
};
export default App;
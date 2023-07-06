import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import {
  BsChevronBarDown,
  BsChevronDown,
  BsFillChatLeftQuoteFill,
  BsReceipt,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import * as RiIcons from 'react-icons/ri';

const Sidebar = ({ auth }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [open, setOpen] = useState(true);
  // console.log('user Navbae', auth.user.idRoles);
  const [roles, setRoles] = useState(auth.user.idRoles);
  // console.log('roles', roles)
  // Data
  const MenusAdmin = [
    { 
      title: "Dashboard", 
      src: "Chart_fill",
      path: "/homepage",
    },

    {
      title: "Quotation",
      src: "Chat",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: "Quotation Manual",
          icon: <BsFillChatLeftQuoteFill />,
          path: "/quotation",
        },
        {
          title: "Quotation Rekomendasi",
          icon: <BsReceipt />,
          path: "/quotation/qrecomend/",
        },
        {
          title: "Quotation",
          icon: <BsFillFileEarmarkTextFill />,
          path: "/quotation/qhistory/",
        },
      ],
    },

    {
      title: "Data Vendor",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Data Area Wisata",
          path: "/areawisata", 
        },
        { 
          title: "Data Destinasi Wisata",
          path: "/destinasiwisata", 
        },
        { 
          title: "Data Transportasi",
          path: "/transportasi", 
        },
        { 
          title: "Data Jenis Transportasi",
          path: "/jenisTransportasi", 
        },
        { 
          title: "Data Hotel",
          path: "/hotel", 
        },
        { 
          title: "Data Rumah Makan",
          path: "/rumahmakan", 
        },
      ],
    },

    {
      title: "Data Item Quotation",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Fasilitas Tour", 
          path: "/fasilitasTour",
        },
        { 
          title: "Crew Operasional", 
          path: "/crew",
        },
        { 
          title: "Data Event",
          path: "/event",
        },
        { 
          title: "Data Bonus",
          path: "/bonus",
        },
        { 
          title: "Data Jenis Klien",
          path: "/jenisKlien",
        },
        { 
          title: "Data Klient",
          path: "/klien",
        },
        { 
          title: "Kategori Tour",
          path: "/kategoriTour",
        },
      ],
    },

    { 
      title: "Report", 
      src: "Calendar",
      path: "/report" 
    },

    { 
      title: "Hak Akses", 
      src: "Search",
      path: "/akses" 
    },
  ];

  const MenusKeuangan = [
    { 
      title: "Dashboard", 
      src: "Chart_fill",
      path: "/homepage",
    },

    {
      title: "Quotation",
      src: "Chat",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: "Quotation",
          icon: <BsFillFileEarmarkTextFill />,
          path: "/quotation/qhistory/",
        },
      ],
    },

    {
      title: "Data Vendor",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Data Area Wisata",
          path: "/areawisata", 
        },
        { 
          title: "Data Destinasi Wisata",
          path: "/destinasiwisata", 
        },
        { 
          title: "Data Transportasi",
          path: "/transportasi", 
        },
        { 
          title: "Data Jenis Transportasi",
          path: "/jenisTransportasi", 
        },
        { 
          title: "Data Hotel",
          path: "/hotel", 
        },
        { 
          title: "Data Rumah Makan",
          path: "/rumahmakan", 
        },
      ],
    },

    {
      title: "Data Item Quotation",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Fasilitas Tour", 
          path: "/fasilitasTour",
        },
        { 
          title: "Crew Operasional", 
          path: "/crew",
        },
        { 
          title: "Data Event",
          path: "/event",
        },
        { 
          title: "Data Bonus",
          path: "/bonus",
        },
        { 
          title: "Data Jenis Klien",
          path: "/jenisKlien",
        },
        { 
          title: "Data Klient",
          path: "/klien",
        },
        { 
          title: "Kategori Tour",
          path: "/kategoriTour",
        },
      ],
    },

    { 
      title: "Report", 
      src: "Calendar",
      path: "/report" 
    },
  ];

  const MenusProgram = [
    { 
      title: "Dashboard", 
      src: "Chart_fill",
      path: "/homepage",
    },

    {
      title: "Quotation",
      src: "Chat",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: "Quotation Manual",
          icon: <BsFillChatLeftQuoteFill />,
          path: "/quotation",
        },
        {
          title: "Quotation Rekomendasi",
          icon: <BsReceipt />,
          path: "/quotation/qrecomend/",
        },
        {
          title: "Quotation",
          icon: <BsFillFileEarmarkTextFill />,
          path: "/quotation/qhistory/",
        },
      ],
    },

    {
      title: "Data Vendor",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Data Area Wisata",
          path: "/areawisata", 
        },
        { 
          title: "Data Destinasi Wisata",
          path: "/destinasiwisata", 
        },
        { 
          title: "Data Transportasi",
          path: "/transportasi", 
        },
        { 
          title: "Data Jenis Transportasi",
          path: "/jenisTransportasi", 
        },
        { 
          title: "Data Hotel",
          path: "/hotel", 
        },
        { 
          title: "Data Rumah Makan",
          path: "/rumahmakan", 
        },
      ],
    },

    {
      title: "Data Item Quotation",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Fasilitas Tour", 
          path: "/fasilitasTour",
        },
        { 
          title: "Crew Operasional", 
          path: "/crew",
        },
        { 
          title: "Data Event",
          path: "/event",
        },
        { 
          title: "Data Bonus",
          path: "/bonus",
        },
        { 
          title: "Data Jenis Klien",
          path: "/jenisKlien",
        },
        { 
          title: "Data Klient",
          path: "/klien",
        },
        { 
          title: "Kategori Tour",
          path: "/kategoriTour",
        },
      ],
    },

    { 
      title: "Report", 
      src: "Calendar",
      path: "/report" 
    },
  ];

  const MenusSales = [
    { 
      title: "Dashboard", 
      src: "Chart_fill",
      path: "/homepage",
    },

    {
      title: "Quotation",
      src: "Chat",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: "Quotation Manual",
          icon: <BsFillChatLeftQuoteFill />,
          path: "/quotation",
        },
        {
          title: "Quotation Rekomendasi",
          icon: <BsReceipt />,
          path: "/quotation/qrecomend/",
        },
        {
          title: "Quotation",
          icon: <BsFillFileEarmarkTextFill />,
          path: "/quotation/qhistory/",
        },
      ],
    },

    {
      title: "Data Vendor",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Data Area Wisata",
          path: "/areawisata", 
        },
        { 
          title: "Data Destinasi Wisata",
          path: "/destinasiwisata", 
        },
        { 
          title: "Data Transportasi",
          path: "/transportasi", 
        },
        { 
          title: "Data Jenis Transportasi",
          path: "/jenisTransportasi", 
        },
        { 
          title: "Data Hotel",
          path: "/hotel", 
        },
        { 
          title: "Data Rumah Makan",
          path: "/rumahmakan", 
        },
      ],
    },

    {
      title: "Data Item Quotation",
      src: "User",
      path: "#",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        { 
          title: "Fasilitas Tour", 
          path: "/fasilitasTour",
        },
        { 
          title: "Crew Operasional", 
          path: "/crew",
        },
        { 
          title: "Data Event",
          path: "/event",
        },
        { 
          title: "Data Bonus",
          path: "/bonus",
        },
        { 
          title: "Data Jenis Klien",
          path: "/jenisKlien",
        },
        { 
          title: "Data Klient",
          path: "/klien",
        },
        { 
          title: "Kategori Tour",
          path: "/kategoriTour",
        },
      ],
    },

    { 
      title: "Report", 
      src: "Calendar",
      path: "/report" 
    },
  ];

  // console.log('Menu', Menus)

  return (
    <div className="flex  overflow-auto bg-blue">
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
            HayuJalan
          </h1>
        </div>
        {/* Menu */}
        <div className="pt-6">
        {
          roles === 1 && MenusAdmin.map((Menu, index) => (
            <SidebarMenu key={index} Menu={Menu} open={open}/>
          ))
        }
        {
          roles === 2 && MenusProgram.map((Menu, index) => (
            <SidebarMenu key={index} Menu={Menu} open={open}/>
          ))
        }
        {
          roles === 3 && MenusKeuangan.map((Menu, index) => (
            <SidebarMenu key={index} Menu={Menu} open={open}/>
          ))
        }
        {
          roles === 4 && MenusSales.map((Menu, index) => (
            <SidebarMenu key={index} Menu={Menu} open={open}/>
          ))
        }
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

const SidebarMenu = ({Menu, key, open}) => {
  // console.log('title', Menu)
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link
        href={Menu.path} 
        as="button"
        onClick={Menu.subNav && showSubnav}
        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${key === 0 && "bg-light-white"} `}
      >
        <img src={`/assets/${Menu.src}.png`} />
        <span
            className={`${!open && "hidden"} duration-200`}
        >{Menu.title}</span>
        <div className={`${!open && "hidden"} duration-200`}>
          {Menu.subNav && subnav
          ? Menu.iconOpened
          : Menu.subNav
          ? Menu.iconClosed
          : null}
        </div>
      </Link>
      {subnav &&
        Menu.subNav.map((submenu, index) => {
          return (
            <Link
              key={index}
              href={submenu.path} 
              as="button"
              onClick={submenu.subNav && showSubnav}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${submenu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} ${!open && "hidden"} duration-200`}
            >
              {/* <img src={`/assets/${Menu.src}.png`} /> */}
              <span
                className={`${!open && "hidden"} duration-200`}
              >{submenu.title}</span>
            </Link>
          );
        }
      )}
    </>
  )
}
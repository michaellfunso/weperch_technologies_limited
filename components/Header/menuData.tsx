import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "Services",
    newTab: false,
    path: "/#services",
  },
  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "Enterprise",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Overview",
        newTab: false,
        path: "/overview",
      },
      // {
      //   id: 34,
      //   title: "Sign In",
      //   newTab: false,
      //   path: "/auth/signin",
      // },
      // {
      //   id: 35,
      //   title: "Sign Up",
      //   newTab: false,
      //   path: "/auth/signup",
      // },
      {
        id: 34,
        title: "Our Products",
        newTab: false,
        path: "/products",
      },
      {
        id: 35.1,
        title: "Pricing",
        newTab: false,
        path: "/pricing",
      },
      {
        id: 36,
        title: "Sales - Talk to us",
        newTab: false,
        path: "/support",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;


import { Car, Grid, House, Internet, Invest, TV, Thunder, Water } from '../../../../utils/image';
import { MenuListItem } from "./types";

export const MenuListApp: MenuListItem[][] = [
  [
    {
      icon: Internet,
      label: "Internet",
    },
    {
      icon: Water,
      label: "Water",
    },
    {
      icon: Thunder,
      label: "Electricity",
    },
    {
      icon: TV,
      label: "TV Cable",
    },
  ],
  [
    {
      icon: Car,
      label: "Vehicle",
    },
    {
      icon: House,
      label: "Rent Bill",
    },
    {
      icon: Invest,
      label: "Invest",
    },
    {
      icon: Grid,
      label: "More",
    },

  ]
];

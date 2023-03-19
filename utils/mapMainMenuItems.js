import { v4 as uuid } from "uuid";
export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.uri || null,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri, // Add default value here
      label: subMenuItem.label,
    })),
  }));
};

// import { v4 as uuid } from "uuid";
// export const mapMainMenuItems = (menuItems) => {
//   return menuItems.map((menuItem) => ({
//     id: uuid(),
//     destination: menuItem.destination?.uri || "", // Add default value here
//     label: menuItem.menuItem.label,
//     subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
//       id: uuid(),
//       destination: subMenuItem.destination?.uri || "", // Add default value here
//       label: subMenuItem.label,
//     })),
//   }));
// };

import { OnThisPageList } from "@/components/OnThisPage";

export const onThisPageDrawer: OnThisPageList = [
  {
    label: "Introdution",
    name: "introdution",
    href: "/docs/drawer#introdution",
  },
  {
    label: "Drawer",
    name: "drawer",
    href: "/docs/drawer#drawer",
  },
  {
    label: "Orientation",
    name: "orientation",
    href: "/docs/drawer#orientation",
  },
  {
    label: "Animation",
    name: "animation",
    href: "/docs/drawer#animation",
  },
  {
    label: "Responsive",
    name: "responsive",
    href: "/docs/drawer#responsive",
  },
  {
    label: "Api",
    name: "api",
    href: "/docs/drawer#api",
  },
  {
    label: "Orientation Type",
    name: "orientationType",
    href: "/docs/drawer#orientationType",
  },
  {
    label: "Overlay Props Type",
    name: "overlayPropsType",
    href: "/docs/drawer#overlayPropsType",
  },
];

export const apiBodyDrawer = [
  {
    id: "1",
    name: "children",
    type: "node",
    default: "",
    description: "Typography content",
  },
  {
    id: "2",
    name: "className",
    type: "string",
    default: "",
    description: "Custom styles",
  },
  {
    id: "3",
    name: "maxHeight",
    type: "string",
    default: "200px || 100%",
    description: "Custom styles",
  },
  {
    id: "4",
    name: "maxWidth",
    type: "string",
    default: "400px || 100%",
    description: "Custom styles",
  },

  {
    id: "5",
    name: "isOpen",
    type: "boolean",
    default: "false",
    description: "Set Drawer is opened",
  },
  {
    id: "6",
    name: "onOpenChange",
    type: "function",
    default: "",
    description: "Change Drawer is open",
  },
  {
    id: "7",
    name: "orientation",
    type: "Orientation",
    default: "right",
    description: "Set Drawer orientation",
    href: "/docs/drawer#orientationType",
  },
  {
    id: "8",
    name: "overlay props",
    type: "OverlayProps",
    default: "right",
    description: "Set Drawer orientation",
    href: "/docs/drawer#overlayPropsType",
  },
];

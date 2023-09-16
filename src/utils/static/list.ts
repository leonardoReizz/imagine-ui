import { OnThisPageList } from "@/components/OnThisPage";

export const apiBodyList = [
  {
    id: "1",
    name: "children",
    type: "node",
    default: "",
    description: "List content",
  },
  {
    id: "2",
    name: "className",
    type: "string",
    default: "",
    description: "Custom styles",
  },
  {
    id: "4",
    name: "shadow",
    type: "boolean",
    default: "true",
    description: "Enable/disable shadow",
  },
];

export const apiBodyListItem = [
  {
    id: "1",
    name: "children",
    type: "node",
    default: "",
    description: "List Item content",
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
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Enable/disable list item",
  },
];

export const onThisPageList: OnThisPageList = [
  {
    label: "Introdution",
    name: "introdution",
    href: "/docs/list#introdution",
  },
  {
    label: "List",
    name: "list",
    href: "/docs/list#list",
  },
  {
    label: "With Icon",
    name: "withIcon",
    href: "/docs/list#withIcon",
  },
  {
    label: "Disabled",
    name: "disabled",
    href: "/docs/list#disabled",
  },
  {
    label: "Custom Style",
    name: "customStyle",
    href: "/docs/list#customStyle",
  },
  {
    label: "Api List",
    name: "apiList",
    href: "/docs/list#apiList",
  },
  {
    label: "Api List Item",
    name: "apiListItem",
    href: "/docs/list#apiListItem",
  },
];

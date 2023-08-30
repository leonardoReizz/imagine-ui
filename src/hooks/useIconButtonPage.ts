import { OnThisPageList } from "@/components/OnThisPage";

export function useIconButtonPage() {
  const apiBody = [
    {
      id: "0",
      name: "className",
      type: "string",
      default: "",
      description: "Custom styles",
    },
    {
      id: "1",
      name: "children",
      type: "node",
      default: "",
      description: "Button content",
    },
    {
      id: "2",
      name: "color",
      type: "Color",
      default: "green",
      description: "Change button color",
      href: "/docs/iconButton#colorType",
    },
    {
      id: "3",
      name: "ripple",
      type: "boolean",
      default: "true",
      description: "Enable/disable ripple effect",
    },
    {
      id: "4",
      name: "shadow",
      type: "boolean",
      default: "true",
      description: "Enable/disable shadow",
    },
    {
      id: "5",
      name: "size",
      type: "Size",
      default: "md",
      description: "Change button size",
      href: "/docs/iconButton#sizeType",
    },
    {
      id: "6",
      name: "variant",
      type: "Variant",
      default: "filled",
      description: "Change button variant",
      href: "/docs/iconButton#variantType",
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introdution",
      name: "introdution",
      href: "/docs/iconButton#introdution",
    },
    {
      label: "Button",
      name: "button",
      href: "/docs/iconButton#button",
    },
    {
      label: "Variants",
      name: "variants",
      href: "/docs/iconButton#variants",
    },
    {
      label: "Colors",
      name: "colors",
      href: "/docs/iconButton#colors",
    },
    {
      label: "Ripple",
      name: "ripple",
      href: "/docs/iconButton#ripple",
    },
    {
      label: "Shadow",
      name: "shadow",
      href: "/docs/iconButton#shadow",
    },
    {
      label: "Api",
      name: "api",
      href: "/docs/iconButton#api",
    },
    {
      label: "Size Type",
      name: "sizeType",
      href: "/docs/iconButton#sizeType",
    },
    {
      label: "Color Type",
      name: "colorType",
      href: "/docs/iconButton#colorType",
    },
    {
      label: "Variants Type",
      name: "variantType",
      href: "/docs/iconButton#variantType",
    },
  ];

  return { onThisPageList, apiBody };
}

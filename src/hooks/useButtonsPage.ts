import { OnThisPageList } from "@/components/OnThisPage";

export const onThisPageListButton: OnThisPageList = [
  {
    label: "Introduction",
    name: "introduction",
    href: "/docs/button#introduction",
  },
  {
    label: "Button",
    name: "button",
    href: "/docs/button#button",
  },
  {
    label: "Variants",
    name: "variants",
    href: "/docs/button#variants",
  },
  {
    label: "Colors",
    name: "colors",
    href: "/docs/button#colors",
  },
  {
    label: "Ripple",
    name: "ripple",
    href: "/docs/button#ripple",
  },
  {
    label: "Shadow",
    name: "shadow",
    href: "/docs/button#shadow",
  },
  {
    label: "With Icon",
    name: "withIcon",
    href: "/docs/button#withIcon",
  },
  {
    label: "Api",
    name: "api",
    href: "/docs/button#api",
  },
  {
    label: "Size Type",
    name: "sizeType",
    href: "/docs/button#sizeType",
  },
  {
    label: "Variants Type",
    name: "variantType",
    href: "/docs/button#variantType",
  },
  {
    label: "Color Type",
    name: "colorType",
    href: "/docs/button#colorType",
  },
];

export function useButtonsPage() {
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
      default: "blue",
      description: "Change button color",
      href: "/docs/button#colorType",
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
      href: "/docs/button#sizeType",
    },
    {
      id: "6",
      name: "variant",
      type: "Variant",
      default: "filled",
      description: "Change button variant",
      href: "/docs/button#variantType",
    },
  ];

  return { onThisPageList: onThisPageListButton, apiBody };
}

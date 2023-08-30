import { OnThisPageList } from "@/components/OnThisPage";

export function useTypographyPage() {
  const apiBody = [
    {
      id: "0",
      name: "align",
      type: "Align",
      default: "left",
      description: "Custom styles",
      href: "/docs/typography#alignType",
    },
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
      name: "color",
      type: "Color",
      default: "black",
      description: "Set typography color",
      href: "/docs/typography#colorType",
    },
    {
      id: "4",
      name: "variant",
      type: "Variant",
      default: "paragraph",
      description: "Set typography variant",
      href: "/docs/typography#variantType",
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introdution",
      name: "introdution",
      href: "/docs/typography#introdution",
    },
    {
      label: "Typography",
      name: "typography",
      href: "/docs/typography#typography",
    },
    {
      label: "Variants",
      name: "variants",
      href: "/docs/typography#variants",
    },
    {
      label: "Colors",
      name: "colors",
      href: "/docs/typography#colors",
    },
    {
      label: "Api",
      name: "api",
      href: "/docs/typography#api",
    },
    {
      label: "Color Type",
      name: "colorType",
      href: "/docs/typography#colorType",
    },
    {
      label: "Variants Type",
      name: "variantType",
      href: "/docs/typography#variantType",
    },
    {
      label: "Align Type",
      name: "alignType",
      href: "/docs/typography#alignType",
    },
  ];

  return { onThisPageList, apiBody };
}

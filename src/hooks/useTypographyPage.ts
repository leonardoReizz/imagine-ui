import { OnThisPageList } from "@/components/OnThisPage";
import { useRef } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { smoothScrollTo } from "@/utils/smoothScroolTo";
import { useScroll } from "./useScroll";

export function useTypographyPage() {
  const refs: RefsType = {
    introdution: useRef<HTMLDivElement>(null),
    typography: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    variantType: useRef<HTMLDivElement>(null),
    alignType: useRef<HTMLDivElement>(null),
  };

  const { currentSection } = useScroll({ refs });

  const apiBody = [
    {
      id: "0",
      name: "align",
      type: "Align",
      default: "left",
      description: "Custom styles",
      onClickType: () =>
        scrollTo({ ref: refs.alignType, callback: smoothScrollTo }),
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
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
    },
    {
      id: "4",
      name: "variant",
      type: "Variant",
      default: "paragraph",
      description: "Set typography variant",
      onClickType: () =>
        scrollTo({ ref: refs.variantType, callback: smoothScrollTo }),
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introdution",
      name: "introdution",
      ref: refs.introdution,
    },
    {
      label: "Typography",
      name: "typography",
      ref: refs.typography,
    },
    {
      label: "Variants",
      name: "variants",
      ref: refs.variants,
    },
    {
      label: "Colors",
      name: "colors",
      ref: refs.colors,
    },
    {
      label: "Api",
      name: "api",
      ref: refs.api,
    },
    {
      label: "Color Type",
      name: "colorType",
      ref: refs.colorType,
    },
    {
      label: "Variants Type",
      name: "variantType",
      ref: refs.variantType,
    },
    {
      label: "Align Type",
      name: "alignType",
      ref: refs.alignType,
    },
  ];

  return { onThisPageList, currentSection, apiBody, refs };
}

import { OnThisPageList } from "@/components/OnThisPage";
import { useRef } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { smoothScrollTo } from "@/utils/smoothScroolTo";
import { useScroll } from "./useScroll";

export function useIconButtonPage() {
  const refs: RefsType = {
    introdution: useRef<HTMLDivElement>(null),
    button: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    ripple: useRef<HTMLDivElement>(null),
    shadow: useRef<HTMLDivElement>(null),
    disabled: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    sizeType: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    variantType: useRef<HTMLDivElement>(null),
  };

  const { currentSection } = useScroll({ refs });

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
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
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
      onClickType: () =>
        scrollTo({ ref: refs.sizeType, callback: smoothScrollTo }),
    },
    {
      id: "6",
      name: "variant",
      type: "Variant",
      default: "filled",
      description: "Change button variant",
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
      label: "Button",
      name: "button",
      ref: refs.button,
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
      label: "Ripple",
      name: "ripple",
      ref: refs.ripple,
    },
    {
      label: "Shadow",
      name: "shadow",
      ref: refs.shadow,
    },
    {
      label: "Api",
      name: "api",
      ref: refs.api,
    },
    {
      label: "Size Type",
      name: "sizeType",
      ref: refs.sizeType,
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
  ];

  return { onThisPageList, currentSection, apiBody, refs };
}

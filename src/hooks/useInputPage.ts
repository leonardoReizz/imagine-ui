import { OnThisPageList } from "@/components/OnThisPage";
import { useRef } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { smoothScrollTo } from "@/utils/smoothScroolTo";
import { useScroll } from "./useScroll";

export function useInputPage() {
  const refs: RefsType = {
    introduction: useRef<HTMLDivElement>(null),
    input: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    sizes: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    withIcon: useRef<HTMLDivElement>(null),
    disabled: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    variantType: useRef<HTMLDivElement>(null),
    containerPropsType: useRef<HTMLDivElement>(null),
    iconPropsType: useRef<HTMLDivElement>(null),
    labelPropsType: useRef<HTMLDivElement>(null),
  };

  const { currentSection } = useScroll({ refs });

  const apiBody = [
    {
      id: "0",
      name: "className",
      type: "string",
      default: "",
      description: "Input custom styles",
    },
    {
      id: "1",
      name: "color",
      type: "Color",
      default: "green",
      description: "Set input color",
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
    },
    {
      id: "2",
      name: "error",
      type: "boolean",
      default: "false",
      description: "Set error input",
    },
    {
      id: "3",
      name: "variant",
      type: "Variant",
      default: "outlined",
      description: "Set input variant",
      onClickType: () =>
        scrollTo({ ref: refs.variantType, callback: smoothScrollTo }),
    },
    {
      id: "4",
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Turn on/off disabled",
    },
    {
      id: "5",
      name: "label",
      type: "string",
      default: "",
      description: "Set input label",
    },
    {
      id: "6",
      name: "icon",
      type: "node",
      default: "",
      description: "Set input icon",
    },
    {
      id: "7",
      name: "containerProps",
      type: "ContainerProps",
      default: "",
      description: "Set container props",
      onClickType: () =>
        scrollTo({ ref: refs.containerPropsType, callback: smoothScrollTo }),
    },
    {
      id: "8",
      name: "labelProps",
      type: "LabelProps",
      default: "",
      description: "Set label props",
      onClickType: () =>
        scrollTo({ ref: refs.labelPropsType, callback: smoothScrollTo }),
    },
    {
      id: "9",
      name: "iconProps",
      type: "IconProps",
      default: "",
      description: "Set icon props",
      onClickType: () =>
        scrollTo({ ref: refs.iconPropsType, callback: smoothScrollTo }),
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introduction",
      name: "introduction",
      ref: refs.introduction,
    },
    {
      label: "Input",
      name: "input",
      ref: refs.input,
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
      label: "Sizes",
      name: "sizes",
      ref: refs.sizes,
    },
    {
      label: "With Icons",
      name: "withIcon",
      ref: refs.withIcon,
    },
    {
      label: "Disabled",
      name: "disabled",
      ref: refs.disabled,
    },
    {
      label: "Api",
      name: "api",
      ref: refs.api,
    },
    {
      label: "Variants Type",
      name: "variantType",
      ref: refs.variantType,
    },
    {
      label: "Color Type",
      name: "colorType",
      ref: refs.colorType,
    },
    {
      label: "Container Props Type",
      name: "containerPropsType",
      ref: refs.containerPropsType,
    },
    {
      label: "Icon Props Type",
      name: "iconPropsType",
      ref: refs.iconPropsType,
    },
    {
      label: "Label Props Type",
      name: "labelPropsType",
      ref: refs.labelPropsType,
    },
  ];

  return { onThisPageList, currentSection, apiBody, refs };
}

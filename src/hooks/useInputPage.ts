import { OnThisPageList } from "@/components/OnThisPage";
import { useEffect, useRef, useState } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { useDebounce } from "@/utils/useDebounce";
import { smoothScrollTo } from "@/utils/smoothScroolTo";

export function useInputPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
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

  const middleY = window.innerHeight / 3;

  const handleScroll = useDebounce(() => {
    const yOffset = window.scrollY + middleY;

    for (const section in refs) {
      const ref = refs[section];
      if (
        ref.current &&
        yOffset >= ref.current.offsetTop &&
        yOffset < ref.current.offsetTop + ref.current.offsetHeight
      ) {
        setCurrentSection(section);
        return;
      }
    }
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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

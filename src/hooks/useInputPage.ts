import { OnThisPageList } from "@/components/OnThisPage";
import { useEffect, useRef, useState } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { useDebounce } from "@/utils/useDebounce";
import { smoothScrollTo } from "@/utils/smoothScroolTo";

export function useInputPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const refs: RefsType = {
    startPage: useRef<HTMLDivElement>(null),
    input: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    ripple: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    withIcon: useRef<HTMLDivElement>(null),
    shadow: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    variantType: useRef<HTMLDivElement>(null),
    disable: useRef<HTMLDivElement>(null),
  };

  const middleY = (window && window?.innerHeight) || 0 / 3;

  const handleScroll = useDebounce(() => {
    const yOffset = window?.scrollY + middleY;

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
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const apiBody = [
    {
      id: "1",
      name: "color",
      type: "Color",
      default: "blue",
      description: "Set button color",
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
    },
    {
      id: "2",
      name: "variant",
      type: "Variant",
      default: "filled",
      description: "Set button variant",
      onClickType: () =>
        scrollTo({ ref: refs.variantType, callback: smoothScrollTo }),
    },
    {
      id: "3",
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Turn on/off disabled",
    },
    {
      id: "4",
      name: "label",
      type: "string",
      default: "",
      description: "Set input label",
    },
  ];

  const onThisPageList: OnThisPageList = [
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
      label: "With Icons",
      name: "withIcon",
      ref: refs.withIcon,
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
  ];

  return { onThisPageList, currentSection, apiBody, refs };
}

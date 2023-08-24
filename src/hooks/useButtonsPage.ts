import { OnThisPageList } from "@/components/OnThisPage";
import { useEffect, useRef, useState } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { useDebounce } from "@/utils/useDebounce";
import { smoothScrollTo } from "@/utils/smoothScroolTo";

export function useButtonsPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const refs: RefsType = {
    button: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    ripple: useRef<HTMLDivElement>(null),
    variants: useRef<HTMLDivElement>(null),
    withIcon: useRef<HTMLDivElement>(null),
    shadow: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    sizeType: useRef<HTMLDivElement>(null),
    variantType: useRef<HTMLDivElement>(null),
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

  const apiBody = [
    {
      id: "1",
      name: "color",
      type: "Color",
      default: "blue",
      description: "Change button color",
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
    },
    {
      id: "2",
      name: "variant",
      type: "Variant",
      default: "filled",
      description: "Change button variant",
      onClickType: () =>
        scrollTo({ ref: refs.variantType, callback: smoothScrollTo }),
    },
    {
      id: "3",
      name: "shadow",
      type: "boolean",
      default: "true",
      description: "Turn on/off shadow effect",
    },
    {
      id: "4",
      name: "size",
      type: "Size",
      default: "md",
      description: "Change button size",
    },
    {
      id: "5",
      name: "ripple",
      type: "boolean",
      default: "true",
      description: "Turn on/off ripple effect",
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
      label: "Size Type",
      name: "sizeType",
      ref: refs.sizeType,
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
  ];

  return { onThisPageList, currentSection, apiBody, refs };
}

import { OnThisPageList } from "@/components/OnThisPage";
import { useCallback, useEffect, useRef, useState } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { useDebounce } from "@/utils/useDebounce";
import { smoothScrollTo } from "@/utils/smoothScroolTo";

export function useCheckboxPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [checked, setChecked] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const refs: RefsType = {
    introduction: useRef<HTMLDivElement>(null),
    startPage: useRef<HTMLDivElement>(null),
    checkbox: useRef<HTMLDivElement>(null),
    colors: useRef<HTMLDivElement>(null),
    ripple: useRef<HTMLDivElement>(null),
    customIcon: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    colorType: useRef<HTMLDivElement>(null),
    sizeType: useRef<HTMLDivElement>(null),
    containerPropsType: useRef<HTMLDivElement>(null),
    inputPropsType: useRef<HTMLDivElement>(null),
    spanPropsType: useRef<HTMLDivElement>(null),
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

  const handleCheckbox = useCallback((index: number) => {
    setChecked((t) => {
      let a = [...t];
      a[index] = a[index] !== true;
      return a;
    });
  }, []);

  const apiBody = [
    {
      id: "1",
      name: "color",
      type: "Color",
      default: "green",
      description: "Change checkbox color",
      onClickType: () =>
        scrollTo({ ref: refs.colorType, callback: smoothScrollTo }),
    },
    {
      id: "2",
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Turn on/off disabled",
    },
    {
      id: "3",
      name: "icon",
      type: "node",
      default: "<svg/>",
      description: "Change checkbox icon",
    },
    {
      id: "4",
      name: "ref",
      type: "LegacyRef",
      default: "",
      description: "Ref to 'input'",
    },
    {
      id: "5",
      name: "ripple",
      type: "boolean",
      default: "true",
      description: "Enable/Disable ripple effect",
    },
    {
      id: "6",
      name: "size",
      type: "Size",
      default: "md",
      description: "Change checkbox size",
      onClickType: () =>
        scrollTo({ ref: refs.sizeType, callback: smoothScrollTo }),
    },
    {
      id: "7",
      name: "containerProps",
      type: "ContainerProps",
      default: "",
      description: "Change container props",
      onClickType: () =>
        scrollTo({ ref: refs.containerPropsType, callback: smoothScrollTo }),
    },
    {
      id: "8",
      name: "inputProps",
      type: "InputProps",
      default: "",
      description: "Change input props",
      onClickType: () =>
        scrollTo({ ref: refs.inputPropsType, callback: smoothScrollTo }),
    },
    {
      id: "9",
      name: "spanProps",
      type: "SpanProps",
      default: "",
      description: "Change span props",
      onClickType: () =>
        scrollTo({ ref: refs.spanPropsType, callback: smoothScrollTo }),
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introduction",
      name: "introduction",
      ref: refs.introduction,
    },
    {
      label: "Checkbox",
      name: "checkbox",
      ref: refs.checkbox,
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
      label: "Custom Icon",
      name: "customIcon",
      ref: refs.customIcon,
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
      label: "Container Props Type",
      name: "containerPropsType",
      ref: refs.containerPropsType,
    },
    {
      label: "InputProps Type",
      name: "inputPropsType",
      ref: refs.inputPropsType,
    },
    {
      label: "Span Props Type",
      name: "spanPropsType",
      ref: refs.spanPropsType,
    },
  ];

  return {
    onThisPageList,
    currentSection,
    apiBody,
    refs,
    handleCheckbox,
    checked,
  };
}

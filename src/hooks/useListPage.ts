import { OnThisPageList } from "@/components/OnThisPage";
import { useEffect, useRef, useState } from "react";
import { scrollTo } from "@/utils/scroolTo";
import { useDebounce } from "@/utils/useDebounce";
import { smoothScrollTo } from "@/utils/smoothScroolTo";

export function useListPage() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const refs: RefsType = {
    introdution: useRef<HTMLDivElement>(null),
    list: useRef<HTMLDivElement>(null),
    withIcon: useRef<HTMLDivElement>(null),
    disabled: useRef<HTMLDivElement>(null),
    customStyle: useRef<HTMLDivElement>(null),
    apiList: useRef<HTMLDivElement>(null),
    apiListItem: useRef<HTMLDivElement>(null),
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

  const apiListBody = [
    {
      id: "1",
      name: "children",
      type: "node",
      default: "",
      description: "Button content",
    },
    {
      id: "2",
      name: "className",
      type: "string",
      default: "",
      description: "Custom styles",
    },
    {
      id: "4",
      name: "shadow",
      type: "boolean",
      default: "false",
      description: "Enable/disable shadow",
    },
  ];

  const apiListItemBody = [
    {
      id: "1",
      name: "children",
      type: "node",
      default: "",
      description: "Button content",
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
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Enable/disable list item",
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introdution",
      name: "introdution",
      ref: refs.introdution,
    },
    {
      label: "List",
      name: "list",
      ref: refs.list,
    },
    {
      label: "With Icon",
      name: "withIcon",
      ref: refs.withIcon,
    },
    {
      label: "Disabled",
      name: "disabled",
      ref: refs.disabled,
    },
    {
      label: "Custom Style",
      name: "customStyle",
      ref: refs.customStyle,
    },
    {
      label: "Api List",
      name: "apiList",
      ref: refs.apiList,
    },
    {
      label: "Api List Item",
      name: "apiListItem",
      ref: refs.apiListItem,
    },
  ];

  return { onThisPageList, currentSection, apiListItemBody, apiListBody, refs };
}

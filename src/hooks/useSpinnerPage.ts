import { OnThisPageList } from "@/components/OnThisPage";

export function useSpinnerPage() {
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
      name: "color",
      type: "Color",
      default: "black",
      description: "Set spinner color",
      href: "/docs/spinner#colorType",
    },
    {
      id: "2",
      name: "variant",
      type: "Variant",
      default: "paragraph",
      description: "Set spinner variant",
      href: "/docs/spinner#variantType",
    },
    {
      id: "3",
      name: "size",
      type: "Size",
      default: "sm",
      description: "Set spinner size",
      href: "/docs/spinner#sizeType",
    },
  ];

  const onThisPageList: OnThisPageList = [
    {
      label: "Introdution",
      name: "introdution",
      href: "/docs/spinner#introdution",
    },
    {
      label: "Spinner",
      name: "spinner",
      href: "/docs/spinner#spinner",
    },
    {
      label: "Variants",
      name: "variants",
      href: "/docs/spinner#variants",
    },
    {
      label: "Sizes",
      name: "sizes",
      href: "/docs/spinner#sizes",
    },
    {
      label: "Colors",
      name: "colors",
      href: "/docs/spinner#colors",
    },
    {
      label: "Api",
      name: "api",
      href: "/docs/spinner#api",
    },
    {
      label: "Color Type",
      name: "colorType",
      href: "/docs/spinner#colorType",
    },
    {
      label: "Size Type",
      name: "sizeType",
      href: "/docs/spinner#sizeType",
    },
    {
      label: "Variants Type",
      name: "variantType",
      href: "/docs/spinner#variantType",
    },
  ];

  return { onThisPageList, apiBody };
}

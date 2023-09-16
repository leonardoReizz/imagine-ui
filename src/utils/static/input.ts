import { OnThisPageList } from "@/components/OnThisPage";

export const onThisPageInput: OnThisPageList = [
  {
    label: "Introduction",
    name: "introduction",
    href: "/docs/input#introduction",
  },
  {
    label: "Input",
    name: "input",
    href: "/docs/input#input",
  },
  {
    label: "Variants",
    name: "variants",
    href: "/docs/input#variants",
  },
  {
    label: "Sizes",
    name: "sizes",
    href: "/docs/input#sizes",
  },
  {
    label: "With Icons",
    name: "withIcon",
    href: "/docs/input#withIcon",
  },
  {
    label: "Disabled",
    name: "disabled",
    href: "/docs/input#disabled",
  },
  {
    label: "Api",
    name: "api",
    href: "/docs/input#api",
  },
  {
    label: "Variants Type",
    name: "variantType",
    href: "/docs/input#variantType",
  },
  {
    label: "Color Type",
    name: "colorType",
    href: "/docs/input#colorType",
  },
  {
    label: "Container Props Type",
    name: "containerPropsType",
    href: "/docs/input#containerPropsType",
  },
  {
    label: "Icon Props Type",
    name: "iconPropsType",
    href: "/docs/input#iconPropsType",
  },
  {
    label: "Label Props Type",
    name: "labelPropsType",
    href: "/docs/input#labelPropsType",
  },
];

export const apiBodyInput = [
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
    href: "/docs/input#colorType",
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
    href: "/docs/input#variantType",
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
    href: "/docs/input#containerPropsType",
  },
  {
    id: "8",
    name: "labelProps",
    type: "LabelProps",
    default: "",
    description: "Set label props",
    href: "/docs/input#labelPropsType",
  },
  {
    id: "9",
    name: "iconProps",
    type: "IconProps",
    default: "",
    description: "Set icon props",
    href: "/docs/input#iconPropsType",
  },
];

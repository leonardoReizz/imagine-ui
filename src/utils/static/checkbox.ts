import { OnThisPageList } from "@/components/OnThisPage";

export const apiBodyCheckbox = [
  {
    id: "1",
    name: "color",
    type: "Color",
    default: "green",
    description: "Change checkbox color",
    href: "/docs/checkbox#colorType",
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
    href: "/docs/checkbox#sizeType",
  },
  {
    id: "7",
    name: "containerProps",
    type: "ContainerProps",
    default: "",
    description: "Change container props",
    href: "/docs/checkbox#containerPropsType",
  },
  {
    id: "8",
    name: "inputProps",
    type: "InputProps",
    default: "",
    description: "Change input props",
    href: "/docs/checkbox#inputPropsType",
  },
  {
    id: "9",
    name: "spanProps",
    type: "SpanProps",
    default: "",
    description: "Change span props",
    href: "/docs/checkbox#spanPropsType",
  },
];

export const onThisPageCheckbox: OnThisPageList = [
  {
    label: "Introduction",
    name: "introduction",
    href: "/docs/checkbox#introduction",
  },
  {
    label: "Checkbox",
    name: "checkbox",
    href: "/docs/checkbox#checkbox",
  },
  {
    label: "Colors",
    name: "colors",
    href: "/docs/checkbox#colors",
  },
  {
    label: "Ripple",
    name: "ripple",
    href: "/docs/checkbox#ripple",
  },
  {
    label: "Custom Icon",
    name: "customIcon",
    href: "/docs/checkbox#customIcon",
  },
  {
    label: "Api",
    name: "api",
    href: "/docs/checkbox#api",
  },
  {
    label: "Size Type",
    name: "sizeType",
    href: "/docs/checkbox#sizeType",
  },
  {
    label: "Color Type",
    name: "colorType",
    href: "/docs/checkbox#colorType",
  },
  {
    label: "Container Props Type",
    name: "containerPropsType",
    href: "/docs/checkbox#containerPropsType",
  },
  {
    label: "Input Props Type",
    name: "inputPropsType",
    href: "/docs/checkbox#inputPropsType",
  },
  {
    label: "Span Props Type",
    name: "spanPropsType",
    href: "/docs/checkbox#spanPropsType",
  },
];

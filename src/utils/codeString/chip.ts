export const chipCodeString = `import { Chip } from "@imagine-ui/react";
 
export function ChipExample() {
  return (
    <Chip>Label</Chip>
  );
}`;

export const chipSizeCodeString = `function ChipVariant() {
  return (
    <Chip size="sm">Chip SM</Chip>
    <Chip size="md">Chip MD</Chip>
    <Chip size="lg">Chip LG</Chip>
  )
}`;

export const chipVariantCodeString = `function ChipVariant() {
  return (
    <Chip variant="solid">Label</Chip>
    <Chip variant="outlined">Label</Chip>
    <Chip variant="ghost">Label</Chip>
  )
}`;

export const chipColorCodeString = `function ChipColor() {
  return (
    <Chip color="green">Green</Chip>
    <Chip color="red">Red</Chip>
    <Chip color="blue">Blue</Chip>
    <Chip color="orange">Orange</Chip>
    <Chip color="purple">Purple</Chip>
  )
}`;

export const chipImportCodeString = `import { Chip } from "@imagine-ui/react"`;

export const chipSizeTypeCodeString = `type ChipSize = "sm" | "md" | "lg";`;

export const chipColorTypeCodeString = `type ChipColor =
| "blue"
| "red"
| "green"
| "purple"
| "orange"
| "amber"
| "pink"`;

export const chipVariantTypeCodeString = `type ChipVariant = "solid" | "ghost" | "outlined";`;

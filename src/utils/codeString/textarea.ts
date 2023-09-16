export const textareaCodeString = `import { Textarea } from "@imagine-ui/react";
 
export function TextareaExample() {
  return (
    <Textarea label="Textarea" />
  );
}`;

export const textareaVariantCodeString = `function TypographyVariant() {
  return (
    <Textarea label="Textarea" variant="outlined" />
    <Textarea label="Textarea" variant="standart" />
    <Textarea label="Textarea" variant="static" />
  )
}`;

export const textareaImportCodeString = `import { Textarea } from "@imagine-ui/react"`;

export const textareaColorTypeCodeString = `type TextareaColor =
| "blue"
| "red"
| "green"
| "purple"
| "orange"
| "amber"
| "pink";`;

export const textareaVariantTypeCodeString = `type TextareaVariant = "outlined" | "static" | "standart";`;

export const textareaIconPropsTypeCodeString = `type type TextareaIconProps = {
  className: string;
};`;

export const textareaLabelPropsTypeCodeString = `type type TextareaLabelProps = {
  className: string;
};`;

export const textareaContainerPropsTypeCodeString = `TextareaContainerProps = {
  className: string;
};`;

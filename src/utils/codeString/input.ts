export const inputCodeString = `import { Input } from "@imagine-ui/react"

export function InputExample() {
  return (
    <Input label="Username" size="md" color="green" />
  )
}`;

export const inputVariantCodeString = `function InputVariant() {
  return (
    <Input label="Teste" variant="outlined" />
    <Input label="Teste" variant="standart" />
    <Input label="Teste" variant="static" />
  )
}`;

export const inputWithIconCodeString = `function InputWithIcon() {
  return (
    <Input
      label="With Icon"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      }
    />
  )
}`;

export const inputColorsCodeString = `function InputColor() {
  return (
    <Input label="Blue" color="blue"  />
    <Input label="Green" color="green"  />
    <Input label="Red" color="red"  />
    <Input label="Purple" color="purple"  />
  )
}`;

export const inputSizesCodeString = `function InputSize() {
  return (
    <Input label="SM" size="sm" />
    <Input label="MD" size="md" />
    <Input label="LG" size="lg" />
  )
}`;

export const inputDisableCodeString = `function InputDisabled() {
  return(
    <Input label="Disabled" disabled />
  )
}`;

export const inputImportCodeString = `import { Input } from "@imagine-ui/react"`;

export const inputColorTypeCodeString = `type InputColor =
| "blue"
| "red"
| "green"
| "purple"
| "orange"
| "amber"
| "pink";`;

export const inputSizeTypeCodeString = `type  InputSize = "sm" | "md" | "lg";`;

export const inputVariantTypeCodeString = `type InputVariant = "outlined" | "static" | "standart"`;

export const inputIconPropsTypeCodeString = `type IconProps = {
  className?: string;
};`;

export const inputContainerPropsTypeCodeString = `type ContainerProps = {
  className?: string;
};`;

export const inputlabelPropsTypeCodeString = `type LabelProps = {
  className?: string;
};`;

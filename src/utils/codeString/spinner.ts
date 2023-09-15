export const spinnerCodeString = `import { Typography } from "@imagine-ui/react";
 
export function SpinnerExample() {
  return (
    <Spinner variant="spinner" size="md" />
  );
}`;

export const spinnerVariantCodeString = `function SpinnerVariant() {
  return (
    <Spinner variant="spinner" size="md" />
    <Spinner variant="roller" size="md" />
  )
}`;

export const spinnerSizeCodeString = `function SpinnerSize() {
  return (
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  )
}`;

export const spinnerColorCodeString = `function SpinnerColor() {
  return (
    <Spinner variant="roller" color="red" />
    <Spinner variant="roller" color="orange" />
    <Spinner variant="roller" color="purple" />
    <Spinner variant="roller" color="amber" />
  )
}`;

export const spinnerImportCodeString = `import { Spinner } from "@imagine-ui/react"`;

export const spinnerColorTypeCodeString = `type SpinnerColor =
| "red"
| "green"
| "blue"
| "amber"
| "purple"
| "orange";`;

export const spinnerVariantTypeCodeString = `type SpinnerVariant = "spinner" | "roller";`;
export const spinnerSizeTypeCodeString = `type SpinnerSize = "sm" | "md" | "lg";`;

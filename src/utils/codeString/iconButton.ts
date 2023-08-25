export const iconButtonCodeString = `import { IconButton } from "@material-tailwind/react";
 
export function IconButtonExample() {
  return (
    <IconButton>
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  );
}`;

export const iconButtonVariantCodeString = `function IconButtonVariant() {
  return (
    <IconButton variant="solid">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="outlined">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="ghost">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="transparent">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="text">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  )
}`;

export const iconButtonRippleEffectCodeString = `function IconButtonRipple() {
  return (
    <IconButton color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton color="red" ripple={false}>
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  )
}`;

export const iconButtonShadowCodeString = `function IconButtonShadow() {
  return (
    <IconButton color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton color="red" shadow={false}>
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  )
}`;

export const iconButtonColorCodeString = `function IconButtonColor() {
  return (
    <IconButton color="blue">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton color="red">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton color="purple">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  )
}`;

export const iconButtonImportCodeString = `import { IconButton } from "@imagine-io/react"`;

export const iconButtonSizeTypeCodeString = `type IconButtonSize = "sm" | "md" | "lg";`;

export const iconButtonColorTypeCodeString = `type IconButtonColor =
| "blue"
| "red"
| "green"
| "purple"
| "orange"
| "amber"
| "gray"
| "black"
| "white"
| "pink";`;

export const iconButtonVariantTypeCodeString = `type IconButtonVariant =
| "outlined"
| "solid"
| "ghost"
| "text"
| "transparent";`;

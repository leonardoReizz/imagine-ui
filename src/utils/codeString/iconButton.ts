export const iconButtonCodeString = `import { IconButton } from "@material-tailwind/react";
 
export function IconButtonComponent() {
  return (
    <IconButton>
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
  );
}`;

export const iconButtonVariantCodeString = `function IconButtonSize() {
  return (
    <IconButton variant="solid" color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="outlined" color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="transparent" color="green">
      <CodeBracketIcon className="h-4 w-4" />
    </IconButton>
    <IconButton variant="text" color="green">
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

export const iconButtonShadowCodeString = `function Buttons() {
  return (
    <IconButton color="green" variant="solid">
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

export const iconButtonColorTypeCodeString = `type IconButtonColor =
| "red"
| "green"
| "blue"
| "amber"
| "purple"
| "orange"
| "pink";`;

export const iconButtonVariantTypeCodeString = `type IconButtonVariant =
| "outlined"
| "solid"
| "text"
| "ghost"
| "transparent";`;

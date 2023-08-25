export const buttonCodeString = `import { Button } from "@imagine-io/react"

export function ButtonExample() {
  return (
    <Button>Example</Button>
  );
}`;

export const buttonVariantCodeString = `function ButtonVariant() {
  return (
    <Button variant="solid" color="green">
      Solid
    </Button>
    <Button variant="outlined" color="green">
      Outlined
    </Button>
    <Button variant="ghost" color="green">
      Ghost
    </Button>
    <Button variant="transparent" color="green">
      Transparent
    </Button>
    <Button variant="text" color="green">
      Text
    </Button>
  );
}`;

export const buttonRippleEffectCodeString = `function ButtonRipple() {
  return (
    <Button>Ripple ON</Button>
    <Button ripple={false}>Ripple OFF</Button>
  );
}`;

export const buttonShadowCodeString = `function ButtonShadow() {
  return (
    <Button>Shadow ON</Button>
    <Button shadow={false}>Shadow OFF</Button>
  );
}`;

export const buttonColorsCodeString = `function ButtonColor() {
  return (
    <Button color="blue">Blue</Button>
    <Button color="green">Green</Button>
    <Button color="red">Red</Button>
    <Button color="purple">Purple</Button>
  )
}`;

export const buttonWithIconCodeString = `function ButtonWithIcon() {
  return (
    <Button color="blue">
      <UserIcon className="w-4 h-4" />
      User
    </Button>
    <Button color="green">
      Settings
      <Cog6ToothIcon className="w-4 h-4" />
    </Button>
    <Button color="red">
      Notification
      <BellAlertIcon className="w-4 h-4" />
    </Button>
  )
}`;

export const buttonImportCodeString = `import { Button } from "@imagine-io/react"`;

export const buttonColorTypeCodeString = `type ButtonColor =
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

export const buttonVariantTypeCodeString = `type ButtonVariant =
| "outlined"
| "solid"
| "ghost"
| "text"
| "transparent";`;

export const buttonSizeTypeCodeString = `type ButtonSize = "sm" | "md" | "lg";`;

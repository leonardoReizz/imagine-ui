export const buttonCodeString = `import { Button } from "@imagine-ui/react"

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
    <Button ripple={true}>Ripple ON</Button>
    <Button ripple={false}>Ripple OFF</Button>
  );
}`;

export const buttonShadowCodeString = `function ButtonShadow() {
  return (
    <Button shadow={true} >Shadow ON</Button>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
      User
    </Button>
    <Button color="green">
      Settings
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
         <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
    </Button>
    <Button color="red">
      Notification
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
      </svg>
    </Button>
  )
}`;

export const buttonImportCodeString = `import { Button } from "@imagine-ui/react"`;

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

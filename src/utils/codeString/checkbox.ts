export const checkboxCodeString = `import { Checkbox } from "@imagine-io/react"

export function CheckboxExample() {
  return (
    <Checkbox checked={true} />
  );
}`;

export const checkboxRippleEffectCodeString = `function CheckboxRipple() {
  return (
    <Checkbox color="pink" />
    <Checkbox color="pink" ripple={false} />
  );
}`;

export const checkboxColorsCodeString = `function CheckboxColor() {
  return (
    <Checkbox color="green" />
    <Checkbox color="red" />
    <Checkbox color="blue" />
    <Checkbox color="orange" />
    <Checkbox color="pink" />
    <Checkbox color="purple" />
  )
}`;

export const checkboxCustomIconCodeString = `function CheckboxCustomIcon() {
  return (
    <Checkbox
      color="pink"
      size="lg"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      }
    />
    <Checkbox
      size="lg"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
        </svg>
      }
    />
  )
}`;

export const checkboxImportCodeString = `import { Checkbox } from "@imagine-io/react"`;

export const checkboxColorTypeCodeString = `type CheckboxColor =  
| "blue"
| "red"
| "green"
| "purple"
| "orange"
| "amber"
| "pink"`;

export const checkboxSizeTypeCodeString = `type CheckboxSize = "sm" | "md" | "lg";`;

export const checkboxContainerPropsTypeCodeString = `type CheckBoxContainerProps = {
  className?: string;
};`;

export const checkboxInputPropsTypeCodeString = `type CheckBoxInputProps = {
  className?: string;
};`;

export const checkboxSpanPropsTypeCodeString = `type CheckBoxSpanProps = {
  className?: string;
};`;

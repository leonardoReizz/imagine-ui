export const typographyCodeString = `import { Typography } from "@imagine-ui/react";
 
export function TypographyExample() {
  return (
    <Typography>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Laboriosam ducimus amet aliquid distinctio dolores nobis!
      Eaque delectus dolorem, totam atque blanditiis vel, libero ea
      quaerat laudantium, cupiditate aliquam unde earum?
    </Typography>
  );
}`;

export const typographyVariantCodeString = `function TypographyVariant() {
  return (
    <Typography variant="h1">Variant h1</Typography>
    <Typography variant="h2">Variant h2</Typography>
    <Typography variant="h3">Variant h3</Typography>
    <Typography variant="h4">Variant h4</Typography>
    <Typography variant="h5">Variant h5</Typography>
    <Typography variant="h6">Variant h6</Typography>
    <Typography variant="paragraph">Variant paragraph</Typography>
    <Typography variant="sub-paragraph">
      Variant sub-paragraph
    </Typography>
    <Typography variant="small">Variant small</Typography>
    <Typography variant="caption">Variant caption</Typography>
  )
}`;

export const typographyColorCodeString = `function TypographyColor() {
  return (
    <Typography variant="paragraph" color="red">
      Red
    </Typography>
    <Typography variant="paragraph" color="green">
      Green
    </Typography>
    <Typography variant="paragraph" color="blue">
      Blue
    </Typography>
    <Typography variant="paragraph" color="orange">
      Orange
    </Typography>
  )
}`;

export const typographyImportCodeString = `import { Typography } from "@imagine-io/react"`;

export const typographyAlignTypeCodeString = `type TypographyAlign =
"center" 
| "justify" 
| "left" 
| "right";`;

export const typographyColorTypeCodeString = `type TypographyColor =
"black" 
| "white" 
| "inherit" 
| "blue" 
| "green" 
| "red" 
| "purple" 
| "orange" 
| "amber" 
| "gray";`;

export const typographyVariantTypeCodeString = `type TypographyVariant =
"h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "paragraph"
| "sub-paragraph"
| "small"
| "caption";`;

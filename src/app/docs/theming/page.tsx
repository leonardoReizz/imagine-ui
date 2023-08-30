"use client";
import Component from "@/components/ComponentPreview";
import { ScrollSection } from "@/components/ScroolSection";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { themeProviderCodeString } from "@/utils/codeString/theming";
import { Typography } from "@imagine-ui/react";

export default function Theming() {
  return (
    <>
      <ScrollSection className="mt-14">
        <Typography variant="h6">Theming</Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          Elevate your user interface with the power of customization using the
          @imagine-ui component library. With support for both light and dark
          themes, our components seamlessly adapt to your preferred aesthetic,
          offering a cohesive and immersive experience for your users.
        </Typography>
      </ScrollSection>
      <ScrollSection className="mt-14">
        <Component.Container
          title="Theme Provider"
          description="For those seeking ultimate personalization, Imagine UI offers the ThemeProvider component. This invaluable asset lets you inject your customized theme directly into your application. It seamlessly integrates with React's context feature, ensuring that the theme is propagated to all pertinent components. As you embark on your theming journey, remember that Imagine UI also provides a default theme, allowing you to dive into customization when you're ready."
        >
          <SyntaxHighlighter codeString={themeProviderCodeString} />
        </Component.Container>
      </ScrollSection>
    </>
  );
}

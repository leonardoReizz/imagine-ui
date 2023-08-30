"use client";
import Component from "@/components/ComponentPreview";
import { ScrollSection } from "@/components/ScroolSection";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { buttonCodeString } from "@/utils/codeString/button";
import {
  viteInstallNpmCodeString,
  viteInstallPnpmCodeString,
  viteInstallYarnCodeString,
  viteTailwindConfigCodeString,
  viteThemeProviderCodeString,
} from "@/utils/codeString/viteInstallation";
import { Button, Typography } from "@imagine-ui/react";

export default function InstallationCRA() {
  return (
    <>
      <ScrollSection className="mt-10">
        <Typography variant="h6">Imagine UI with Create React App</Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          Learn how to setup and install @imagine-ui/react with Next.js. First
          you need to create a new project using next.js, for more details check
          the Next.JS Official Documentation npx create-next-app@latest Then you
          need to install Tailwind CSS since @imagine-ui/react is working with
          Tailwind CSS classes and you need to have Tailwind CSS installed on
          your project. Check Tailwind CSS Installation for next.js on Tailwind
          CSS Documentation.
        </Typography>
      </ScrollSection>
      <ScrollSection className="mt-10">
        <Component.Container
          className="h-fit"
          title="Using NPM"
          description="Install @imagine-ui/react as a dependency using NPM by running the
          following command: npm i @imagine-ui/react"
        >
          <SyntaxHighlighter codeString={viteInstallNpmCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Using Yarn"
          description="Install @imagine-ui/react as a dependency using Yarn by running
        the following command:"
        >
          <SyntaxHighlighter codeString={viteInstallYarnCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Using PNPM"
          description=" Install @imagine-ui/react as a dependency using PNPM by running
          the following command:"
        >
          <SyntaxHighlighter codeString={viteInstallPnpmCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-full"
          title="TailwindCSS Configurations"
          description="Multiple button designs available to suit different interface needs."
        >
          <SyntaxHighlighter codeString={viteTailwindConfigCodeString} />
        </Component.Container>
      </ScrollSection>

      <ScrollSection className="mt-14">
        <Component.Container
          title="Theme Provider"
          className="h-fit"
          description="@imagine-ui/react comes with a theme provider that set's the default theme/styles for components or to provide your own theme/styles to your components. You need to wrap your entire application with the ThemeProvider coming from @imagine-ui/react. On the pages/_app put the code bellow."
        >
          <SyntaxHighlighter codeString={viteThemeProviderCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection className="mt-14">
        <Component.Container
          title="Button"
          className="h-[260px]"
          description="Now you're good to go and use @imagine-ui/react in your project."
        >
          <Component.Preview codeString={buttonCodeString}>
            <Button>Example</Button>
          </Component.Preview>
        </Component.Container>
      </ScrollSection>
    </>
  );
}

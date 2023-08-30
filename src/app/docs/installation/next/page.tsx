import Component from "@/components/ComponentPreview";
import { ScrollSection } from "@/components/ScroolSection";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import {
  nextImportButtonCodeString,
  nextImportExampleButtonCodeString,
  nextInstallNpmCodeString,
  nextInstallPnpmCodeString,
  nextInstallYarnCodeString,
  nextTailwindConfigCodeString,
  nextThemeProviderCodeString,
} from "@/utils/codeString/nextInstallation";
import { Typography } from "@/utils/imagine-ui";

export default function InstallationNext() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <ScrollSection>
        <Typography variant="h6">Imagine UI with Next.js</Typography>
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
      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Using NPM"
          description="Install @imagine-ui/react as a dependency using NPM by running the
          following command: npm i @imagine-ui/react"
        >
          <SyntaxHighlighter codeString={nextInstallNpmCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Using Yarn"
          description="Install @imagine-ui/react as a dependency using Yarn by running
        the following command:"
        >
          <SyntaxHighlighter codeString={nextInstallYarnCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Using PNPM"
          description=" Install @imagine-ui/react as a dependency using PNPM by running
          the following command:"
        >
          <SyntaxHighlighter codeString={nextInstallPnpmCodeString} />
        </Component.Container>
      </ScrollSection>
      <ScrollSection>
        <Component.Container
          className="h-full"
          title="TailwindCSS Configurations"
          description="Multiple button designs available to suit different interface needs."
        >
          <SyntaxHighlighter codeString={nextTailwindConfigCodeString} />
        </Component.Container>
      </ScrollSection>

      <ScrollSection>
        <Component.Container
          className="h-fit"
          title="Leveraging Next.js 13's appDir and Server Components with @imagine-ui/react"
          description="To seamlessly integrate the capabilities of @imagine-ui/react within the framework of Next.js 13, specifically the appDir feature, it's crucial to adopt a specific approach. Utilizing the 'use client' directive is key in ensuring the compatibility of these components within a client-rendered context. An effective strategy involves creating a dedicated export file for the desired components from @imagine-ui/react:"
        >
          <SyntaxHighlighter codeString={nextImportButtonCodeString} />
        </Component.Container>
        <Component.Container
          className="h-fit"
          title=""
          description="This export file serves as a bridge between your project and the library, ensuring that these components are client-oriented when integrated.

          Subsequently, instead of directly importing components from @imagine-ui/react, you'll import them from the new export file:"
        >
          <SyntaxHighlighter codeString={nextImportExampleButtonCodeString} />
        </Component.Container>
      </ScrollSection>

      <ScrollSection className="mt-4">
        <Component.Container
          title="Theme Provider"
          description="@imagine-ui/react comes with a theme provider that set's the default theme/styles for components or to provide your own theme/styles to your components. You need to wrap your entire application with the ThemeProvider coming from @imagine-ui/react. On the pages/_app put the code bellow."
        >
          <SyntaxHighlighter codeString={nextThemeProviderCodeString} />
        </Component.Container>
      </ScrollSection>
    </div>
  );
}

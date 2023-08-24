"use client";
import { Button, IconButton, Typography } from "@imagine-ui/react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import Component from "@/components/ComponentPreview";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { useIconButtonPage } from "@/hooks/useIconButtonPage";
import {
  iconButtonCodeString,
  iconButtonColorCodeString,
  iconButtonColorTypeCodeString,
  iconButtonImportCodeString,
  iconButtonRippleEffectCodeString,
  iconButtonShadowCodeString,
  iconButtonVariantCodeString,
  iconButtonVariantTypeCodeString,
} from "@/utils/codeString/iconButton";

export default function IconButtons() {
  const { apiBody, currentSection, onThisPageList, refs } = useIconButtonPage();

  return (
    <div className="w-full flex items-start justify-center gap-10 p-4">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <div className="flex flex-col gap-4" ref={refs.introdution}>
          <Typography variant="h5"> Icon Button - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The IconButton stands as a cornerstone in web design. Acting as a
            distinctive, stylized prompt, it effectively captures the user's
            attention and steers them through our platforms. For developers
            seeking adaptability, an example below showcases the IconButton's
            smooth integration with Tailwind CSS and React. This illustration
            offers a spectrum of styles, effects, and colors, ensuring it can be
            tailored to suit various design needs.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its primary role is to lead users toward specific actions, whether
            it's submitting feedback or navigating further into the app.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            For developers seeking adaptability, an example below showcases the
            IconButton's smooth integration with Tailwind CSS and React. This
            illustration offers a spectrum of styles, effects, and colors,
            ensuring it can be tailored to suit various design needs.
          </Typography>
        </div>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection ref={refs.button}>
            <Component.Container
              title="Icon Button"
              description="Preview and copy a ready-to-use code for a button with default settings, ensuring a swift integration into your project."
            >
              <Component.Preview codeString={iconButtonCodeString}>
                <IconButton variant="solid" color="green">
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={iconButtonVariantCodeString}>
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
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.colors}>
            <Component.Container
              title="Colors"
              className="h-[430px]"
              description="Customize the button hue for seamless UI integration."
            >
              <Component.Preview codeString={iconButtonColorCodeString}>
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
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.ripple}>
            <Component.Container
              title="Ripple Effect"
              className="h-[285px]"
              description="Control the ripple effect for tactile user feedback."
            >
              <Component.Preview codeString={iconButtonRippleEffectCodeString}>
                <IconButton color="green">
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
                <IconButton color="red" ripple={false}>
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.shadow}>
            <Component.Container
              title="Shadow"
              className="h-[285px]"
              description="Toggle button's depth perception with a shadow effect."
            >
              <Component.Preview codeString={iconButtonShadowCodeString}>
                <IconButton color="green" variant="solid">
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
                <IconButton color="red" shadow={false}>
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.disabled}>
            <Component.Container
              title="Disable"
              className="h-[285px]"
              description="Enable or deactivate the button's interactive capabilities."
            >
              <Component.Preview codeString={iconButtonShadowCodeString}>
                <IconButton variant="solid" color="green">
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
                <IconButton variant="solid" color="red">
                  <CodeBracketIcon className="h-4 w-4" />
                </IconButton>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.api}>
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API</Typography>
                <Typography>
                  Dive into the detailed specifications of our Icon Button
                  component. This section outlines the properties you can tweak,
                  including color and variant types, to seamlessly integrate the
                  button into your application's design.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={iconButtonImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection ref={refs.colorType}>
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={iconButtonColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.variantType}>
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={iconButtonVariantTypeCodeString} />
          </ScrollSection>
        </div>
        <div className="w-full flex gap-4 ">
          <Link href="" className="w-full">
            <Button
              variant="outlined"
              className="w-full h-20 border-green-200"
              color="green"
            >
              <div className="w-full">
                <Typography>Previous</Typography>
                <Typography color="green">Typography</Typography>
              </div>
            </Button>
          </Link>
          <Link href="" className="w-full">
            <Button
              variant="outlined"
              className="w-full h-20 border-green-200"
              color="green"
            >
              <div className="ml-auto">
                <Typography className="ml-auto">Next</Typography>
                <Typography color="green">Icon Button</Typography>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <OnThisPage currentSection={currentSection} list={onThisPageList} />
    </div>
  );
}
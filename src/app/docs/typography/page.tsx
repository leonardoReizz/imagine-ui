"use client";
import { Button, IconButton, Typography } from "@imagine-ui/react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import Component from "@/components/ComponentPreview";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import {
  typographyAlignTypeCodeString,
  typographyCodeString,
  typographyColorCodeString,
  typographyColorTypeCodeString,
  typographyImportCodeString,
  typographyVariantCodeString,
  typographyVariantTypeCodeString,
} from "@/utils/codeString/typography";
import { useTypographyPage } from "@/hooks/useTypographyPage";

export default function Typographys() {
  const { apiBody, currentSection, onThisPageList, refs } = useTypographyPage();

  return (
    <div className="w-full flex items-start justify-center gap-10 p-4">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <div className="flex flex-col gap-4" ref={refs.introdution}>
          <Typography variant="h5"> Typography - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Typography component emerges as a linchpin in web design,
            serving as an adaptable and stylized textual element. It
            encapsulates the essence of content, ensuring legibility while
            enhancing the user's engagement with the platform.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its foremost function is to represent diverse textual hierarchies,
            from bold headings like h1 to h6 to nuanced textual indications such
            as paragraph, sub-paragraph, and caption. This variety ensures
            content clarity, guiding users through the flow of information.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Developers aiming for flexibility will find the Typography component
            a boon. Demonstrated below, the component's seamless synergy with
            React allows for a plethora of styles, alignments, and emphasis
            options. This versatility ensures that every piece of text can be
            crafted to align perfectly with the broader design narrative.
          </Typography>
        </div>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection ref={refs.typography}>
            <Component.Container
              title="Typography"
              description="Preview and copy a ready-to-use code for a button with default settings, ensuring a swift integration into your project."
            >
              <Component.Preview codeString={typographyCodeString}>
                <Typography className="  max-w-prose">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam ducimus amet aliquid distinctio dolores nobis!
                  Eaque delectus dolorem, totam atque blanditiis vel, libero ea
                  quaerat laudantium, cupiditate aliquam unde earum?
                </Typography>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
              className="min-h-[500px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={typographyVariantCodeString}>
                <div className="flex flex-col items-center">
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
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.colors}>
            <Component.Container
              title="Colors"
              description="Customize the button hue for seamless UI integration."
            >
              <Component.Preview codeString={typographyColorCodeString}>
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
                <SyntaxHighlighter codeString={typographyImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection ref={refs.colorType}>
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={typographyColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.variantType}>
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={typographyVariantTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.alignType}>
            <Typography variant="h6">Align Type</Typography>
            <SyntaxHighlighter codeString={typographyAlignTypeCodeString} />
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

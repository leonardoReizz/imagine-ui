import { Chip, Typography } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import {
  chipCodeString,
  chipColorCodeString,
  chipColorTypeCodeString,
  chipImportCodeString,
  chipSizeCodeString,
  chipSizeTypeCodeString,
  chipVariantCodeString,
  chipVariantTypeCodeString,
} from "@/utils/codeString/chip";
import {
  apiBodyTypography,
  onThisPageTypography,
} from "@/utils/static/typography";

export default function Typographys() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introdution">
          <Typography variant="h5">Chip - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Chip component emerges as a pivotal element in web design,
            serving as a versatile and visually appealing data representation
            tool. It encapsulates the essence of data visualization, ensuring
            not only clarity but also an aesthetically pleasing integration with
            your application&apos;s design philosophy.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its primary function is to represent various data points, from tags
            and labels to interactive information indicators. This diversity
            ensures effective data presentation and user understanding within
            the application.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Developers seeking flexibility will find the Chip component to be a
            valuable asset. As demonstrated below, its seamless integration with
            React allows for a multitude of styles, sizes, and interactive
            features.
          </Typography>
        </ScrollSection>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection id="typography">
            <Component.Container title="Chip" className="min-h-[260px]">
              <Component.Preview codeString={chipCodeString}>
                <Chip>Label</Chip>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="variants">
            <Component.Container
              title="Variants"
              className="min-h-[260px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={chipVariantCodeString}>
                <div className="flex  items-center gap-4">
                  <Chip variant="solid">Label</Chip>
                  <Chip variant="outlined">Label</Chip>
                  <Chip variant="ghost">Label</Chip>
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="sizes">
            <Component.Container
              title="Sizes"
              className="min-h-[260px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={chipSizeCodeString}>
                <div className="flex  items-center gap-4">
                  <Chip size="sm">Chip SM</Chip>
                  <Chip size="md">Chip MD</Chip>
                  <Chip size="lg">Chip LG</Chip>
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="colors">
            <Component.Container
              title="Colors"
              className="min-h-[320px]"
              description="Customize the button hue for seamless UI integration."
            >
              <Component.Preview codeString={chipColorCodeString}>
                <Chip color="green">Green</Chip>
                <Chip color="red">Red</Chip>
                <Chip color="blue">Blue</Chip>
                <Chip color="orange">Orange</Chip>
                <Chip color="purple">Purple</Chip>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="api">
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API</Typography>
                <Typography>
                  Embark on an exploration of our Chip component&apos;s
                  capabilities. This section delves into the diverse styles,
                  customization options, and interactive properties that
                  guarantee your information presentation is not only functional
                  but also harmoniously aligned with your application&apos;s
                  design principles. From tags to labels, our Chip component has
                  all your data visualization needs covered. covered.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={chipImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBodyTypography} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection id="colorType">
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={chipColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={chipVariantTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="alignType">
            <Typography variant="h6">Size Type</Typography>
            <SyntaxHighlighter codeString={chipSizeTypeCodeString} />
          </ScrollSection>
        </div>
      </div>
      <PreviousAndNext
        previous={{ label: "Spinner", path: "/docs/spinner" }}
        next={{ label: "Overview", path: "/docs/overview" }}
      />
      <OnThisPage list={onThisPageTypography} />
    </div>
  );
}

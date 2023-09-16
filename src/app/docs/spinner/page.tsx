import { Typography, Spinner } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import {
  spinnerCodeString,
  spinnerColorCodeString,
  spinnerColorTypeCodeString,
  spinnerImportCodeString,
  spinnerSizeCodeString,
  spinnerSizeTypeCodeString,
  spinnerVariantCodeString,
  spinnerVariantTypeCodeString,
} from "@/utils/codeString/spinner";
import { apiBodySpinner, onThisPageSpinner } from "@/utils/static/spinner";

export default function Spinners() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introdution">
          <Typography variant="h5"> Spinner - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Spinner component emerges as a pivotal element in web design,
            serving as a dynamic and engaging visual element. It encapsulates
            the essence of user interaction, ensuring a smooth and intuitive
            experience while users interact with the platform.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its primary function is to provide versatile loading animations and
            feedback indicators, from simple spinners to more elaborate loading
            sequences. This diversity ensures users are aware of ongoing
            processes, enhancing their overall experience.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Developers seeking flexibility will find the Spinner component to be
            a valuable asset. As exemplified below, its seamless integration
            with React allows for a multitude of styles, sizes, and interactive
            behaviors.
          </Typography>
        </ScrollSection>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection id="spinner">
            <Component.Container title="Spinner">
              <Component.Preview codeString={spinnerCodeString}>
                <Spinner variant="spinner" size="md" />
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="variants">
            <Component.Container
              title="Variants"
              className="min-h-[240px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={spinnerVariantCodeString}>
                <div className="flex items-center">
                  <Spinner variant="spinner" size="md" />
                  <Spinner variant="roller" size="md" />
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
              <Component.Preview codeString={spinnerSizeCodeString}>
                <div className="flex items-center">
                  <Spinner size="sm" variant="spinner" />
                  <Spinner size="md" variant="spinner" />
                  <Spinner size="lg" variant="spinner" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="colors">
            <Component.Container
              title="Colors"
              className="min-h-[290px]"
              description="Customize the button hue for seamless UI integration."
            >
              <Component.Preview codeString={spinnerColorCodeString}>
                <Spinner variant="roller" color="red" />
                <Spinner variant="roller" color="orange" />
                <Spinner variant="roller" color="purple" />
                <Spinner variant="roller" color="amber" />
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="api">
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API</Typography>
                <Typography>
                  Embark on an exploration of our Spinner component&apos;s
                  intricacies. This section delves deep into the various styles,
                  animation options, and customizable properties that guarantee
                  your loading indicators are not only functional but also
                  seamlessly aligned with your application&apos;s design
                  philosophy. From simple spinners to intricate loading
                  animations, our Spinner component has all your loading
                  feedback needs covered.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={spinnerImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBodySpinner} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection id="colorType">
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={spinnerColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="sizeType">
            <Typography variant="h6">Size Type</Typography>
            <SyntaxHighlighter codeString={spinnerSizeTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={spinnerVariantTypeCodeString} />
          </ScrollSection>
        </div>
      </div>
      <PreviousAndNext
        previous={{ label: "List", path: "/docs/list" }}
        next={{ label: "Overview", path: "/docs/typography" }}
      />
      <OnThisPage list={onThisPageSpinner} />
    </div>
  );
}

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
import { useSpinnerPage } from "@/hooks/useSpinnerPage";

export default function Spinners() {
  const { apiBody, onThisPageList } = useSpinnerPage();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introdution">
          <Typography variant="h5"> Spinner - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Typography component emerges as a linchpin in web design,
            serving as an adaptable and stylized textual element. It
            encapsulates the essence of content, ensuring legibility while
            enhancing the user&apos;s engagement with the platform.
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
            a boon. Demonstrated below, the component&apos;s seamless synergy
            with React allows for a plethora of styles, alignments, and emphasis
            options. This versatility ensures that every piece of text can be
            crafted to align perfectly with the broader design narrative.
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
                  Embark on a journey through the specifics of our Typography
                  component. This section dives deep into the different styles,
                  weight options, and customizable properties that ensure your
                  text elements are not only readable but also aesthetically
                  aligned with your application&apos;s design ethos. From
                  headers to paragraphs, our Typography component has got you
                  covered.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={spinnerImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
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
      <OnThisPage list={onThisPageList} />
    </div>
  );
}

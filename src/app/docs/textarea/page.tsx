import { Textarea, Typography } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import {
  typographyImportCodeString,
  typographyVariantCodeString,
} from "@/utils/codeString/typography";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import {
  textareaCodeString,
  textareaColorTypeCodeString,
  textareaContainerPropsTypeCodeString,
  textareaIconPropsTypeCodeString,
  textareaLabelPropsTypeCodeString,
  textareaVariantTypeCodeString,
} from "@/utils/codeString/textarea";
import { apiBodyTextarea, onThisPageTextArea } from "@/utils/static/textarea";

export default function Typographys() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introdution">
          <Typography variant="h5"> Textarea - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The TextArea component emerges as a pivotal element in web design,
            offering adaptability and a polished approach to handling textual
            input. It captures the essence of user-generated content,
            guaranteeing readability while elevating the user&apos;s interaction
            with the platform.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its primary function is to provide a versatile solution for
            gathering and displaying textual information. From user comments to
            detailed descriptions and input fields, the TextArea component
            offers a wide range of options to enhance the user&apos;s ability to
            express themselves and interact effectively.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Developers seeking flexibility will find the TextArea component to
            be a valuable asset. As exemplified below, its seamless integration
            with React allows for an array of styles, sizes, and input options.
          </Typography>
        </ScrollSection>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection id="typography">
            <Component.Container
              title="Textarea"
              description="Preview and copy a ready-to-use code for a button with default settings, ensuring a swift integration into your project."
            >
              <Component.Preview codeString={textareaCodeString}>
                <Textarea label="Textarea" />
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="variants">
            <Component.Container
              title="Variants"
              className="min-h-[500px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={typographyVariantCodeString}>
                <div className="flex flex-col items-center w-full gap-4">
                  <Textarea label="Textarea" variant="outlined" />
                  <Textarea label="Textarea" variant="standart" />
                  <Textarea label="Textarea" variant="static" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="sizes">
            <Component.Container
              title="Sizes"
              className="min-h-[500px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={typographyVariantCodeString}>
                <div className="flex flex-col items-center w-full gap-4">
                  <Textarea size="sm" label="SM" />
                  <Textarea size="md" label="MD" />
                  <Textarea size="lg" label="LG" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>

          <ScrollSection id="ring">
            <Component.Container
              title="Ring"
              className="min-h-[300px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={typographyVariantCodeString}>
                <div className="flex flex-col items-center w-full gap-4">
                  <Textarea label="Textarea" variant="outlined" ring={true} />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="withIcon">
            <Component.Container
              title="With Icon"
              className="min-h-[300px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={typographyVariantCodeString}>
                <div className="flex flex-col items-center w-full gap-4">
                  <Textarea
                    label="Textarea"
                    variant="outlined"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      </svg>
                    }
                  />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="api">
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API</Typography>
                <Typography>
                  Embark on an exploration of the intricacies of our TextArea
                  component&apos;s API. This section delves deep into the
                  various input styles, validation options, and customizable
                  properties that guarantee your text input elements are not
                  just functional but also seamlessly integrated with your
                  application&apos;s design philosophy. From user comments to
                  data entry fields, our TextArea component&apos;s API has all
                  your text input needs covered.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={typographyImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBodyTextarea} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection id="colorType">
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={textareaColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={textareaVariantTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Label Props Type</Typography>
            <SyntaxHighlighter codeString={textareaLabelPropsTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Icon Props Type</Typography>
            <SyntaxHighlighter codeString={textareaIconPropsTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Container Props Type</Typography>
            <SyntaxHighlighter
              codeString={textareaContainerPropsTypeCodeString}
            />
          </ScrollSection>
        </div>
      </div>
      <PreviousAndNext
        previous={{ label: "Spinner", path: "/docs/spinner" }}
        next={{ label: "Overview", path: "/docs/overview" }}
      />
      <OnThisPage list={onThisPageTextArea} />
    </div>
  );
}

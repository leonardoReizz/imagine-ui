import { Input, Typography } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { useInputPage } from "@/hooks/useInputPage";
import {
  inputCodeString,
  inputColorTypeCodeString,
  inputContainerPropsTypeCodeString,
  inputDisableCodeString,
  inputIconPropsTypeCodeString,
  inputImportCodeString,
  inputSizesCodeString,
  inputVariantCodeString,
  inputVariantTypeCodeString,
  inputWithIconCodeString,
  inputlabelPropsTypeCodeString,
} from "@/utils/codeString/input";
import { PreviousAndNext } from "@/components/PreviousAndNext";

export default function Inputs() {
  const { apiBody, onThisPageList } = useInputPage();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introduction">
          <Typography variant="h5">Input - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Input component is indispensable in web design. Serving as a
            gateway for user data, its fundamental role is to capture and relay
            user-inputted information, ensuring dynamic interaction between
            users and platforms. It&apos;s the cornerstone for activities like
            user registrations, searches, or feedback submissions.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            For developers seeking versatility, the example below highlights the
            fluid alignment of the Input component with Tailwind CSS and React.
            This portrayal introduces a spectrum of styles, effects, and
            placeholders, ensuring its compatibility with a multitude of design
            aspirations.
          </Typography>
        </ScrollSection>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection id="input">
            <Component.Container title="Input" className="h-[260px]">
              <Component.Preview codeString={inputCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Username" color="green" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="variants">
            <Component.Container
              title="Variants"
              className="h-[320px]"
              description="Multiple button designs available to suit different interface needs."
            >
              <Component.Preview codeString={inputVariantCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Teste" variant="outlined" />
                  <Input label="Teste" variant="standart" />
                  <Input label="Teste" variant="static" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>

          <ScrollSection id="sizes">
            <Component.Container
              title="Sizes"
              className="h-[360px]"
              description=" A comprehensive color palette to choose from, ensuring buttons fit any design theme."
            >
              <Component.Preview codeString={inputSizesCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="SM" size="sm" />
                  <Input label="MD" size="md" />
                  <Input label="LG" size="lg" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="withIcon">
            <Component.Container
              className="h-[290px]"
              title="Input With Icon"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={inputWithIconCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input
                    label="With Icon"
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
          <ScrollSection id="disabled">
            <Component.Container
              className="h-[240px]"
              title="Input Disabled"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={inputDisableCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Disabled" disabled />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="api">
            <div className=" flex flex-col gap-10">
              <div>
                <Typography variant="h6">API</Typography>
                <Typography>
                  Delve into the sophisticated specifics of our Input component.
                  This section illuminates the myriad of customization options
                  available, from placeholder text to border styles. Whether
                  you&apos;re striving for a simple text box or a more enhanced
                  input experience, our Input component is designed to
                  accommodate your application&apos;s exact requirements. Tailor
                  every detail to ensure fluidity and coherence within your
                  application&apos;s interface.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={inputImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection id="variantType">
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={inputVariantTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="colorType">
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={inputColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="containerPropsType">
            <Typography variant="h6">Container Props Type</Typography>
            <SyntaxHighlighter codeString={inputContainerPropsTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="iconPropsType">
            <Typography variant="h6">Icon Props Type</Typography>
            <SyntaxHighlighter codeString={inputIconPropsTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="labelPropsType">
            <Typography variant="h6">Label Props Type</Typography>
            <SyntaxHighlighter codeString={inputlabelPropsTypeCodeString} />
          </ScrollSection>
        </div>
        <PreviousAndNext
          previous={{ label: "Icon Button", path: "/docs/iconButton" }}
          next={{ label: "List", path: "/docs/list" }}
        />
      </div>
      <OnThisPage list={onThisPageList} />
    </div>
  );
}

"use client";
import { Button, Input, Typography } from "@imagine-ui/react";
import {
  buttonColorsCodeString,
  buttonNotificationCodeString,
  buttonRippleEffectCodeString,
  buttonVariantCodeString,
} from "@/utils/codeString/button";
import Component from "@/components/ComponentPreview";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { useInputPage } from "@/hooks/useInputPage";
import {
  inputColorTypeCodeString,
  inputImportCodeString,
  inputVariantTypeCodeString,
} from "@/utils/codeString/input";

export default function Inputs() {
  const { apiBody, currentSection, onThisPageList, refs } = useInputPage();

  return (
    <div className="w-full flex items-start justify-center gap-10 p-4">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <div className="flex flex-col gap-4" ref={refs.button}>
          <Typography variant="h5">Input - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Button is a fundamental component in web design. At its core,
            it's a stylized link that grabs the user's attention. They guide
            users through our websites or apps, leading them to specific
            actions, such as submitting a contact form or easily placing an
            order. Check below an example of our Button that can be integrated
            into projects with Tailwind CSS and React. The example is also
            available in a variety of styles, effects, and colors, allowing you
            to customize it to your preferences.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Button is a fundamental component in web design. At its core,
            it's a stylized link that grabs the user's attention. They guide
            users through our websites or apps, leading them to specific
            actions, such as submitting a contact form or easily placing an
            order.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Check below an example of our Button that can be integrated into
            projects with Tailwind CSS and React. The example is also available
            in a variety of styles, effects, and colors, allowing you to
            customize it to your preferences.
          </Typography>
        </div>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
              description="Multiple button designs available to suit different interface needs."
            >
              <Component.Preview codeString={buttonVariantCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Username" size="md" color="green" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
              description="Multiple button designs available to suit different interface needs."
            >
              <Component.Preview codeString={buttonVariantCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Teste" variant="outlined" color="green" />
                  <Input label="Teste" variant="standart" color="green" />
                  <Input label="Teste" variant="static" color="green" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.colors}>
            <Component.Container
              title="Colors"
              className="h-[430px]"
              description=" A comprehensive color palette to choose from, ensuring buttons fit any design theme."
            >
              <Component.Preview codeString={buttonColorsCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Blue" color="blue" size="md" />
                  <Input label="Green" color="green" size="md" />
                  <Input label="Red" color="red" size="md" />
                  <Input label="Purple" color="purple" size="md" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.ripple}>
            <Component.Container
              title="Size"
              className="h-[285px]"
              description="An optional tactile ripple effect that can be toggled based on preference."
            >
              <Component.Preview codeString={buttonRippleEffectCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Size SM" size="sm" color="green" />
                  <Input label="Size MD" size="md" color="green" />
                  <Input label="Size LG" size="lg" color="green" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.withIcon}>
            <Component.Container
              className="h-[430px]"
              title="Input With Icon"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={buttonNotificationCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="With Icon" color="green" />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.disable}>
            <Component.Container
              className="h-[430px]"
              title="Input Disabled"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={buttonNotificationCodeString}>
                <div className="w-full flex flex-col gap-4 max-w-[250px]">
                  <Input label="Disabled" color="green" disabled />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.api}>
            <div className=" flex flex-col gap-10">
              <div>
                <Typography variant="h6">API</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dicta porro eum natus obcaecati. Laudantium maiores molestias
                  aliquid, distinctio itaque modi ullam corrupti earum pariatur
                  maxime possimus iusto, repellat nisi.
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
          <ScrollSection ref={refs.colorType}>
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={inputColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.variantType}>
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={inputVariantTypeCodeString} />
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

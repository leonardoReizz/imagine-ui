"use client";
import { Button, Typography } from "@imagine-ui/react";
import {
  buttonColorTypeCodeString,
  buttonColorsCodeString,
  buttonImportCodeString,
  buttonNotificationCodeString,
  buttonRippleEffectCodeString,
  buttonShadowCodeString,
  buttonSizeTypeCodeString,
  buttonVariantCodeString,
  buttonVariantTypeCodeString,
} from "@/utils/codeString/button";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Component from "@/components/ComponentPreview";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { useButtonsPage } from "@/hooks/useButtonsPage";

export default function Buttons() {
  const { apiBody, currentSection, onThisPageList, refs } = useButtonsPage();

  return (
    <div className="w-full flex items-start justify-center gap-10 p-4">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <div className="flex flex-col gap-4" ref={refs.button}>
          <Typography variant="h5">Button - React</Typography>
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
                <Button
                  variant="solid"
                  color="green"
                  className="px-4 normal-case"
                >
                  Solid
                </Button>
                <Button
                  variant="outlined"
                  color="green"
                  className="px-4 normal-case"
                >
                  Outlined
                </Button>
                <Button
                  variant="ghost"
                  color="green"
                  className="px-4 normal-case"
                >
                  Ghost
                </Button>
                <Button
                  variant="transparent"
                  color="green"
                  className="px-4 normal-case"
                >
                  Transparent
                </Button>
                <Button
                  variant="text"
                  color="green"
                  className="px-4 normal-case"
                >
                  Text
                </Button>
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
                <Button color="blue" className="px-4 normal-case">
                  Blue
                </Button>
                <Button color="green" className="px-4 normal-case">
                  Green
                </Button>
                <Button color="red" className="px-4 normal-case">
                  Red
                </Button>
                <Button color="purple" className="px-4 normal-case">
                  Purple
                </Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.ripple}>
            <Component.Container
              title="Ripple Effect"
              className="h-[285px]"
              description="An optional tactile ripple effect that can be toggled based on preference."
            >
              <Component.Preview codeString={buttonRippleEffectCodeString}>
                <Button color="green" className="px-4 normal-case">
                  Ripple ON
                </Button>
                <Button
                  color="green"
                  ripple={false}
                  className="px-4 normal-case"
                >
                  Ripple OFF
                </Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.shadow}>
            <Component.Container
              title="Shadow"
              className="h-[285px]"
              description=" Control over button shadowing, allowing for either a flat or elevated appearance."
            >
              <Component.Preview codeString={buttonShadowCodeString}>
                <Button
                  variant="solid"
                  color="green"
                  className="px-4 normal-case"
                >
                  Shadow ON
                </Button>
                <Button
                  color="green"
                  className="px-4 normal-case"
                  shadow={false}
                >
                  Shadow OFF
                </Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.withIcon}>
            <Component.Container
              className="h-[430px]"
              title="Button With Icons"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={buttonNotificationCodeString}>
                <Button color="blue" className="px-4 normal-case">
                  <UserIcon className="w-4 h-4" />
                  User
                </Button>
                <Button color="green" className="px-4 normal-case">
                  Settings
                  <Cog6ToothIcon className="w-4 h-4" />
                </Button>
                <Button color="red" className="px-4 normal-case">
                  Notification
                  <BellAlertIcon className="w-4 h-4" />
                </Button>
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
                <SyntaxHighlighter codeString={buttonImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection ref={refs.sizeType}>
            <Typography variant="h6">Size Type</Typography>
            <SyntaxHighlighter codeString={buttonSizeTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.variantType}>
            <Typography variant="h6">Variant Type</Typography>
            <SyntaxHighlighter codeString={buttonVariantTypeCodeString} />
          </ScrollSection>
          <ScrollSection ref={refs.colorType}>
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={buttonColorTypeCodeString} />
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

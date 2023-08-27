"use client";
import { Button, Typography } from "@imagine-ui/react";
import {
  buttonCodeString,
  buttonColorTypeCodeString,
  buttonColorsCodeString,
  buttonImportCodeString,
  buttonWithIconCodeString,
  buttonRippleEffectCodeString,
  buttonShadowCodeString,
  buttonSizeTypeCodeString,
  buttonVariantCodeString,
  buttonVariantTypeCodeString,
} from "@/utils/codeString/button";
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
        <div className="flex flex-col gap-4" ref={refs.introduction}>
          <Typography variant="h5">Button - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Button component is essential in web design. Acting as an
            interactive element, its primary purpose is to prompt users towards
            specific actions or responses. It streamlines user experiences,
            providing a clear directive for tasks like form submissions or
            navigation prompts.{" "}
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            For developers prioritizing adaptability, the example below
            elucidates the effortless melding of the Button with Tailwind CSS
            and React. This representation features an extensive palette of
            styles, effects, and hues, making sure it can be molded to fit
            varied design specifications.
          </Typography>
        </div>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection ref={refs.button}>
            <Component.Container title="Button" className="h-[260px]">
              <Component.Preview codeString={buttonCodeString}>
                <Button>Example</Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
              className="h-[430px]"
              description="Multiple button designs available to suit different interface needs."
            >
              <Component.Preview codeString={buttonVariantCodeString}>
                <Button variant="solid" color="green">
                  Solid
                </Button>
                <Button variant="outlined" color="green">
                  Outlined
                </Button>
                <Button variant="ghost" color="green">
                  Ghost
                </Button>
                <Button variant="transparent" color="green">
                  Transparent
                </Button>
                <Button variant="text" color="green">
                  Text
                </Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.colors}>
            <Component.Container
              title="Colors"
              className="h-[290px]"
              description=" A comprehensive color palette to choose from, ensuring buttons fit any design theme."
            >
              <Component.Preview codeString={buttonColorsCodeString}>
                <Button color="blue">Blue</Button>
                <Button color="green">Green</Button>
                <Button color="red">Red</Button>
                <Button color="purple">Purple</Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.ripple}>
            <Component.Container
              title="Ripple Effect"
              className="h-[235px]"
              description="An optional tactile ripple effect that can be toggled based on preference."
            >
              <Component.Preview codeString={buttonRippleEffectCodeString}>
                <Button>Ripple ON</Button>
                <Button ripple={false}>Ripple OFF</Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.shadow}>
            <Component.Container
              title="Shadow"
              className="h-[240px]"
              description=" Control over button shadowing, allowing for either a flat or elevated appearance."
            >
              <Component.Preview codeString={buttonShadowCodeString}>
                <Button>Shadow ON</Button>
                <Button shadow={false}>Shadow OFF</Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.withIcon}>
            <Component.Container
              className="h-[430px]"
              title="With Icon"
              description="Buttons can incorporate icons for clear, visual representation of their function."
            >
              <Component.Preview codeString={buttonWithIconCodeString}>
                <Button color="blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  User
                </Button>
                <Button color="green">
                  Settings
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </Button>
                <Button color="red">
                  Notification
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.api}>
            <div className=" flex flex-col gap-10">
              <div>
                <Typography variant="h6">API</Typography>
                <Typography>
                  Dive into the detailed specifications of our Button component.
                  This section sheds light on the plethora of options available
                  to you, ranging from size to color. Whether you're aiming for
                  a minimalist design or a more attention-grabbing approach, our
                  Button component offers the flexibility to suit your
                  application's needs.
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

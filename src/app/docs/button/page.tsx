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
            <Component.Container title="Button">
              <Component.Preview codeString={buttonCodeString}>
                <Button>Example</Button>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.variants}>
            <Component.Container
              title="Variants"
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
              className="h-[430px]"
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
              className="h-[285px]"
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
              className="h-[285px]"
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
                  <UserIcon className="w-4 h-4" />
                  User
                </Button>
                <Button color="green">
                  Settings
                  <Cog6ToothIcon className="w-4 h-4" />
                </Button>
                <Button color="red">
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

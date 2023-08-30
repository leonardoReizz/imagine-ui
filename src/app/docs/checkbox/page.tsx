"use client";
import { Checkbox, Typography } from "@imagine-ui/react";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";

import { useCheckboxPage } from "@/hooks/useCheckboxPage";
import {
  checkboxCodeString,
  checkboxColorTypeCodeString,
  checkboxColorsCodeString,
  checkboxContainerPropsTypeCodeString,
  checkboxCustomIconCodeString,
  checkboxImportCodeString,
  checkboxInputPropsTypeCodeString,
  checkboxRippleEffectCodeString,
  checkboxSizeTypeCodeString,
  checkboxSpanPropsTypeCodeString,
} from "@/utils/codeString/checkbox";
import { PreviousAndNext } from "@/components/PreviousAndNext";

export default function Checkboxes() {
  const { apiBody, onThisPageList, checked, handleCheckbox } =
    useCheckboxPage();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <ScrollSection className="flex flex-col gap-4" id="introduction">
          <Typography variant="h5">Checkbox - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Checkbox is an essential component in web design. At its
            essence, it represents a simple choice mechanism that effectively
            captures the user&apos;s input. These checkboxes facilitate
            interactions within our websites or apps, enabling users to indicate
            preferences, make selections, or provide consent. Examine an example
            of our Checkbox below that can be smoothly integrated into projects
            with Tailwind CSS and React. This demonstration encompasses a range
            of styles, effects, and colors, empowering you to tailor it
            according to your design needs.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The Checkbox is an indispensable element in web design. At its
            heart, it&apos;s a clear indication of choice, effectively grabbing
            the user&apos;s focus. They steer users through our digital
            platforms, allowing them to confirm choices or indicate agreement.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Refer to the example below of our Checkbox designed for seamless
            integration with Tailwind CSS and React. This sample is offered in
            diverse styles, effects, and color schemes, granting you the
            flexibility to mold it to your unique design aesthetics.
          </Typography>
        </ScrollSection>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection id="checkbox">
            <Component.Container title="Checkbox" className="h-[260px]">
              <Component.Preview codeString={checkboxCodeString}>
                <div className="w-full flex gap-4 justify-center">
                  <Checkbox
                    checked={checked[1] || true}
                    onChange={() => handleCheckbox(1)}
                  />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="colors">
            <Component.Container
              title="Colors"
              className="h-[340px]"
              description=" A comprehensive color palette to choose from, ensuring buttons fit any design theme."
            >
              <Component.Preview codeString={checkboxColorsCodeString}>
                <div className="w-full flex gap-4 items-center justify-center">
                  <Checkbox
                    color="green"
                    checked={checked[2] || true}
                    onChange={() => handleCheckbox(2)}
                  />
                  <Checkbox
                    color="red"
                    checked={checked[3] || true}
                    onChange={() => handleCheckbox(3)}
                  />
                  <Checkbox
                    color="blue"
                    checked={checked[4] || true}
                    onChange={() => handleCheckbox(4)}
                  />
                  <Checkbox
                    color="orange"
                    checked={checked[5] || true}
                    onChange={() => handleCheckbox(5)}
                  />
                  <Checkbox
                    color="pink"
                    checked={checked[6] || true}
                    onChange={() => handleCheckbox(6)}
                  />
                  <Checkbox
                    color="purple"
                    checked={checked[7] || true}
                    onChange={() => handleCheckbox(7)}
                  />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="ripple">
            <Component.Container
              title="Ripple"
              className="h-[245px]"
              description="An optional tactile ripple effect that can be toggled based on preference."
            >
              <Component.Preview codeString={checkboxRippleEffectCodeString}>
                <div className="w-full flex  gap-4 justify-center">
                  <Checkbox
                    color="green"
                    checked={checked[8] || true}
                    onChange={() => handleCheckbox(8)}
                  />
                  <Checkbox
                    color="red"
                    checked={checked[9] || true}
                    onChange={() => handleCheckbox(9)}
                    ripple={false}
                  />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="customIcon">
            <Component.Container
              title="Custom Icon"
              className="h-[430px]"
              description="An optional tactile ripple effect that can be toggled based on preference."
            >
              <Component.Preview codeString={checkboxCustomIconCodeString}>
                <div className="w-full flex  gap-4 justify-center">
                  <Checkbox
                    color="pink"
                    size="lg"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                    }
                    checked={checked[10] || true}
                    onChange={() => handleCheckbox(10)}
                  />
                  <Checkbox
                    color="green"
                    checked={checked[11] || true}
                    size="lg"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                      </svg>
                    }
                    onChange={() => handleCheckbox(11)}
                  />
                </div>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection id="api">
            <div className=" flex flex-col gap-10">
              <div>
                <Typography variant="h6">API</Typography>
                <Typography>
                  Step into the intricate details of our Input Checkbox
                  component. Here, we detail the facets and properties that can
                  be adjusted, like the checkbox&apos;s size, its state (checked
                  or unchecked), and even its color. Tailor it to perfection,
                  ensuring that it matches the overarching theme and
                  functionality of your application.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={checkboxImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection id="sizeType">
            <Typography variant="h6">Size Type</Typography>
            <SyntaxHighlighter codeString={checkboxSizeTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="colorType">
            <Typography variant="h6">Color Type</Typography>
            <SyntaxHighlighter codeString={checkboxColorTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="containerPropsType">
            <Typography variant="h6">Container Props Type</Typography>
            <SyntaxHighlighter
              codeString={checkboxContainerPropsTypeCodeString}
            />
          </ScrollSection>
          <ScrollSection id="inputPropsType">
            <Typography variant="h6">Input Props Type</Typography>
            <SyntaxHighlighter codeString={checkboxInputPropsTypeCodeString} />
          </ScrollSection>
          <ScrollSection id="spanPropsType">
            <Typography variant="h6">Span Props Type</Typography>
            <SyntaxHighlighter codeString={checkboxSpanPropsTypeCodeString} />
          </ScrollSection>
        </div>
      </div>
      <PreviousAndNext
        previous={{ label: "Button", path: "/docs/button" }}
        next={{ label: "Icon Button", path: "/docs/iconButton" }}
      />
      <OnThisPage list={onThisPageList} />
    </div>
  );
}

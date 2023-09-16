"use client";
import { Button, Dialog, Typography } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import {
  typographyAlignTypeCodeString,
  typographyCodeString,
  typographyColorTypeCodeString,
  typographyImportCodeString,
  typographyVariantTypeCodeString,
} from "@/utils/codeString/typography";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import { useState } from "react";
import {
  apiBodyTypography,
  onThisPageTypography,
} from "@/utils/static/typography";

export default function Typographys() {
  const [openDialog, setOpenDialog] = useState<number | undefined>();

  function onOpenChange(open: boolean) {
    setOpenDialog(undefined);
  }
  return (
    <>
      <Dialog isOpen={openDialog === 1} onOpenChange={onOpenChange}>
        HELLO DIALOG
      </Dialog>
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-start justify-center flex-col gap-16">
          <ScrollSection className="flex flex-col gap-4" id="introdution">
            <Typography variant="h5">Dialog - React</Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              The Dialog component takes center stage in web application design,
              serving as a dynamic and immersive interaction element. It
              encapsulates the essence of user engagement, ensuring a seamless
              and engaging experience within the platform.
            </Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              Its primary function is to facilitate a wide range of user
              interactions, from simple notifications to complex multi-step
              processes. This versatility guarantees that users can effortlessly
              navigate and engage with the application&apos;s features and
              functionalities.
            </Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              Developers seeking flexibility will find the Dialog component to
              be an invaluable tool. As illustrated below, its seamless
              integration with React allows for a multitude of styles, sizes,
              and interactive behaviors.
            </Typography>
          </ScrollSection>
          <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
          <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
            <ScrollSection id="typography">
              <Component.Container title="Dialog">
                <Component.Preview codeString={typographyCodeString}>
                  <Button onClick={() => setOpenDialog(1)}>Open Dialog</Button>
                </Component.Preview>
              </Component.Container>
            </ScrollSection>

            <ScrollSection id="api">
              <div className=" flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <Typography variant="h6">API</Typography>
                  <Typography>
                    Embark on an exploration of our Dialog component&apos;s
                    intricacies. This section delves deep into the various
                    styles, customization options, and interactive properties
                    that guarantee your dialog elements are not only functional
                    but also seamlessly aligned with your application&apos;s
                    design philosophy. From simple pop-up notifications to
                    complex user interactions, our Dialog component has all your
                    dialog needs covered.
                  </Typography>
                </div>
                <ScrollSection>
                  <SyntaxHighlighter codeString={typographyImportCodeString} />
                </ScrollSection>
                <div>
                  <TableAPI body={apiBodyTypography} />
                </div>
              </div>
            </ScrollSection>
            <ScrollSection id="colorType">
              <Typography variant="h6">Color Type</Typography>
              <SyntaxHighlighter codeString={typographyColorTypeCodeString} />
            </ScrollSection>
            <ScrollSection id="variantType">
              <Typography variant="h6">Variant Type</Typography>
              <SyntaxHighlighter codeString={typographyVariantTypeCodeString} />
            </ScrollSection>
            <ScrollSection id="alignType">
              <Typography variant="h6">Align Type</Typography>
              <SyntaxHighlighter codeString={typographyAlignTypeCodeString} />
            </ScrollSection>
          </div>
        </div>
        <PreviousAndNext
          previous={{ label: "Spinner", path: "/docs/spinner" }}
          next={{ label: "Overview", path: "/docs/overview" }}
        />
        <OnThisPage list={onThisPageTypography} />
      </div>
    </>
  );
}

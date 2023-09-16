"use client";
import { Button, Drawer, Typography } from "@/utils/imagine-ui";
import Component from "@/components/ComponentPreview";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import { typographyColorCodeString } from "@/utils/codeString/typography";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import { useState } from "react";
import { apiBodyDrawer, onThisPageDrawer } from "@/utils/static/drawer";
import {
  drawerCodeString,
  drawerImportCodeString,
  drawerOrientationCodeString,
  drawerOrientationTypeCodeString,
  drawerOverlayPropsTypeCodeString,
  drawerResponsiveCodeString,
} from "@/utils/codeString/drawer";

export default function Drawers() {
  const [isOpenDrawer, setIsOpenDrawer] = useState<number | undefined>();

  return (
    <>
      <Drawer
        onOpenChange={() => setIsOpenDrawer(undefined)}
        isOpen={isOpenDrawer === 1}
        orientation="top"
      >
        <div className="w-full h-full flex items-center justify-center">
          Drawer Top
        </div>
      </Drawer>
      <Drawer
        onOpenChange={() => setIsOpenDrawer(undefined)}
        isOpen={isOpenDrawer === 2}
        orientation="bottom"
      >
        <div className="w-full h-full flex items-center justify-center">
          Drawer Bottom
        </div>
      </Drawer>{" "}
      <Drawer
        onOpenChange={() => setIsOpenDrawer(undefined)}
        isOpen={isOpenDrawer === 3}
        orientation="right"
      >
        <div className="w-full h-full flex items-center justify-center">
          Drawer Right
        </div>
      </Drawer>
      <Drawer
        onOpenChange={() => setIsOpenDrawer(undefined)}
        isOpen={isOpenDrawer === 4}
        orientation="left"
      >
        <div className="w-full h-full flex items-center justify-center">
          Drawer Left
        </div>
      </Drawer>
      <Drawer
        onOpenChange={() => setIsOpenDrawer(undefined)}
        isOpen={isOpenDrawer === 5}
        orientation="right"
        maxWidth="800px"
      >
        <div className="w-full h-full flex items-center justify-center">
          Responsive Drawer
        </div>
      </Drawer>
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-start justify-center flex-col gap-16">
          <ScrollSection className="flex flex-col gap-4" id="introdution">
            <Typography variant="h5">Drawer - React</Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              The Drawer component emerges as a pivotal element in web design,
              offering adaptability and streamlined functionality. It
              encapsulates the essence of user interaction, ensuring a seamless
              and intuitive experience while navigating the platform.
            </Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              Its primary function is to provide a versatile solution for
              organizing and accessing various sections and features. From main
              navigation menus to sub-menus and quick access panels, the Drawer
              component offers a wide range of options to enhance user
              exploration and interaction.
            </Typography>
            <Typography
              variant="sub-paragraph"
              className="text-zinc-800 dark:text-zinc-300"
            >
              Developers seeking flexibility will find the Drawer component to
              be a valuable asset. As demonstrated below, its integration with
              React enables a plethora of customization possibilities. Whether
              it&apos;s about styles, layouts, or interactive behaviors, this
              component&apos;s versatility ensures that every aspect of user
              interface design can be finely tuned to align with the overall
              user experience strategy.
            </Typography>
          </ScrollSection>
          <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
          <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
            <ScrollSection id="drawer">
              <Component.Container title="Drawer" className="min-h-[500px]">
                <Component.Preview codeString={drawerCodeString}>
                  <Button onClick={() => setIsOpenDrawer(1)}>
                    Open Drawer
                  </Button>
                </Component.Preview>
              </Component.Container>
            </ScrollSection>
            <ScrollSection id="orientation">
              <Component.Container
                title="Orientation"
                className="min-h-[500px]"
                description="Effortlessly switch the orientation of the Drawer to fit your screen layout seamlessly."
              >
                <Component.Preview codeString={drawerOrientationCodeString}>
                  <div className="flex flex-col items-center gap-4 last:">
                    <Button onClick={() => setIsOpenDrawer(1)}>
                      Open Drawer Top
                    </Button>
                    <div className="flex gap-4">
                      <Button onClick={() => setIsOpenDrawer(3)}>
                        Open Drawer Right
                      </Button>
                      <Button onClick={() => setIsOpenDrawer(4)}>
                        Open Drawer Left
                      </Button>
                    </div>
                    <Button onClick={() => setIsOpenDrawer(2)}>
                      Open Drawer Bottom
                    </Button>
                  </div>
                </Component.Preview>
              </Component.Container>
            </ScrollSection>
            <ScrollSection id="animation">
              <Component.Container
                title="Animation"
                description="Effortlessly change the animation of the Drawer to enhance the user experience."
              >
                <Component.Preview codeString={typographyColorCodeString}>
                  <Button onClick={() => setIsOpenDrawer(3)}>
                    No Animation
                  </Button>
                </Component.Preview>
              </Component.Container>
            </ScrollSection>
            <ScrollSection id="responsive">
              <Component.Container
                title="Responsive"
                className="min-h-[500px]"
                description="Customize the button hue for seamless UI integration."
              >
                <Component.Preview codeString={drawerResponsiveCodeString}>
                  <Button onClick={() => setIsOpenDrawer(5)}>
                    Responsive Drawer
                  </Button>
                </Component.Preview>
              </Component.Container>
            </ScrollSection>
            <ScrollSection id="api">
              <div className=" flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <Typography variant="h6">API</Typography>
                  <Typography>
                    Embark on an exploration of our Drawer component&apos;s API.
                    This section delves into the diverse configuration options,
                    animation settings, and customizable properties that empower
                    you to tailor the Drawer&apos;s behavior to perfectly match
                    your application&apos;s design and user interaction
                    requirements.
                  </Typography>
                </div>
                <ScrollSection>
                  <SyntaxHighlighter codeString={drawerImportCodeString} />
                </ScrollSection>
                <div>
                  <TableAPI body={apiBodyDrawer} />
                </div>
              </div>
            </ScrollSection>
            <ScrollSection id="orientationType">
              <Typography variant="h6">Orientation Type</Typography>
              <SyntaxHighlighter codeString={drawerOrientationTypeCodeString} />
            </ScrollSection>
            <ScrollSection id="overlayPropsType">
              <Typography variant="h6">Overlay Props Type</Typography>
              <SyntaxHighlighter
                codeString={drawerOverlayPropsTypeCodeString}
              />
            </ScrollSection>
          </div>
        </div>
        <PreviousAndNext
          previous={{ label: "Spinner", path: "/docs/spinner" }}
          next={{ label: "Overview", path: "/docs/overview" }}
        />
        <OnThisPage list={onThisPageDrawer} />
      </div>
    </>
  );
}

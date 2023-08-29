"use client";
import { Button, List, ListItem, Typography } from "@imagine-ui/react";
import {
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Component from "@/components/ComponentPreview";
import Link from "next/link";
import { SyntaxHighlighter } from "@/components/SyntaxHylighter";
import { TableAPI } from "@/components/TableApi";
import { ScrollSection } from "@/components/ScroolSection";
import { OnThisPage } from "@/components/OnThisPage";
import {
  listCodeString,
  listCustomStyleCodeString,
  listImportCodeString,
  listItemImportCodeString,
  listWithIconCodeString,
  listWithItemDisabledCodeString,
} from "@/utils/codeString/list";
import { useListPage } from "@/hooks/useListPage";
import { PreviousAndNext } from "@/components/PreviousAndNext";

export default function Lists() {
  const { apiListBody, apiListItemBody, currentSection, onThisPageList, refs } =
    useListPage();

  return (
    <div className="w-full flex flex-col items-center justify-start  gap-10 p-4">
      <div className="w-full flex items-start justify-center flex-col gap-16">
        <div className="flex flex-col gap-4" ref={refs.introdution}>
          <Typography variant="h5">List - React</Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            The LIST component is pivotal in web design. Serving as a versatile
            and organizational tool, it&apos;s designed to present information
            in a structured manner, ensuring intuitive and user-friendly
            navigation. For developers aiming for adaptability, an example below
            demonstrates the seamless integration of the LIST with Tailwind CSS
            and React. This depiction showcases a variety of styles, effects,
            and colors, ensuring it can be customized to cater to diverse design
            requirements.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            Its primary role is to provide users with a clear and efficient way
            to view and navigate information, be it through playlists, sidebars,
            or even content tabs.
          </Typography>
          <Typography
            variant="sub-paragraph"
            className="text-zinc-800 dark:text-zinc-300"
          >
            For developers in search of flexibility, an example below emphasizes
            the fluid integration of the LIST component with Tailwind CSS and
            React. This illustration offers a wide range of styles, effects, and
            colors, assuring its adaptability to different design demands.
          </Typography>
        </div>
        <hr className="bg-zinc-800 w-full dark:border-zinc-700" />
        <div className="flex items-center justify-center w-full flex-col gap-10 mb-28">
          <ScrollSection ref={refs.list}>
            <Component.Container
              title="List"
              className="h-[300px]"
              description="Preview and copy a ready-to-use code for a button with default settings, ensuring a swift integration into your project."
            >
              <Component.Preview codeString={listCodeString}>
                <List className="w-80">
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  <ListItem>Item 3</ListItem>
                </List>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.withIcon}>
            <Component.Container
              title="With Icon"
              className="h-[300px]"
              description="Switch between different button styles to match your design."
            >
              <Component.Preview codeString={listWithIconCodeString}>
                <List className="w-80">
                  <ListItem>
                    Notifications <BellIcon className="h-5 w-5 ml-auto " />
                  </ListItem>
                  <ListItem>
                    Trash
                    <TrashIcon className="h-5 w-5  ml-auto text-red-500" />
                  </ListItem>
                  <ListItem>
                    Logout
                    <ArrowRightOnRectangleIcon className="h-5 w-5  ml-auto text-blue-700" />
                  </ListItem>
                </List>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.disabled}>
            <Component.Container
              title="Disabled"
              className="h-[300px]"
              description="Customize the button hue for seamless UI integration."
            >
              <Component.Preview codeString={listWithItemDisabledCodeString}>
                <List className="w-80">
                  <ListItem>Disabled</ListItem>
                  <ListItem>Trash</ListItem>
                  <ListItem>Logout</ListItem>
                </List>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.customStyle}>
            <Component.Container
              title="Custom Style"
              className="h-[300px]"
              description="Toggle button's depth perception with a shadow effect."
            >
              <Component.Preview codeString={listCustomStyleCodeString}>
                <List className="w-80">
                  <ListItem
                    className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
                    ripple={false}
                  >
                    <UserIcon className="h-4 w-4 mr-2" />
                    Users
                  </ListItem>
                  <ListItem
                    className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
                    ripple={false}
                  >
                    <DevicePhoneMobileIcon className="h-4 w-4  mr-2" />
                    Products
                  </ListItem>
                  <ListItem
                    className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
                    ripple={false}
                  >
                    <ArchiveBoxIcon className="h-4 w-4  mr-2" />
                    Inventory
                  </ListItem>
                  <ListItem
                    className="hover:bg-transparent hover:text-green-500 rounded-none"
                    ripple={false}
                  >
                    <Cog6ToothIcon className="h-4 w-4  mr-2" />
                    Settings
                  </ListItem>
                </List>
              </Component.Preview>
            </Component.Container>
          </ScrollSection>
          <ScrollSection ref={refs.apiList}>
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API List</Typography>
                <Typography>
                  Dive into the detailed specifications of our List component.
                  This section outlines the properties you can adjust, including
                  layout and item types, to seamlessly integrate the list into
                  your application&apos;s design.
                </Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={listImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiListBody} />
              </div>
            </div>
          </ScrollSection>
          <ScrollSection ref={refs.apiListItem}>
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Typography variant="h6">API List Item</Typography>
              </div>
              <ScrollSection>
                <SyntaxHighlighter codeString={listItemImportCodeString} />
              </ScrollSection>
              <div>
                <TableAPI body={apiListItemBody} />
              </div>
            </div>
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
      <PreviousAndNext
        previous={{ label: "Input", path: "/docs/input" }}
        next={{ label: "Typography", path: "/docs/Typography" }}
      />
      <OnThisPage currentSection={currentSection} list={onThisPageList} />
    </div>
  );
}

"use client";
import {
  ArrowDownTrayIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import { Card, List, ListItem } from "@imagine-ui/react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <Card
        className="fixed  bg-gray-50 border-r   w-64 p-4 h-screen overflow-auto "
        shadow={false}
      >
        <div className="flex  flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ArrowDownTrayIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />{" "}
              Getting Started
            </div>
            <List className="text-sm text-black">
              <ListItem>Overview</ListItem>
              <ListItem>Installation</ListItem>
              <ListItem>License</ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4" />
          <div>
            <div className="flex items-center gap-2">
              <PaintBrushIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />
              Customization
            </div>
            <List className="text-sm">
              <ListItem>Theming</ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4" />
          <div>
            <div className="flex items-center gap-2 ">
              <CubeTransparentIcon className="w-8 h-8 text-green-500 p-2  rounded-md" />{" "}
              Components
            </div>
            <List className="text-sm text-black">
              <ListItem className="hover:text-green-500">Card</ListItem>
              <ListItem color="black">
                <Link href="">CheckBox</Link>
              </ListItem>
              <ListItem>
                <Link href="">Typography</Link>
              </ListItem>
              <ListItem>
                <Link href="/buttons">Buttons</Link>
              </ListItem>
              <ListItem>
                <Link href="/iconButton">IconButtons</Link>
              </ListItem>
              <ListItem>Input</ListItem>
              <ListItem>List</ListItem>
              <ListItem>ListItem</ListItem>
            </List>
          </div>
        </div>
      </Card>
    </>
  );
}

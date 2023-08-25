"use client";
import {
  ArrowDownTrayIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import { Card, List, ListItem, Typography } from "@imagine-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const router = useRouter();

  return (
    <>
      <Card
        className={` fixed bg-gray-50 z-[99] rounded-none border-r w-64 p-4 h-screen left-0 overflow-auto dark:bg-zinc-900 dark:border-zinc-700  transition-all ${
          isOpen ? "" : "max-lg:-left-64"
        }`}
        shadow={false}
      >
        <div className="flex  flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ArrowDownTrayIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />{" "}
              <Typography>Getting Started</Typography>
            </div>
            <List className="text-sm text-black">
              <ListItem onClick={() => router.push("/")}>Overview</ListItem>
              <Link href="/docs/installation">
                <ListItem>Installation</ListItem>
              </Link>
              <ListItem>License</ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4 dark:border-zinc-700" />
          <div>
            <div className="flex items-center gap-2">
              <PaintBrushIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />
              <Typography>Customization</Typography>
            </div>
            <List className="text-sm">
              <ListItem>Theming</ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4 dark:border-zinc-700" />
          <div>
            <div className="flex items-center gap-2 ">
              <CubeTransparentIcon className="w-8 h-8 text-green-500 p-2  rounded-md" />{" "}
              <Typography>Components</Typography>
            </div>
            <List className="text-sm text-black">
              <ListItem onClick={() => router.push("/docs/button")}>
                <Link href="/docs/button">Button</Link>
              </ListItem>
              <ListItem onClick={() => router.push("/docs/checkbox")}>
                <Link href="/docs/checkbox">Checkbox</Link>
              </ListItem>
              <ListItem onClick={() => router.push("/docs/iconButton")}>
                <Link href="/docs/input">Icon Button</Link>
              </ListItem>
              <ListItem onClick={() => router.push("/docs/input")}>
                <Link href="/docs/input">Input</Link>
              </ListItem>
              <ListItem onClick={() => router.push("/docs/list")}>
                <Link href="/docs/list">List</Link>
              </ListItem>
              <ListItem onClick={() => router.push("/docs/typography")}>
                <Link href="/docs/typography">Typography</Link>
              </ListItem>
            </List>
          </div>
        </div>
      </Card>
    </>
  );
}

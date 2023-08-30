"use client";
import { useSidebar } from "@/hooks/useSidebar";
import {
  ArrowDownTrayIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import { Card, List, ListItem, Typography } from "@imagine-ui/react";

interface SidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar({ isOpen, onOpenChange }: SidebarProps) {
  const { cardRef, router } = useSidebar({ onOpenChange });
  return (
    <>
      <Card
        className={`fixed bg-gray-50 z-[100] rounded-none border-r w-64 p-4 h-screen left-0 overflow-auto dark:bg-zinc-900 dark:border-zinc-700  transition-all ${
          isOpen ? "" : "max-lg:-left-64"
        }`}
        shadow={false}
        ref={cardRef}
      >
        <div className="flex  flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ArrowDownTrayIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />{" "}
              <Typography>Getting Started</Typography>
            </div>
            <List className="text-sm text-black" shadow={false}>
              <ListItem onClick={() => router.push("/docs/overview")}>
                Overview
              </ListItem>

              <ListItem onClick={() => router.push("/docs/installation")}>
                Installation
              </ListItem>

              <ListItem onClick={() => router.push("/docs/license")}>
                License
              </ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4 dark:border-zinc-700" />
          <div>
            <div className="flex items-center gap-2">
              <PaintBrushIcon className="w-8 h-8 text-green-500 p-2 rounded-md" />
              <Typography>Customization</Typography>
            </div>
            <List className="text-sm" shadow={false}>
              <ListItem onClick={() => router.push("/docs/theming")}>
                Theming
              </ListItem>
            </List>
          </div>
          <hr className="w-full -mt-4 dark:border-zinc-700" />
          <div>
            <div className="flex items-center gap-2 ">
              <CubeTransparentIcon className="w-8 h-8 text-green-500 p-2  rounded-md" />{" "}
              <Typography>Components</Typography>
            </div>
            <List className="text-sm text-black" shadow={false}>
              <ListItem onClick={() => router.push("/docs/button")}>
                Button
              </ListItem>
              <ListItem onClick={() => router.push("/docs/checkbox")}>
                Checkbox
              </ListItem>
              <ListItem onClick={() => router.push("/docs/iconButton")}>
                Icon Button
              </ListItem>
              <ListItem onClick={() => router.push("/docs/input")}>
                Input
              </ListItem>
              <ListItem onClick={() => router.push("/docs/list")}>
                List
              </ListItem>
              <ListItem onClick={() => router.push("/docs/typography")}>
                Typography
              </ListItem>
            </List>
          </div>
        </div>
      </Card>
    </>
  );
}

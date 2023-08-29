"use client";
import {
  Card,
  Dialog,
  Input,
  List,
  ListItem,
  Typography,
} from "@imagine-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const docs = [
  {
    to: "/",
    name: "Overview",
  },
  {
    to: "/docs/installation",
    name: "Installation",
  },
  {
    to: "/docs/license",
    name: "License",
  },
  {
    to: "/docs/theming",
    name: "Theming",
  },
];

const pages = [
  {
    to: "/docs/button",
    name: "Button",
  },
  {
    to: "/docs/checkbox",
    name: "Checkbox",
  },
  {
    to: "/docs/iconButton",
    name: "Icon Button",
  },
  {
    to: "/docs/input",
    name: "Input",
  },
  {
    to: "/docs/list",
    name: "List",
  },
  {
    to: "/docs/typography",
    name: "Typography",
  },
];

export function SearchDialog({ isOpen, onOpenChange }: SearchDialogProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const filteredPages = pages.filter((t) =>
    t.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredDocs = docs.filter((t) =>
    t.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  function handlePage(page: string) {
    onOpenChange(false);
    router.push(page);
  }

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onOpenChange={(e) => onOpenChange(e)}
        height="100%"
        maxHeight="500px"
      >
        <Card
          className="flex flex-col p-4 h-full max-h-[500px] w-full rounded-md dark:bg-zinc-900"
          tabIndex={-1}
        >
          <Input
            size="lg"
            placeholder="Search components..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <div className="max-h-[400px] overflow-auto">
            {filteredDocs.length > 0 && (
              <div className="mt-4">
                <Typography>Docs</Typography>
                <List className="overflow-auto" shadow={false}>
                  {filteredDocs.map((page) => {
                    return (
                      <ListItem
                        key={page.name}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handlePage(page.to)
                        }
                        onClick={() => handlePage(page.to)}
                        className="bg-zinc-100 h-14 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                      >
                        <Typography>{page.name}</Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            )}
            <hr className="mt-4 mb-4 dark:border-zinc-700" />
            {filteredPages.length > 0 && (
              <div>
                <Typography>Components</Typography>
                <List className="overflow-auto" shadow={false}>
                  {filteredPages.map((page) => {
                    return (
                      <ListItem
                        key={page.name}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handlePage(page.to)
                        }
                        onClick={() => handlePage(page.to)}
                        className="bg-zinc-100 h-14 dark:bg-zinc-800"
                      >
                        <Typography>{page.name}</Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            )}
          </div>
        </Card>
      </Dialog>
    </>
  );
}

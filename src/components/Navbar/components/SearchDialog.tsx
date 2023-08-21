import {
  Card,
  Dialog,
  Input,
  List,
  ListItem,
  Typography,
} from "@imagine-ui/react";
import Link from "next/link";
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
    to: "/docs/buttons",
    name: "Button",
  },
  {
    to: "/docs/iconButton",
    name: "Icon Button",
  },
  {
    to: "/docs/list",
    name: "List",
  },
  {
    to: "/docs/buttons",
    name: "Button",
  },
  {
    to: "/docs/iconButton",
    name: "Icon Button",
  },
  {
    to: "/docs/list",
    name: "List",
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
    <Dialog
      isOpen={isOpen}
      onOpenChange={(e) => onOpenChange(e)}
      height="100%"
      maxHeight="500px"
    >
      <Card className="p-4 h-full max-h-[500px] w-full rounded-md">
        <Input
          size="lg"
          placeholder="Search components..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div className="mt-4">
          <Typography>Docs</Typography>
          <List className="overflow-auto">
            {filteredDocs.map((page) => {
              return (
                <ListItem
                  key={page.name}
                  onKeyDown={(e) => e.key === "Enter" && handlePage(page.to)}
                >
                  <Typography>{page.name}</Typography>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div>
          <Typography>Components</Typography>
          <List className="overflow-auto">
            {filteredPages.map((page) => {
              return (
                <ListItem
                  key={page.name}
                  onKeyDown={(e) => e.key === "Enter" && handlePage(page.to)}
                >
                  <Typography>{page.name}</Typography>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Card>
    </Dialog>
  );
}

"use client";
import { OnThisPageList } from "@/components/OnThisPage";
import { onThisPageButton } from "@/utils/static/button";
import { onThisPageCheckbox } from "@/utils/static/checkbox";
import { onThisPageDrawer } from "@/utils/static/drawer";
import { onThisPageIconButton } from "@/utils/static/iconButton";
import { onThisPageInput } from "@/utils/static/input";
import { onThisPageList } from "@/utils/static/list";
import { onThisPageSpinner } from "@/utils/static/spinner";
import { onThisPageTextArea } from "@/utils/static/textarea";
import { onThisPageTypography } from "@/utils/static/typography";
import { DocumentIcon } from "@heroicons/react/20/solid";
import {
  Card,
  Dialog,
  Input,
  List,
  ListItem,
  Typography,
} from "@imagine-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchItem {
  id: string;
  label: string;
  path: string;
  refs: OnThisPageList;
}

interface SearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const pages: SearchItem[] = [
  {
    id: "1",
    label: "Button",
    path: "/docs/button",
    refs: onThisPageButton,
  },
  {
    id: "2",
    label: "Input",
    path: "/docs/input",
    refs: onThisPageInput,
  },
  {
    id: "3",
    label: "Drawer",
    path: "/docs/drawer",
    refs: onThisPageDrawer,
  },
  {
    id: "4",
    label: "TextArea",
    path: "/docs/textarea",
    refs: onThisPageTextArea,
  },
  {
    id: "5",
    label: "Typography",
    path: "/docs/typography",
    refs: onThisPageTypography,
  },
  {
    id: "6",
    label: "List",
    path: "/docs/list",
    refs: onThisPageList,
  },
  {
    id: "7",
    label: "Spinner",
    path: "/docs/spinner",
    refs: onThisPageSpinner,
  },
  {
    id: "8",
    label: "Icon Button",
    path: "/docs/iconButton",
    refs: onThisPageIconButton,
  },
  {
    id: "9",
    label: "Checkbox",
    path: "/docs/checkbox",
    refs: onThisPageCheckbox,
  },
];

export function SearchDialog({ isOpen, onOpenChange }: SearchDialogProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const MAX_TOTAL_ITEMS = 10;
  const [filteredPages, setFilterefpages] = useState<SearchItem[]>([]);

  useEffect(() => {
    const t: any[] = [];
    let totalItems = 0;

    for (const page of pages) {
      if (totalItems >= MAX_TOTAL_ITEMS) {
        break;
      }

      const filteredRefs = [];

      for (const ref of page.refs) {
        if (totalItems >= MAX_TOTAL_ITEMS) {
          break;
        }

        const combinedLabels = `${page.label} ${ref.label}`.toLowerCase();
        if (combinedLabels.includes(searchValue.toLowerCase())) {
          filteredRefs.push(ref);
          totalItems++;
        }
      }

      if (filteredRefs.length > 0) {
        t.push({ ...page, refs: filteredRefs });
      }
    }

    setFilterefpages(t);
  }, [searchValue]);

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
        maxWidth="700px"
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
          <div className=" overflow-auto h-full">
            {filteredPages.length > 0 && (
              <div className="h-full">
                <List className="overflow-auto h-full" shadow={false}>
                  {filteredPages.map((page) => {
                    return (
                      <>
                        <ListItem
                          key={page.id}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handlePage(page.path)
                          }
                          onClick={() => handlePage(page.path)}
                          className="gap-4 bg-zinc-100 min-h-[55px] dark:bg-zinc-800/30 border border-zinc-800 dark:hover:bg-zinc-700/30 dark:focus:bg-zinc-700/30"
                        >
                          <DocumentIcon className="w-6 h-6" />
                          <Typography>{page.label}</Typography>
                        </ListItem>
                        <List className="p-0 ml-3" shadow={false}>
                          {page.refs.map((ref) => {
                            return (
                              <ListItem
                                key={ref.name}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && handlePage(ref.href)
                                }
                                onClick={() => handlePage(ref.href)}
                                className="flex  gap-4 items-center bg-zinc-100 min-h-[55px] dark:bg-transparent  border-zinc-800 dark:hover:bg-zinc-700/30 dark:focus:bg-zinc-700/30 after:content-[''] after:absolute after:w-[25px] after:h-[2px] after:bg-zinc-400 before:content-[''] before:absolute before:w-[2px] before:h-[50px] before:bg-zinc-400"
                              >
                                <Typography variant="h6" className="ml-10">
                                  #
                                </Typography>
                                <Typography>{`${page.label} ${ref.label}`}</Typography>
                              </ListItem>
                            );
                          })}
                        </List>
                      </>
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

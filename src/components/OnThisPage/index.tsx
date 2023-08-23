import { List, Typography } from "@imagine-ui/react";
import { scrollTo } from "@/utils/scroolTo";
import { RefObject } from "react";
import { smoothScrollTo } from "@/utils/smoothScroolTo";
import { ListItem } from "../ListItem";

export type OnThisPageList = {
  ref: RefObject<HTMLElement>;
  name: string;
  label: string;
}[];

interface OnThisPageProps {
  currentSection: string | null;
  list: OnThisPageList;
}

export function OnThisPage({ currentSection, list }: OnThisPageProps) {
  return (
    <div className="w-40 flex flex-col gap-2 fixed right-0 max-md:hidden">
      <Typography bold variant="small">
        On This Page
      </Typography>
      <List className="p-0">
        {list.map((t) => {
          return (
            <ListItem
              key={t.name}
              onClick={() => scrollTo({ ref: t.ref, callback: smoothScrollTo })}
              style={{
                color: currentSection === t.name ? "#22c55e" : "",
              }}
            >
              {t.label}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

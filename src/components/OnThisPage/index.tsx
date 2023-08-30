"use client";
import { List, Typography } from "@/utils/imagine-ui";
import { ListItem } from "../ListItem";
import Link from "next/link";

export type OnThisPageList = {
  name: string;
  label: string;
  href: string;
}[];

interface OnThisPageProps {
  currentSection?: string | null;
  list: OnThisPageList;
}

export function OnThisPage({ currentSection, list }: OnThisPageProps) {
  return (
    <div className="w-40 flex flex-col gap-2 fixed right-0 max-md:hidden">
      <Typography bold variant="small">
        On This Page
      </Typography>
      <List className="p-0" shadow={false}>
        {list.map((t) => {
          return (
            <ListItem
              key={t.name}
              style={{
                color: currentSection === t.name ? "#22c55e" : "",
              }}
            >
              <Link href={t.href}>{t.label}</Link>{" "}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

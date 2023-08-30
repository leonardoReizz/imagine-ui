"use client";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { ListItem as ImagineListItem } from "@imagine-ui/react";

export function ListItem({
  children,
  onClick,
  style,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties | undefined;
}) {
  return (
    <ImagineListItem
      ripple={false}
      onClick={onClick}
      className="hover:bg-transparent hover:text-green-500 text-sm h-6"
      style={style}
    >
      {children}
    </ImagineListItem>
  );
}

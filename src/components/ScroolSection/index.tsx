import { HTMLAttributes } from "react";

export const ScrollSection = (props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`w-full scroll-mt-[100px] ${props.className}`}>
    {props.children}
  </div>
);

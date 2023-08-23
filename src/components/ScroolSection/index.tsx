import { HTMLAttributes, LegacyRef, forwardRef } from "react";

export const ScrollSection = forwardRef(
  (
    props: HTMLAttributes<HTMLDivElement>,
    ref: LegacyRef<HTMLDivElement> | undefined,
  ) => (
    <div ref={ref} {...props} className="w-full">
      {props.children}
    </div>
  ),
);
ScrollSection.displayName = "ScrollSection";

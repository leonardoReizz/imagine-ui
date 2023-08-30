import { Typography } from "@/utils/imagine-ui";
import { LegacyRef, ReactNode } from "react";

interface ContainerPreviewProps {
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  ref?: LegacyRef<HTMLDivElement>;
  id?: string;
}

export function ContainerPreview({
  children,
  className = "",
  id,
  containerClassName = "",
  title = "",
  description = "",
  ref,
}: ContainerPreviewProps) {
  return (
    <div
      id={id}
      className={` min-h-[200px] w-full flex flex-col gap-4 ${containerClassName} `}
      ref={ref}
    >
      <Typography variant="h6" align="left">
        {title}
      </Typography>
      <Typography
        variant="sub-paragraph"
        className="text-zinc-800 dark:text-zinc-300"
      >
        {description}
      </Typography>
      <div className={` ${className} w-full h-[220px]`}>{children}</div>
    </div>
  );
}

import { Typography } from "@imagine-ui/react";
import { LegacyRef, ReactNode } from "react";

interface ContainerPreviewProps {
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  ref?: LegacyRef<HTMLDivElement>;
}

export function ContainerPreview({
  children,
  className = "",
  containerClassName = "",
  title = "",
  description = "",
  ref,
}: ContainerPreviewProps) {
  return (
    <div
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

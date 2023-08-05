import { Button, Typography } from "@imagine-ui/react";
import { ComponentPreview } from "../ComponentPreview";
import { ReactNode } from "react";

interface ContentComponentPreviewProps {
  className?: string;
  children: ReactNode;
  codeString: string;
  title?: string;
  description?: string;
}

export function ContentComponentPreview({
  children,
  className = "",
  codeString,
  title = "",
  description = "",
}: ContentComponentPreviewProps) {
  return (
    <div className={` min-h-[200px] w-full flex flex-col gap-4 `}>
      <Typography variant="h6" align="left">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <div className={` ${className} h-[220px]`}>
        <ComponentPreview codeString={codeString}>
          <div className="flex gap-4 items-center justify-center w-full h-full ">
            {children}
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}

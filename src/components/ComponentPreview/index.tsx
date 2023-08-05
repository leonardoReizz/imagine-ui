import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import xonokai from "react-syntax-highlighter/dist/esm/styles/prism/xonokai";

import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { Button, Card } from "@imagine-ui/react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/20/solid";
import { ReactNode, useState } from "react";

// import Image from "next/image";
SyntaxHighlighter.registerLanguage("jsx", jsx);

interface ComponentPreviewProps {
  codeString: string;
  children: ReactNode;
}

export function ComponentPreview({
  children,
  codeString,
}: ComponentPreviewProps) {
  const [state, setState] = useState<number>(0);

  return (
    <Card className=" h-full rounded-md border">
      <div className="flex items-center justify-start  px-4 max-h-10 h-full w-full rounded-t-md border-b border-green-200  gap-4">
        <Button
          variant="transparent"
          color="green"
          className="px-4 normal-case "
          size="sm"
          onClick={() => setState(0)}
        >
          <EyeIcon className="w-4 h-5" />
          View
        </Button>
        <Button
          variant="transparent"
          color="green"
          className="px-4 normal-case "
          size="sm"
          onClick={() => setState(1)}
        >
          <CodeBracketIcon className="w-4 h-5" />
          JSX
        </Button>
      </div>
      {state === 0 && <div className="w-full h-full flex">{children}</div>}
      {state === 1 && (
        <SyntaxHighlighter
          language="jsx"
          style={prism}
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={true}
          customStyle={{
            background: "#fff",
            border: "none",
            borderRadius: 0,
            borderBottomRightRadius: "0.375rem",
            borderBottomLeftRadius: "0.375rem",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

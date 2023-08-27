import { Button, Card } from "@imagine-ui/react";
import {
  CodeBracketIcon,
  EyeIcon,
  ClipboardDocumentIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";
import { ReactNode, useCallback, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { SyntaxHighlighter } from "../SyntaxHylighter";

interface PreviewProps {
  codeString: string;
  children: ReactNode;
}

export function Preview({ children, codeString }: PreviewProps) {
  const [state, setState] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const currentTheme = useAppSelector(
    (state) => state.themeReducer.value.theme,
  );

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(codeString);

    setCopiedCode(true);
    setTimeout(() => {
      setCopiedCode(false);
    }, 2000);
  }, [codeString]);

  return (
    <div className="flex gap-4 items-start justify-center w-full h-full ">
      <Card
        className={`h-full rounded-md border p-0 w-full ${
          state === 1 || currentTheme === "dark"
            ? "bg-zinc-800 border-zinc-700"
            : "bg-white"
        }`}
      >
        <div
          className={`flex items-center justify-between w-full py-1 border-b ${
            currentTheme === "dark" || state === 1
              ? "border-zinc-700"
              : "border-zinc-200"
          }`}
        >
          <div className="flex items-center justify-start max-h-10 h-full rounded-t-md  gap-2 px-2">
            <Button
              variant="transparent"
              color={state === 1 ? "white" : "black"}
              className="px-4 normal-case "
              size="sm"
              onClick={() => setState(0)}
            >
              <EyeIcon className="w-4 h-5" />
              View
            </Button>
            <Button
              variant="transparent"
              color={state === 1 ? "white" : "black"}
              className="px-4 normal-case "
              size="sm"
              onClick={() => setState(1)}
            >
              <CodeBracketIcon className="w-4 h-5" />
              JSX
            </Button>
          </div>
          <div className="flex items-center justify-start max-h-10 h-full  rounded-t-md  gap-2 px-2">
            <Button
              variant="transparent"
              color={copiedCode ? "green" : state === 1 ? "white" : "black"}
              className="px-4 normal-case "
              size="sm"
              onClick={handleCopyCode}
            >
              {!copiedCode && <ClipboardDocumentIcon className="w-4 h-5" />}
              {copiedCode && <CheckBadgeIcon className="w-4 h-5" />}
              Copy Code
            </Button>
          </div>
        </div>

        {state === 0 && (
          <div className="flex items-center justify-start h-full overflow-auto">
            <div className="min-w-[600px] w-full">
              <div className="w-full h-full flex items-center justify-center gap-4 ">
                {children}
              </div>
            </div>
          </div>
        )}
        {state === 1 && (
          <div className="flex items-start justify-start  h-full overflow-auto ">
            <SyntaxHighlighter codeString={codeString} />
          </div>
        )}
      </Card>
    </div>
  );
}

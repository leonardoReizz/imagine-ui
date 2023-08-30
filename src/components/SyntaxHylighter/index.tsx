import { Prism as SyntaxHighlighterr } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

interface SyntaxHighlighterProps {
  codeString: string;
}

export function SyntaxHighlighter({ codeString }: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighterr
      language="jsx"
      style={prism}
      wrapLines={true}
      showLineNumbers={true}
      customStyle={{
        background: "#27272a",
        border: "none",
        borderRadius: 8,
        borderBottomRightRadius: "0.375rem",
        borderBottomLeftRadius: "0.375rem",
      }}
    >
      {codeString}
    </SyntaxHighlighterr>
  );
}

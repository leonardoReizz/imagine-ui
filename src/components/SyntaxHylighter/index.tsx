import { PrismLight } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

PrismLight.registerLanguage("jsx", jsx);

interface SyntaxHighlighterProps {
  codeString: string;
}

export function SyntaxHighlighter({ codeString }: SyntaxHighlighterProps) {
  return (
    <PrismLight
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
    </PrismLight>
  );
}

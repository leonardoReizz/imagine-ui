import { useAppSelector } from "@/redux/store";
import { PrismLight } from "react-syntax-highlighter";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

PrismLight.registerLanguage("jsx", jsx);

interface SyntaxHighlighterProps {
  codeString: string;
}

export function SyntaxHighlighter({ codeString }: SyntaxHighlighterProps) {
  const currentTheme = useAppSelector(
    (props) => props.themeReducer.value.theme,
  );
  return (
    <PrismLight
      language="jsx"
      style={prism}
      wrapLines={true}
      wrapLongLines={true}
      showLineNumbers={true}
      customStyle={{
        background: currentTheme === "light" ? "#fff" : "#0010",
        border: "none",
        borderRadius: 0,
        borderBottomRightRadius: "0.375rem",
        borderBottomLeftRadius: "0.375rem",
      }}
    >
      {codeString}
    </PrismLight>
  );
}

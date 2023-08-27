declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/languages/prism/jsx";
declare module "react-syntax-highlighter/dist/esm/styles/prism/prism";
declare module "react-syntax-highlighter/dist/esm/styles/prism/okaidia";

type RefsType = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

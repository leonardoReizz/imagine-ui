<div align="center">
    <h1>✨Imagine-UI </h1>
     <p>
      <strong>TailwindCSS Components Library</strong>
    </p>
    
  <a href="https://imagine-ui.com" target="_blank">
    Imagine UI - Page
  </a>
</div>

<br />
<br />

### Getting Started

Learn how to leverage the @imagine-ui/react components to swiftly craft elegant and versatile pages with the assistance of Tailwind CSS.

@imagine-ui/react collaborates seamlessly with Tailwind CSS classes, requiring prior installation of Tailwind CSS in your project. For installation instructions, please refer to the 
<a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Tailwind CSS Installation Guide.</a>

<br />

1. Install `@imagine-ui/react`.

```bash
npm i @imagine-ui/react
```

<br />

2. Following the installation of @imagine-ui/react, configure Tailwind CSS in your project:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@imagine-ui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
};

```

<br />

3. @imagine-ui/react is equipped with a theme provider that sets the default theme/styles for components, or allows the provision of custom theme/styles to components. Encase your entire application with the ThemeProvider from @imagine-ui/react.

```jsx
import { ThemeProvider } from "@imagine-ui/react";
 
export default function MyApp() {
  const theme = "light";

  return (
    <ThemeProvider theme={{ initialTheme: theme }}>
      <App />
    </ThemeProvider>
  );
}
```

<br />

4. You've done it! You're now prepared to utilize @material-tailwind/react.

```jsx
import { Button } from "@imagine-ui/react";

export default function Example() {
  return <Button>Button</Button>;
}
```

<br />

For further details, please consult the <a href="https://imagine-ui.com/docs/installation" target="_blank">full installation</a> page on the Imagine UI website. This example is tailored to Create React App, as mentioned previously.

export const nextTailwindConfigCodeString = ` 
	/** @type {import('tailwindcss').Config} */
	module.exports = {
	content: [
		"./node_modules/@imagine-ui/react/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {},
	plugins: [],
	};

`;

export const nextInstallPnpmCodeString = `pnpm i @imagine-ui/react`;
export const nextInstallYarnCodeString = `yarn add @imagine-ui/react`;
export const nextInstallNpmCodeString = `npm i @imagine-ui/react`;

export const nextImportButtonCodeString = `"use client";
import { Typography, Button, ThemeProvider, Card } from "@imagine-ui/react";

export { Typography, Button, ThemeProvider, Card  }; `;

export const nextImportExampleButtonCodeString = `// Invalid - this approach isn't compatible with server components
import { Button } from "@imagine-ui/react";
 
// Valid - This approach seamlessly works with server components
import { Button } from "path/to/the/export";`;

export const nextThemeProviderCodeString = `import { ThemeProvider } from "path/to/the/export";
 
export default function MyApp({ Component, pageProps }) {
	const currentTheme = "light";

  return (
		<ThemeProvider theme={{ current: currentTheme }}>
			<App {...pageProps} />
		</ThemeProvider>
	);
}
`;

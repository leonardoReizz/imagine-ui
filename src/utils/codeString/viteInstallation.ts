export const viteTailwindConfigCodeString = ` 
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

`;

export const viteInstallPnpmCodeString = `pnpm i @imagine-ui/react`;
export const viteInstallYarnCodeString = `yarn add @imagine-ui/react`;
export const viteInstallNpmCodeString = `npm i @imagine-ui/react`;

export const viteImportButtonCodeString = `"use client";
import { ThemeProvider, Button } from "@imagine-ui/react";`;

export const viteThemeProviderCodeString = `import { ThemeProvider } from "@imagine-ui/react";
 
export default function MyApp({ Component, pageProps }) {
	const currentTheme = "light";

  return (
		<ThemeProvider theme={{ current: currentTheme }}>
			<App {...pageProps} />
		</ThemeProvider>
	);
}
`;

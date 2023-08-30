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
import { ThemeProvider, Button } from "@imagine-ui/react";`;

export const nextThemeProviderCodeString = `import { ThemeProvider } from "@imagine-ui/react";
 
export default function MyApp({ Component, pageProps }) {
	const currentTheme = "light";

  return (
		<ThemeProvider theme={{ current: currentTheme }}>
			<App {...pageProps} />
		</ThemeProvider>
	);
}
`;

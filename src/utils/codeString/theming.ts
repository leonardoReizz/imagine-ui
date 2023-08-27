export const themeProviderCodeString = `import { ThemeProvider, ThemeType } from "@imagine-ui/react";
 
export default function MyApp({ Component, pageProps }) {
 	const [theme, setTheme] = useState<ThemeType>("light");

	return (
		<ThemeProvider theme={{ current: currentTheme }}>
			<App {...pageProps} />
		</ThemeProvider>
	);
}
`;

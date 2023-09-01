import "./globals.css";
import { Inter } from "next/font/google";
import { App } from "./app";
import { ThemeProvider } from "@/utils/imagine-ui";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Imagine UI - Component Library With React </title>
        <meta
          name="google-site-verification"
          content="ZKMPzmc_fkTcJscBQkjxMhDCvx4cshM9DibFYyIwqV4"
        />
        <link rel="icon" href="/logo-no-background.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} dark:bg-zinc-900`}>
        <ThemeProvider theme={{ initialTheme: "light" }}>
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}

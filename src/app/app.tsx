import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAppSelector } from "@/redux/store";
import { List, ThemeProvider, Typography } from "@imagine-ui/react";
import { ReactNode, useCallback, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListItem } from "@/components/ListItem";

interface AppProps {
  children: ReactNode;
}

export function App({ children }: AppProps) {
  const currentTheme = useAppSelector(
    (state) => state.themeReducer.value.theme,
  );

  const currentPathname = usePathname();

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const onOpenChangeSidebar = useCallback((open: boolean) => {
    setIsOpenSidebar(open);
  }, []);
  return (
    <ThemeProvider theme={{ current: currentTheme }}>
      <div>
        <Navbar onOpenChange={onOpenChangeSidebar} isOpen={isOpenSidebar} />
        {currentPathname !== "/" && <Sidebar isOpen={isOpenSidebar} />}
        {currentPathname === "/" && (
          <div className=" w-full flex items-center justify-center gap-2 relative">
            <div className="max-w-7xl">{children}</div>
          </div>
        )}
        {currentPathname !== "/" && (
          <div className="left-64 max-lg:left-0 max-lg:w-[calc(100%-12rem)] max-md:w-full w-[calc(100%-28rem)] flex items-center justify-center gap-2 relative">
            <div className="w-full max-w-3xl">{children}</div>
          </div>
        )}
      </div>
      <footer
        className={`z-[999999999] flex flex-col items-center justify-center h-[300px] mt-20 p-4 gap-4`}
      >
        <div
          className={` relative w-full flex flex-col items-center justify-center lg:flex-row left-14  ${
            currentPathname === "/" ? "max-w-7xl" : "w-[calc(100%-30rem)]"
          }`}
        >
          <div>
            <Typography variant="h6">Imagine UI</Typography>
            <Typography>
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
          </div>
          <div className="flex w-full justify-end max-md:flex-col max-md:gap-4 b">
            <div className="w-40 flex flex-col gap-2">
              <Typography bold variant="small">
                Help and Support
              </Typography>
              <List className="p-0 -ml-2">
                <ListItem>Contact Us</ListItem>
              </List>
            </div>
            <div className="w-40 flex flex-col gap-2">
              <Typography bold variant="small">
                Resources
              </Typography>
              <List className="p-0 -ml-2">
                <Link href="">
                  <ListItem>Documentation</ListItem>
                </Link>
                <Link href="https://discord.gg/y2UAthfdkb">
                  <ListItem>Discord</ListItem>
                </Link>
                <Link href="https://github.com/leonardoReizz/imagine-ui">
                  <ListItem>Git Hub</ListItem>
                </Link>
              </List>
            </div>
            <div className="w-40 flex flex-col gap-2">
              <Typography bold variant="small">
                Technologies
              </Typography>
              <List className="p-0 -ml-2">
                <Link href="https://react.dev">
                  <ListItem>React</ListItem>
                </Link>
              </List>
            </div>
          </div>
        </div>
        <hr
          className={`bg-zinc-700 w-full ml-12 ${
            currentPathname !== "/" ? "max-w-5xl" : "max-w-7xl"
          }`}
        />
        <div>
          <Typography>
            Copyright © 2023 Imagine UI by{" "}
            <Link
              href="https://leonardo-reis.com"
              target="_blank"
              className="text-green-500 hover:underline"
            >
              Leonardo Reis.
            </Link>
          </Typography>
        </div>
      </footer>
    </ThemeProvider>
  );
}

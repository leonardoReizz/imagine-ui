import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { List, Typography } from "@/utils/imagine-ui";
import { ReactNode } from "react";
import Link from "next/link";
import { ListItem } from "@/components/ListItem";

interface AppProps {
  children: ReactNode;
}

export function App({ children }: AppProps) {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <div className="left-64 max-lg:left-0 max-lg:w-[calc(100%-12rem)] max-md:w-full w-[calc(100%-28rem)] flex flex-col items-center justify-center gap-2 relative">
          <div className="w-full max-w-4xl p-4">{children}</div>
          <footer
            className={`z-[999999999] max-w-5xl flex flex-col items-center justify-center h-[200px] mt-[200px] px-10 py-4 gap-4 mb-2`}
          >
            <div
              className={`relative w-full flex  items-center justify-center  gap-4  max-md:flex-col ${"w-[calc(100vw-30rem)] max-lg:w-full "}`}
            >
              <div className="flex w-full flex-col">
                <div className="flex max-md:flex-col">
                  <div className="w-full">
                    <Typography variant="h6">Imagine UI</Typography>
                    <Typography>
                      User-friendly React components designed to seamlessly
                      integrate with Tailwind CSS.
                    </Typography>
                  </div>
                  <div className="flex w-full justify-end max-md:flex-col max-md:gap-4">
                    <div className="w-40 flex flex-col gap-2">
                      <Typography bold variant="small">
                        Help and Support
                      </Typography>
                      <List className="p-0 -ml-2 w-fit" shadow={false}>
                        <ListItem>Contact Us</ListItem>
                      </List>
                    </div>
                    <div className="w-40 flex flex-col gap-2">
                      <Typography bold variant="small">
                        Resources
                      </Typography>
                      <List className="p-0 -ml-2 w-fit" shadow={false}>
                        <Link href="/docs/overview">
                          <ListItem>Documentation</ListItem>
                        </Link>

                        <Link
                          href="https://discord.gg/y2UAthfdkb"
                          target="_blank"
                        >
                          <ListItem>Discord</ListItem>
                        </Link>
                        <Link
                          href="https://github.com/leonardoReizz/imagine-ui"
                          target="_blank"
                        >
                          <ListItem>Git Hub</ListItem>
                        </Link>
                      </List>
                    </div>
                    <div className="w-32 flex flex-col gap-2">
                      <Typography bold variant="small">
                        Technologies
                      </Typography>
                      <List className="p-0 -ml-2 w-fit" shadow={false}>
                        <Link href="https://react.dev" target="_blank">
                          <ListItem>React</ListItem>
                        </Link>
                      </List>
                    </div>
                  </div>
                </div>
                <hr
                  className={`dark:border-zinc-700 w-full ml-auto  mt-4 mb-4`}
                />
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
}

"use client";
import { AiOutlineGithub } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  IconButton,
  Typography,
  useThemeProvider,
} from "@/utils/imagine-ui";

import { MagnifyingGlassIcon, SunIcon } from "@heroicons/react/20/solid";
import { SearchDialog } from "./components/SearchDialog";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const { theme, changeTheme } = useThemeProvider();

  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        setIsOpenSearch(!isOpenSearch);
      }
      if (event.key === "Escape") {
        setIsOpenSearch(false);
      }
    },
    [isOpenSearch],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const cTheme = JSON.parse(
      Cookies.get("theme") || '{"theme": "light"}',
    ).theme;

    if (cTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    changeTheme(cTheme);
  }, []);

  const handleTheme = useCallback(
    (current?: boolean) => {
      let newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";

      if (current) {
        newTheme = JSON.parse(Cookies.get("theme") || "{}")?.theme;
      }

      Cookies.set("theme", JSON.stringify({ theme: newTheme }));
      changeTheme(newTheme);
    },
    [changeTheme, theme],
  );

  return (
    <>
      <SearchDialog
        isOpen={isOpenSearch}
        onOpenChange={(e) => setIsOpenSearch(e)}
      />
      <Card
        className={`sticky flex-row z-10 top-0 h-14 px-4 w-full rounded-none justify-between backdrop-blur-2xl   ${
          theme === "dark" ? "bg-zinc-700/50" : "bg-zinc-300/50"
        }`}
        shadow={false}
      >
        <div className="w-full flex items-center gap-4">
          <Link href="/" className="max-lg:ml-10 flex gap-4">
            <Image
              alt=""
              src="/logo-no-background.svg"
              height={30}
              width={25}
            />
            <Typography className="max-md:hidden"> Imagine UI</Typography>
          </Link>
        </div>

        <ul className="flex items-center gap-4 w-[400px]">
          <Button
            variant="transparent"
            color="black"
            size="sm"
            className="w-[200px] justify-start px-4  border border-gray-300 dark:border-zinc-700"
            onClick={() => setIsOpenSearch(true)}
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-green-500" />

            <Typography variant="small">Search</Typography>
          </Button>
          <li>
            <IconButton
              color={theme === "light" ? "green" : "blue"}
              variant="text"
              shadow={false}
              ripple={false}
              onClick={() => handleTheme()}
            >
              <SunIcon className="w-5 h-5" />
            </IconButton>
          </li>
          <li>
            <IconButton
              color="green"
              variant="text"
              shadow={false}
              ripple={false}
            >
              <Link
                href="https://github.com/leonardoReizz/imagine-ui"
                target="_blank"
              >
                <AiOutlineGithub className="w-5 h-5" />
              </Link>
            </IconButton>
          </li>
        </ul>
      </Card>
    </>
  );
}

export default Navbar;

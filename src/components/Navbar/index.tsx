"use client";
import { AiOutlineGithub } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, IconButton, Typography } from "@imagine-ui/react";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { SearchDialog } from "./components/SearchDialog";
import Cookies from "js-cookie";
import Link from "next/link";
import { useThemeContext } from "@/hooks/useThemeContext";

interface NavbarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

function Navbar({ isOpen, onOpenChange }: NavbarProps) {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

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

  const { theme, changeTheme } = useThemeContext();

  const handleTheme = useCallback(
    (current?: boolean) => {
      let newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";

      if (current) {
        newTheme = JSON.parse(Cookies.get("theme") || "{}")?.theme;
      }

      Cookies.set("theme", JSON.stringify({ theme: newTheme }));
      changeTheme(newTheme);
    },
    [theme],
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
          {isOpen && (
            <IconButton
              variant="text"
              onClick={() => onOpenChange(false)}
              className="max-lg:opacity-100 opacity-0 "
            >
              <Bars3Icon className="w-4 h-4" />
            </IconButton>
          )}
          {!isOpen && (
            <IconButton
              variant="text"
              onClick={() => onOpenChange(true)}
              className="max-lg:opacity-100 opacity-0 "
            >
              <Bars3Icon className="w-4 h-4" />
            </IconButton>
          )}
          <Typography variant="h6" align="left" className="normal-case">
            <Link href="/" className="max-md:opacity-0 max-md:hidden">
              Imagine UI
            </Link>
            <Link href="/" className="md:opacity-100  md:hidden">
              IUI
            </Link>
          </Typography>
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

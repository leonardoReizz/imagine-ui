"use client";
import { AiOutlineGithub } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, IconButton, Typography } from "@imagine-ui/react";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { AppDispath, useAppSelector } from "@/redux/store";
import { changeTheme } from "@/redux/features/theme-slice";
import { SearchDialog } from "./components/SearchDialog";
import Cookies from "js-cookie";

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
    },
    [isOpenSearch],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  const dispatch = useDispatch<AppDispath>();
  const currentTheme = useAppSelector(
    (state) => state.themeReducer.value.theme,
  );

  const handleTheme = useCallback(() => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    Cookies.set("theme", JSON.stringify({ theme: newTheme }));
    dispatch(changeTheme(newTheme));
  }, [currentTheme, dispatch]);

  return (
    <>
      <SearchDialog
        isOpen={isOpenSearch}
        onOpenChange={(e) => setIsOpenSearch(e)}
      />
      <Card
        className={`sticky flex-row z-10 top-0 h-14 w-full rounded-none justify-between backdrop-blur-2xl   ${
          currentTheme === "dark" ? "bg-zinc-700/50" : "bg-zinc-300/50"
        }`}
        shadow={false}
      >
        <div className="w-full p-4 flex items-center gap-4">
          <IconButton
            variant="text"
            onClick={() => onOpenChange(!isOpen)}
            className="max-lg:opacity-100 opacity-0 "
          >
            <Bars3Icon className="w-4 h-4" />
          </IconButton>
          <Typography variant="h6" align="left" className="normal-case">
            Imagine UI
          </Typography>
        </div>

        <ul className="flex items-center gap-4 w-[400px]">
          <Button
            variant="transparent"
            color="black"
            size="sm"
            className="w-[200px] justify-start px-4  border border-gray-300"
            onClick={() => setIsOpenSearch(true)}
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-green-500" />

            <Typography variant="small">Search</Typography>
          </Button>
          <li>
            <IconButton
              color={currentTheme === "light" ? "green" : "blue"}
              variant="text"
              shadow={false}
              ripple={false}
              onClick={handleTheme}
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
              <AiOutlineGithub className="w-5 h-5" />
            </IconButton>
          </li>
        </ul>
      </Card>
    </>
  );
}

export default Navbar;

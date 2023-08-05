import { AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";
import {
  Button,
  Card,
  Dialog,
  IconButton,
  Input,
  Typography,
} from "@imagine-ui/react";

import { MagnifyingGlassIcon, SunIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  return (
    <>
      <Dialog isOpen={isOpenSearch} onOpenChange={(e) => setIsOpenSearch(e)}>
        <Card className="p-4 h-full w-full rounded-md">
          <Input placeholder="Search components..." size="lg" />
        </Card>
      </Dialog>
      <Card
        className="sticky flex-row z-10 top-0 h-14 w-full justify-between backdrop-blur-2xl bg-white/70 border-b"
        shadow={false}
      >
        <div className="w-full p-4">
          <Typography variant="h6" align="left" className="normal-case">
            Imagine UI
          </Typography>
        </div>

        <ul className="flex items-center gap-4 w-[400px]">
          <Button
            variant="outlined"
            size="sm"
            className="w-[200px] justify-start px-4 hover:bg-gray-200 border-gray-300 hover:border-gray-300"
            onClick={() => setIsOpenSearch(true)}
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-green-500" />

            <Typography variant="small">Search</Typography>
          </Button>
          <li>
            <IconButton
              color="green"
              variant="text"
              shadow={false}
              ripple={false}
            >
              <SunIcon className="w-5 h-5 00" />
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

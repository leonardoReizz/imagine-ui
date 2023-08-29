"use client";
import {
  Button,
  Card,
  IconButton,
  List,
  ListItem as ImagineListItem,
  Typography,
} from "@imagine-ui/react";
import { useRouter } from "next/navigation";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col  items-center justify-start p-4 gap-32">
        <Card
          className="w-full h-full min-h-[600px] max-h-[1000px] flex-col items-center  justify-center gap-4 p-4 lg:flex-row"
          color="transparent"
          shadow={false}
        >
          <div className="flex flex-col gap-6 flex-1">
            <Typography variant="h3" className="max-md:text-4xl">
              Build modern web applications with Flowbite React
            </Typography>
            <Typography>
              Flowbite React is an open-source UI component library built on top
              of Tailwind CSS with React components and based on the Flowbite
              Design System
            </Typography>
            <div className="max-md:w-full max-md:mb-10">
              <Button
                color="green"
                onClick={() => router.push("/docs/overview")}
                className="max-md:ml-auto max-md:mr-auto"
              >
                Get Started <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 h-full w-full p-4 flex-1 justify-start">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4">
                <Button color="black">SignIn</Button>
                <IconButton>
                  <Cog6ToothIcon className="h-4 w-4" />
                </IconButton>
              </div>
              <div>
                <Button color="red">
                  Notification <BellAlertIcon className="h-4 w-4" />
                </Button>
              </div>
              <List className="w-full">
                <ImagineListItem>Item 1</ImagineListItem>
                <ImagineListItem>Item 2</ImagineListItem>
                <ImagineListItem>Item 3</ImagineListItem>
                <ImagineListItem disabled>Item 4</ImagineListItem>
                <ImagineListItem disabled>Item 5</ImagineListItem>
              </List>
            </div>
            {/* <div className="flex flex-col gap-4 w-full min-h-[400px] h-full">
              <Input label="Email" />
              <Input placeholder="Password" type="password" />
            </div> */}
          </div>
        </Card>
        <Card
          className="flex flex-col gap-20 w-full h-full"
          color="transparent"
          shadow={false}
        >
          <div className="flex flex-col items-center gap-2">
            <Typography variant="h6">
              Integrations with the Tailwind CSS Framework
            </Typography>
            <Typography>
              Boost your workflow by integrating your preferred tools
              effortlessly using Material Tailwind.
            </Typography>
          </div>
          <div className="flex w-full gap-4 justify-center items-center flex-wrap ">
            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 flex-[1_1_250px]"
              color="transparent"
            >
              <Typography variant="h6" bold>
                React
              </Typography>
              <Image alt="" src="react-icon.svg" width={60} height={60} />
            </Card>

            <Card
              className="border  dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 flex-[1_1_250px]"
              color="transparent"
            >
              <Typography variant="h6" bold>
                Create React App
              </Typography>
              <Image
                alt=""
                src="create-react-app-icon.svg"
                width={60}
                height={60}
              />
            </Card>

            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 flex-[1_1_250px]"
              color="transparent"
            >
              <Typography variant="h6" bold>
                Vite
              </Typography>
              <Image alt="" src="vite-icon.svg" width={60} height={60} />
            </Card>

            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 flex-[1_1_250px]"
              color="transparent"
            >
              <Typography variant="h6" bold>
                Next.js
              </Typography>
              <Image alt="" src="next-icon.svg" width={60} height={60} />
            </Card>
          </div>
        </Card>
        <Card
          className="w-full flex flex-col gap-10"
          shadow={false}
          color="transparent"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Typography variant="h5">Join our community</Typography>
            <Typography align="center" className="max-w-[800px]">
              Visit our communities to see the latest updates and news regarding
              our product. Whether you have questions, ideas to contribute, or
              simply want to connect with like-minded individuals, our
              communities provide a vibrant and supportive environment for your.
            </Typography>
          </div>
          <div className="flex justify-center  w-full gap-4 flex-wrap">
            <Link
              href="https://github.com/leonardoReizz/imagine-ui"
              target="_blank"
              className="w-full max-w-[250px] h-[175px] flex-[1_1_250px]"
            >
              <Card
                className="border items-center justify-center gap-4 w-full h-full hover:shadow-lg peer p-4"
                color="transparent"
              >
                <Typography variant="h6" bold>
                  Git Hub
                </Typography>
                <Image alt="" src="github-icon.svg" width={60} height={60} />
              </Card>
            </Link>
            <Link
              href="https://discord.gg/y2UAthfdkb"
              target="_blank"
              className="w-full max-w-[250px] h-[175px] flex-[1_1_250px]"
            >
              <Card
                className="border items-center justify-center gap-4 w-full h-full hover:shadow-lg peer p-4"
                color="transparent"
              >
                <Typography variant="h6" bold>
                  Discord
                </Typography>
                <Image alt="" src="discord-icon.svg" width={60} height={60} />
              </Card>
            </Link>
          </div>
        </Card>
      </main>
    </>
  );
}

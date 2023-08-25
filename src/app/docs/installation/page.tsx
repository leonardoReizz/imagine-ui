"use client";

import { Card, Typography } from "@imagine-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Installation() {
  return (
    <div className="flex flex-col gap-16 mt-10">
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Get Started with Material Tailwind</Typography>
        <Typography variant="sub-paragraph">
          Material Tailwind is a free and open-source components library for
          ReactJS and Tailwind CSS inspired by Material Design.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Installation</Typography>
        <Typography variant="sub-paragraph">
          Learn how to use @material-tailwind/react components from this
          documentation to quickly and easily create elegant and flexible pages
          using Tailwind CSS.
        </Typography>
        <Typography>
          @material-tailwind/react is working with Tailwind CSS classes and you
          need to have Tailwind CSS installed on your project - Tailwind CSS
          Installation Guide.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Frameworks Integration</Typography>
        <Typography variant="sub-paragraph">
          Framework-specific guides that cover our recommended approach to
          installing @material-tailwind/react in a number of popular
          environments. Select your preferred framework from the list below and
          follow the instructions.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Typescript</Typography>
        <Typography variant="sub-paragraph">
          @material-tailwind/react is a TypeScript based components library and
          you can easily use it in your TypeScript based projects.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Frameworks Integration</Typography>
        <Typography variant="sub-paragraph">
          Framework-specific guides that cover our recommended approach to
          installing @material-tailwind/react in a number of popular
          environments. Select your preferred framework from the list below and
          follow the instructions.
          https://tailwindcss.com/docs/installation/framework-guides?ref=material-tailwind
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Typography variant="h6">
            Integrations with the Tailwind CSS Framework
          </Typography>
          <Typography variant="sub-paragraph">
            Boost your workflow by integrating your preferred tools effortlessly
            using Material Tailwind.
          </Typography>
        </div>
        <div className="flex w-full gap-4 justify-center items-center flex-wrap ">
          <Link href="/docs/installation/cra" className="flex-[1_1_150px]">
            <Card
              className="border  dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 "
              color="transparent"
            >
              <Image
                alt=""
                src="/create-react-app-icon.svg"
                width={60}
                height={60}
              />
            </Card>
          </Link>
          <Link href="/docs/installation/vite" className="flex-[1_1_150px]">
            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 "
              color="transparent"
            >
              <Image alt="" src="/vite-icon.svg" width={60} height={60} />
            </Card>
          </Link>
          <Link href="/docs/installation/next" className="flex-[1_1_150px]">
            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 "
              color="transparent"
            >
              <Image alt="" src="/next-icon.svg" width={60} height={60} />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

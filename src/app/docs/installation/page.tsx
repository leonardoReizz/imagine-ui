"use client";
import { PreviousAndNext } from "@/components/PreviousAndNext";
import { Card, Typography } from "@imagine-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Installation() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-4">
        <Typography variant="h6">
          Commencing with Imagine UI and Tailwin
        </Typography>
        <Typography variant="sub-paragraph">
          Imagine UI stands as a proprietary compilation of components tailored
          for ReactJS and Tailwind CSS, meticulously crafted to offer
          streamlined solutions.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Setup</Typography>
        <Typography variant="sub-paragraph">
          Delve into the know-how of harnessing the potential of
          @imagine-ui/react components by perusing this comprehensive
          documentation, facilitating the creation of graceful, adaptable pages
          seamlessly integrated with Tailwind CSS.
        </Typography>
        <Typography variant="sub-paragraph">
          @imagine-ui/react seamlessly interfaces with Tailwind CSS classes;
          hence, the prior installation of Tailwind CSS within your project
          infrastructure is a prerequisite. The Tailwind CSS Installation Guide
          is at your disposal to guide you through this process.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h6">Harmonizing with Frameworks</Typography>

        <Typography variant="sub-paragraph">
          Our dedicated guides for diverse frameworks expound on the recommended
          methodology for incorporating @imagine-ui/react within different
          prominent ecosystems. Make a selection from the list of favored
          frameworks below, then proceed to implement the specified
          instructions.
        </Typography>
        <Typography variant="sub-paragraph">
          Syncing with the Tailwind CSS Framework Elevate your workflow efficacy
          by harmoniously integrating your preferred tools, empowered by the
          versatility of Imagine UI.
        </Typography>

        <div className="flex flex-wrap gap-4">
          <Link href="/docs/installation/cra" className="flex-[1_1_200px]">
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
          <Link href="/docs/installation/vite" className="flex-[1_1_200px]">
            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 "
              color="transparent"
            >
              <Image alt="" src="/vite-icon.svg" width={60} height={60} />
            </Card>
          </Link>
          <Link href="/docs/installation/next" className="flex-[1_1_200px]">
            <Card
              className="border dark:border-zinc-700 hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all items-center justify-center gap-4 w-full h-[175px] hover:shadow-lg peer p-4 "
              color="transparent"
            >
              <Image alt="" src="/next-icon.svg" width={60} height={60} />
            </Card>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <Typography variant="h6">Typescript</Typography>
        <Typography variant="sub-paragraph">
          The essence of @imagine-ui/react is rooted in components founded upon
          TypeScript, serving as a facilitator for effortless amalgamation into
          projects centered around the TypeScript framework.
        </Typography>
      </div>
      <PreviousAndNext
        previous={{ path: "/docs/overview", label: "Overview" }}
        next={{ path: "/docs/license", label: "License" }}
      />
    </div>
  );
}

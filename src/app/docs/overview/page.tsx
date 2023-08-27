"use client";
import { ScrollSection } from "@/components/ScroolSection";
import { Typography } from "@imagine-ui/react";

export default function Overview() {
  return (
    <>
      <ScrollSection className="mt-10">
        <Typography variant="h6">
          Imagine UI - Comprehensive React Component Suite
        </Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          Welcome to Imagine UI, an exclusive library of React components
          meticulously designed to enhance your development endeavors.
        </Typography>
      </ScrollSection>
      <ScrollSection className="mt-10">
        <Typography variant="h6">Overview</Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          Imagine UI stands as a proprietary collection of carefully crafted
          React components, developed using the capabilities of Tailwind CSS.
        </Typography>
      </ScrollSection>
      <ScrollSection className="mt-10">
        <Typography variant="h6"> Key Features</Typography>
        <Typography bold className="mt-4">
          Component Arsenal:
        </Typography>
        <Typography variant="sub-paragraph">
          Unleash your creativity with an extensive range of components designed
          to simplify the creation of React applications.
        </Typography>
        <Typography bold className="mt-4">
          Closed-Source Excellence:
        </Typography>
        <Typography variant="sub-paragraph">
          Imagine UI is an exclusive closed-source library, developed with
          precision using the dynamic capabilities of Tailwind CSS.
        </Typography>
        <Typography bold className="mt-4">
          Framework Synergy:
        </Typography>
        <Typography variant="sub-paragraph">
          Seamlessly integrates with various React frameworks, ensuring that
          your development experience remains unhindered. Theming with a Glimpse
          of the Future: Presently equipped with robust theming options, Imagine
          UI is poised to introduce advanced theming capabilities in the near
          future. Diverse
        </Typography>
        <Typography variant="h6" bold className="mt-10">
          About
        </Typography>
        <Typography variant="sub-paragraph" className="mt-4" bold>
          To harness the potential of Imagine UI, ensure you have Tailwind CSS
          installed in your project. For certain frameworks, specific
          configurations might be required for optimal integration.
        </Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          Imagine UI's documentation is your guiding light. The open GitHub
          repository welcomes contributions, whether it's addressing library
          issues or refining the website content.
        </Typography>
        <Typography variant="sub-paragraph" className="mt-4">
          We're thrilled to be part of your development journey. Welcome to the
          world of Imagine UI – where innovation meets code, and possibilities
          abound.
        </Typography>
      </ScrollSection>
    </>
  );
}

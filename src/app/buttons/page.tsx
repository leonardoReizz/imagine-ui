"use client";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/xonokai";
import { Button } from "@imagine-ui/react";
import { ContentComponentPreview } from "@/components/ContentComponentPreview";
import {
  buttonColorsCodeString,
  buttonNotificationCodeString,
  buttonRippleEffectCodeString,
  buttonShadowCodeString,
  buttonVariantCodeString,
} from "@/utils/codeString/button";
import {
  BellAlertIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function Buttons() {
  return (
    <div className="w-full flex items-center justify-center flex-col ">
      <div className="w-full flex items-start justify-center flex-col max-w-3xl gap-4">
        <div className="flex items-center justify-center w-full flex-col gap-10">
          <ContentComponentPreview
            codeString={buttonVariantCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Variants"
          >
            <Button variant="solid" color="green" className="px-4 normal-case">
              Solid
            </Button>
            <Button
              variant="outlined"
              color="green"
              className="px-4 normal-case"
            >
              Outlined
            </Button>
            <Button
              variant="transparent"
              color="green"
              className="px-4 normal-case"
            >
              Transparent
            </Button>
            <Button variant="text" color="green" className="px-4 normal-case">
              Text
            </Button>
          </ContentComponentPreview>
          <ContentComponentPreview
            codeString={buttonShadowCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Shadow"
            className="h-[300px]"
          >
            <Button variant="solid" color="green" className="px-4 normal-case">
              Shadow ON
            </Button>
            <Button color="green" className="px-4 normal-case" shadow={false}>
              Shadow OFF
            </Button>
          </ContentComponentPreview>
          <ContentComponentPreview
            className="h-[285px]"
            codeString={buttonRippleEffectCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Ripple Effect"
          >
            <Button color="green" className="px-4 normal-case">
              Ripple ON
            </Button>
            <Button color="green" ripple={false} className="px-4 normal-case">
              Ripple OFF
            </Button>
          </ContentComponentPreview>
          <ContentComponentPreview
            className="h-[430px]"
            codeString={buttonColorsCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Colors"
          >
            <Button color="blue" className="px-4 normal-case">
              Blue
            </Button>
            <Button color="green" className="px-4 normal-case">
              Green
            </Button>
            <Button color="red" className="px-4 normal-case">
              Red
            </Button>
            <Button color="purple" className="px-4 normal-case">
              Purple
            </Button>
          </ContentComponentPreview>
          <ContentComponentPreview
            className="h-[430px]"
            codeString={buttonNotificationCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Icons"
          >
            <Button color="blue" className="px-4 normal-case">
              <UserIcon className="w-4 h-4" /> User
            </Button>
            <Button color="green" className="px-4 normal-case">
              Settings
              <Cog6ToothIcon className="w-4 h-4" />
            </Button>
            <Button color="red" className="px-4 normal-case">
              Notification
              <BellAlertIcon className="w-4 h-4" />
            </Button>
          </ContentComponentPreview>
          <ContentComponentPreview
            className="h-[285px]"
            codeString={buttonRippleEffectCodeString}
            description=" Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your app."
            title="Disabled"
          >
            <Button color="green" className="px-4 normal-case" disabled>
              Solid
            </Button>
            <Button
              color="green"
              ripple={false}
              className="px-4 normal-case"
              disabled
              variant="outlined"
            >
              Outlined
            </Button>
            <Button
              color="green"
              ripple={false}
              className="px-4 normal-case"
              disabled
              variant="transparent"
            >
              Outlined
            </Button>
            <Button
              color="green"
              ripple={false}
              className="px-4 normal-case"
              disabled
              variant="text"
            >
              Text
            </Button>
          </ContentComponentPreview>
        </div>
      </div>
    </div>
  );
}

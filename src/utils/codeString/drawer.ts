export const drawerCodeString = `import { Drawer } from "@imagine-ui/react";
 
export function DrawerExample() {
  const [isOpenDrawerTop, setIsOpenDrawerTop] = useState<boolean>(false);

  function onOpenChangeDrawerTop(open: boolean) {
    setIsOpenDrawerTop(open);
  }

  return (
    <Drawer
      onOpenChange={onOpenChangeDrawerTop}
      isOpen={isOpenDrawerTop}
      orientation="top"
    >
      Drawer top
    </Drawer>
  );
}`;

export const drawerResponsiveCodeString = `function DrawerOrientation() {
  const [isOpenDrawerResponsive, setIsOpenDrawerResponsive] = useState<boolean>(false);

  function onOpenChangeDrawerTop(open: boolean) {
    setIsOpenDrawerResponsive(open);
  }

  return (
    <Drawer
      onOpenChange={onOpenChangeDrawerTop}
      isOpen={isOpenDrawerResponsive}
      orientation="right"
      maxWidth="800px"
    >
    <div className="w-full h-full flex items-center justify-center">
    Responsive Drawer
    </div>
    </Drawer>
  )
}`;

export const drawerOrientationCodeString = `function DrawerOrientation() {
  const [isOpenDrawerTop, setIsOpenDrawerTop] = useState<boolean>(false);
  const [isOpenDrawerBottom, setIsOpenDrawerBottom] = useState<boolean>(false);
  const [isOpenDrawerRight, setIsOpenDrawerRight] = useState<boolean>(false);
  const [isOpenDrawerLeft, setIsOpenDrawerLeft] = useState<boolean>(false);

  function onOpenChangeDrawerTop(open: boolean) {
    setIsOpenDrawerTop(open);
  }

  function onOpenChangeDrawerBottom(open: boolean) {
    setIsOpenDrawerBottom(open);
  }

  function onOpenChangeDrawerRight)open: boolean) {
    setIsOpenDrawerRight(open);
  }

  function onOpenChangeDrawerLeft(open: boolean) {
    setIsOpenDrawerLeft(open);
  }
  
  return (
    <Drawer
      onOpenChange={onOpenChangeDrawerTop}
      isOpen={isOpenDrawerTop}
      orientation="top"
    >
      Drawer top
    </Drawer>
    <Drawer
      onOpenChange={onOpenChangeDrawerBottom}
      isOpen={isOpenDrawerBottom}
      orientation="bottom"
    >
      Drawer Bottom
    </Drawer>
    <Drawer
      onOpenChange={onOpenChangeDrawerRight}
      isOpen={isOpenDrawerRight}
      orientation="right"
    >
      Drawer Right
    </Drawer>
    <Drawer
      onOpenChange={onOpenChangeDrawerLeft}
      isOpen={isOpenDrawerLeft}
      orientation="left"
    >
      Drawer Left
    </Drawer>
  )
}`;

export const drawerImportCodeString = `import { Drawer } from "@imagine-ui/react"`;

export const drawerOverlayPropsTypeCodeString = `type DrawerOverlayProps = { className?: string };`;

export const drawerOrientationTypeCodeString = `type DrawerOrientation = "top" | "bottom" | "right" | "left";`;

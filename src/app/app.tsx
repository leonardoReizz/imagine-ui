import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAppSelector } from "@/redux/store";
import { ThemeProvider } from "@imagine-ui/react";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

interface AppProps {
  children: ReactNode;
}

export function App({ children }: AppProps) {
  const currentTheme = useAppSelector(
    (state) => state.themeReducer.value.theme,
  );

  const currentPathname = usePathname();

  return (
    <ThemeProvider theme={{ current: currentTheme }}>
      <div>
        <Navbar />
        {currentPathname !== "/" && <Sidebar />}
        {currentPathname === "/" && (
          <div className=" w-full flex items-center justify-center gap-2 relative">
            <div className="max-w-7xl">{children}</div>
          </div>
        )}
        {currentPathname !== "/" && (
          <div className="left-64 w-[calc(100%-28rem)] flex items-center justify-center gap-2 relative">
            <div className="w-full max-w-3xl">{children}</div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

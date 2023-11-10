"use client";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/global.css";
import { RecoilRoot } from "recoil";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="dark text-foreground bg-background">
        <RecoilRoot>
          <NextUIProvider>
            <NavBar />
            <div className="px-3 py-4 sm:w-[53%] sm:mx-auto sm:text-end text-center">
              {children}
            </div>
          </NextUIProvider>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;

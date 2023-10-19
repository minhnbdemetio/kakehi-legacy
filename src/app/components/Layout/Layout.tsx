import FloatingButtons from "../FloatingButtons";
import Footer from "../Footer";
import Header from "../Header";
import MobileSidebar from "../MobileSidebar";
import React, { FC, PropsWithChildren, Suspense } from "react";

interface Props extends PropsWithChildren {
  showPreFooter?: boolean;
}

export const Layout: FC<Props> = ({ showPreFooter, children }) => {
  return (
    <>
      <Header />

      <div className="pt-[49.36px] lg:pt-[74.25px]">
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </div>

      <Footer showPreFooter={showPreFooter} />

      <FloatingButtons />
      <MobileSidebar />
    </>
  );
};

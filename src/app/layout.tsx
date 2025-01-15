import { FC, HTMLAttributes } from "react";

import { Navbar } from "../widgets/navbar";

type LayoutProps = HTMLAttributes<HTMLDivElement>;

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

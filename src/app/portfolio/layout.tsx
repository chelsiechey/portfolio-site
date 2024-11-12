import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Portfolio</h1>
      {children}
    </div>
  );
};

export default Layout;

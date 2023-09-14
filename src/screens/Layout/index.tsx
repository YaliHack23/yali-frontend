import React, { ReactNode } from 'react';
import Navbar from '../../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{backgroundColor: "rgb(245,245,245)", height: "100vh"}}>
      <Navbar />
      <main>{children}</main>
      {/* You can add a footer or other common elements here */}
    </div>
  );
};

export default Layout;

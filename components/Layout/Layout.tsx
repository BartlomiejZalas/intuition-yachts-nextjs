import React from 'react';
import Menu from '../Menu/Menu';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <footer>
        Copyright © Intuition Yachts Design Studio {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;

import React from 'react';
import Menu from '../Menu/Menu';
import SocialIcons from '../SocialIcons/SocialIcons';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      <SocialIcons />
      {children}
      <footer>
        Copyright © Intuition Yachts Design Studio {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;

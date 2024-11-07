import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/index"; // Import your Navbar component
import { Styled } from "./styles"; // Import your styled components

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Styled.Container>
        <Styled.Content>
          <Styled.Page>
            <Outlet />
          </Styled.Page>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default Layout;

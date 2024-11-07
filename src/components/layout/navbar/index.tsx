import React from "react";
import { styled } from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material"; // Import your icons
import logo from "@/assets/sebstahlogo.png"; // Adjust the path to your logo

// Styled components
const NavbarWrapper = styled("nav")`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: transparent; /* Make the navbar background transparent */
  color: white; /* Adjust text color to be visible over the video */
`;

const Logo = styled("img")`
  height: 40px; // Adjust the size of your logo
  cursor: pointer;
`;

const NavLinks = styled("div")`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Link = styled("a")`
  color: white; // Text color for navbar links
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: orange; // Adjust the hover color
  }
`;

const SocialIcons = styled("div")`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialIcon = styled("a")`
  color: white; // Icon color
  font-size: 24px;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      {/* Logo */}
      <Logo src={logo} alt="Sebstah IT Logo" />

      {/* Navigation Links */}
      <NavLinks>
        <Link href="#">Services</Link>
        <Link href="#">References</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
      </NavLinks>

      {/* Social Media Icons */}
      <SocialIcons>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </SocialIcon>
      </SocialIcons>
    </NavbarWrapper>
  );
};

export default Navbar;

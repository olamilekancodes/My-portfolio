"use client";

import styled from "styled-components";
import Image from "next/image";

const StyledParagraph = styled.p`
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  color: inherit;

  &:hover {
    color: #eaeaea;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -7.5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #126cf8;
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  cursor: pointer;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: -7px;
    width: 8px;
    height: 8px;
    background-color: #126cf8;
    border-radius: 50%;

    transition-delay: 0.5s ease-in-out;
  }
`;

const navItems = [
  { id: "home", label: "Home" },
  { id: "project", label: "Project" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  return (
    <div className="flex items-center  py-2 px-5 bg-[#080808] text-[#eaeaea] hover:text-[#939393] transition-colors duration-300 border-b-[0.5px] border-gray-500 sticky top-0 z-10">
      <LogoWrapper>
        <Image src="/Images/logo.png" alt="Logo" width={70} height={50} />
      </LogoWrapper>
      <div className="flex flex-row justify-center items-center gap-10 m-auto">
        {navItems.map((navItem, index) => (
          <StyledParagraph key={index}>{navItem.label}</StyledParagraph>
        ))}
      </div>
    </div>
  );
};

"use client";

import styled from "styled-components";

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

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 py-2 bg-[#080808] text-[#eaeaea] hover:text-[#939393] transition-colors duration-300 border-b-[0.5px] border-gray-500 sticky top-0 z-10">
      {["Home", "About", "Project", "Contact"].map((text) => (
        <StyledParagraph key={text}>{text}</StyledParagraph>
      ))}
    </div>
  );
};

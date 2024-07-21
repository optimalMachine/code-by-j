import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.headerText};
`;

const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.headerText};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.headerHover};
  }
`;

const ThemeToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo>Code By J</Logo>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? '🌞 Light' : '🌙 Dark'}
        </ThemeToggleButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
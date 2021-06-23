import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ToggleLight from 'Components/lightSwitch/ToggleLight';
import Avatar from 'Assets/images/me.jpg';
import { DarkTheme, LightTheme, TextColor } from 'Assets/styles/colors';
import { IThemeProps } from 'Types/theme';
import { ThemeContext } from 'Context/ThemeContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 25px;
  padding-left: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const List = styled.ul<IThemeProps>`
  display: flex;
  list-style: none;
  margin-top: 10px;
  padding: 0;
  ${(props) =>
    props.isLight
      ? 'border: none'
      : 'border-top: 1px solid #484e57 border-bottom: 1px solid #484e57'};

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Item = styled.li`
  width: 210px;
  text-align: center;
  padding: 10px 0;
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 385px) {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const LinkElem = styled(NavLink)<{ islight: string }>`
  position: relative;
  font-family: 'Jura', sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-size: 2rem;
  ${(props) =>
    props.islight === 'true' ? `color: ${TextColor}` : 'color: #fff'};
  padding: 5px;
  border-radius: 5px;

  &.active {
    font-weight: 700;
    color: #fff;
    ${(props) =>
      props.islight === 'true'
        ? `background: ${TextColor}`
        : 'background: none'};
  }

  &:hover:after,
  &.active:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${(props) =>
      props.islight === 'true' ? `${LightTheme}` : `${DarkTheme}`};
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 385px) {
    font-size: 1.2rem;
  }
`;

const Faction = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarContainer = styled.div`
  position: relative;
  height: 80px;
  margin-left: 10px;
`;

const AvatarImage = styled.img<IThemeProps>`
  box-sizing: border-box;
  height: 100%;
  border-radius: 50%;
  border: 4px solid
    ${(props) => (props.isLight ? `${LightTheme}` : `${DarkTheme}`)};
`;

const Navbar = (): JSX.Element => {
  const { isLight } = useContext(ThemeContext);

  return (
    <Nav role='navigation'>
      <List isLight={isLight}>
        <Item>
          <LinkElem exact to='/' islight={isLight.toString()}>
            Главная
          </LinkElem>
        </Item>
        <Item>
          <LinkElem to='/library' islight={isLight.toString()}>
            Библиотека
          </LinkElem>
        </Item>
      </List>
      <Faction>
        <ToggleLight />
        <AvatarContainer>
          <AvatarImage src={Avatar} alt='Avatar' isLight={isLight} />
        </AvatarContainer>
      </Faction>
    </Nav>
  );
};

export default Navbar;

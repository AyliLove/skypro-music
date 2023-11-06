import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import * as S from "./NavMenuStyles"


const NavMenu = () => {
  return (
    <S.MainNav>
      < S.NavLogo >
        <S.LogoImage src="img/logo.png" alt="logo"/>
      </ S.NavLogo>
      <BurgerMenu />
    </S.MainNav>
  );
};

export default NavMenu;

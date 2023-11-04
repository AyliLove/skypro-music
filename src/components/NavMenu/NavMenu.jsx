import { useState } from 'react'
import * as S from './NavMenu.styles.js'

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true)
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const handleLogout = () => {
    localStorage.removeItem('login');
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenuOpen}>
        <S.BurgerLine/>
        <S.BurgerLine/>
        <S.BurgerLine/>
      </S.NavBurger>
      {menuOpen ? (
        <S.NavMenuDiv>
          <S.MenuListUl>
            
            <S.MenuItemLi>
              <S.RouteMenuLink to="/">
                Главное
              </S.RouteMenuLink>
            </S.MenuItemLi>

            <S.MenuItemLi>
              <S.RouteMenuLink to="./favorites">
                Мой плейлист
              </S.RouteMenuLink>
            </S.MenuItemLi>
            
            <S.MenuItemLi>
              <S.RouteMenuLink onClick={handleLogout} to="./login">
                Выйти
              </S.RouteMenuLink>
            </S.MenuItemLi>

          </S.MenuListUl>
        </S.NavMenuDiv>
      ) : null}
    </S.MainNav>
  )
}
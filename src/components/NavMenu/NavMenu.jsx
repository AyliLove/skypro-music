import { useContext, useState } from 'react'
import * as S from './NavMenu.styles.js'
import { UserContext } from '../../App.jsx'

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true)
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const { handleLogoff } = useContext(UserContext)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenuOpen}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {menuOpen ? (
        <S.NavMenuDiv>
          <S.MenuListUl>
            <S.MenuItemLi>
              <S.RouteMenuLink to="/">Главное</S.RouteMenuLink>
            </S.MenuItemLi>

            <S.MenuItemLi>
              <S.RouteMenuLink to="./favorites">Мой плейлист</S.RouteMenuLink>
            </S.MenuItemLi>

            <S.MenuItemLi>
              <S.RouteMenuLink onClick={handleLogoff} to="./login">
                Выйти
              </S.RouteMenuLink>
            </S.MenuItemLi>
          </S.MenuListUl>
        </S.NavMenuDiv>
      ) : null}
    </S.MainNav>
  )
}

import { useState } from 'react'
import * as S from './NavMenu.styles'

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
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
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="#top">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#top">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  )
}
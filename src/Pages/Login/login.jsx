import React from 'react'
import * as S from './loginStyles'
import { Link } from 'react-router-dom'

export const Login = ({ onClick }) => {
  return (
    <S.LoginBox>
      <S.LoginImg src="img/logo_modal.png" alt="" />
      <S.LoginInputEmail placeholder="Почта" type="text" />
      <S.LoginInputPassword placeholder="Пароль" type="text" />
      <S.LinkS onClick={onClick} to="/">
        <S.LoginButtonIn>Войти</S.LoginButtonIn>
      </S.LinkS>
      <Link to="/Register">
        <S.LoginButtonReg>Зарегистрироваться</S.LoginButtonReg>
      </Link>
    </S.LoginBox>
  )
}

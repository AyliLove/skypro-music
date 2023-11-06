import React from "react";
import * as S from "./LoginStyles.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";



export const Login = ({onClick}) => {

  return (
    <S.LoginBox>
      <S.LoginImg src="img/logo_modal.png" alt="" />
      <S.LoginInputEmail placeholder="Почта" type="text" />
      <S.LoginInputPassword placeholder="Пароль" type="text" />
      <S.LinkS onClick={onClick} to="/">
        <S.LoginButtonIn >Войти</S.LoginButtonIn>
      </S.LinkS>
      <Link to="/registration">
        <S.LoginButtonReg>Зарегестрироваться</S.LoginButtonReg>
      </Link>
    </S.LoginBox>
  );
};




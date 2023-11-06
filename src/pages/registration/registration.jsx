import React from "react";
import * as S from "../login/LoginStyles"
import { Link } from "react-router-dom";


export const Registration = () => {
  return (
    <S.LoginBox>
      <S.LoginImg src="img/logo_modal.png" alt="" />
      <S.LoginInputEmail placeholder="Почта" type="text" />
      <S.LoginInputPassword placeholder="Пароль" type="text" />
      <S.LoginInputPasswordRepeat placeholder="Повторите пароль" type="text" />
      <Link to="/login">
        <S.LoginButtonIn>Зарегестрироваться</S.LoginButtonIn>
      </Link>
    </S.LoginBox>
  );
};
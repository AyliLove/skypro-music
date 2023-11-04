import styled from 'styled-components'
import { Link } from "react-router-dom";


export const LoginBox = styled.div`
  width: 366px;
  height: 439px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 43px 47px 47px 41px;
`
export const LoginImg = styled.img`
  width: 140.001px;
  height: 21px;
  flex-shrink: 0;
  margin-left: 72px;
  margin-bottom: 43px;
`

export const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid #D0CECE;
  padding: 8px;
  &::placeholder {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.054px;
    color: #E1E1E1;
  }
`

export const LoginInputEmail = styled(LoginInput)`
  margin-bottom: 30px;
`

export const LoginInputPassword = styled(LoginInput)`
`

export const LoginInputPasswordRepeat = styled(LoginInput)`
  margin-top: 30px;
`

export const LoginButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
`

export const LoginButtonIn = styled(LoginButton)`
  background:  #580EA2;
  color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  margin-top: 52px;
  &:hover {
    background: #3F007D;
  };
  &:active {
    background:#271A58;
  }
`

export const LoginButtonReg = styled(LoginButton)`
  border: 1px solid #D0CECE;
  background:  #fff;
  &:hover {
    background: #F4F5F6;
  };
  &:active {
    background:#D9D9D9;
  }
`
export const LinkS = styled(Link)`
  margin-bottom: 20px;
`
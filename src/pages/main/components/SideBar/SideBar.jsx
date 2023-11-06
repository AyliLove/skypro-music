import React from "react";
import PlayLists from "../PlayLists/PlayLists";
import * as S from "./SideBarStyles"
import { useState } from "react";

const SideBar = () => {



  const handleLogOut = () =>  {
    localStorage.removeItem('login')
  }

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Ilya.Shlepin</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogOut} to="/login">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <PlayLists />
      </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default SideBar;

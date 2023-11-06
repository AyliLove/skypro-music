import React from "react";
import PlayList from "../PlayList/PlayList";
import * as S from '../PlayList/PlayListStyles'

const PlayLists = () => {

  return (
    <S.SidebarList>
        <PlayList />
    </S.SidebarList>
  );
};

export default PlayLists;

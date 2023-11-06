import React from "react";
import Track from "../Track/Track";
import * as S from "./TracksBlockStyles"


const TracksBlock = () => {


  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.Col01>Трек</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>
        <Track/>
      </S.ContentPlaylist>
    </S.CenterblockContent>
  );
};

export default TracksBlock
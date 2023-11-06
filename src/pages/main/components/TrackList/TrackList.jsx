import React from "react";
import TracksBlock from "../TracksBlock/TracksBlock";
import FilterButtons from "../FilterButtons/FilterButtons";
import * as S from "./TrackListStyles"


const TrackList = () => {
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterButtons />
      </S.CenterblockFilter>
      <TracksBlock/>
    </S.MainCenterblock>
  );
};

export default TrackList
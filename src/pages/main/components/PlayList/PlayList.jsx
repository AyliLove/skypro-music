import React from "react";
import * as S from "./PlayListStyles"
import LoadingContext from '../context';
import { useContext } from 'react';
import {playLists} from "../../../../PlayListsArr.js"


 const PlayList = () => {
  const { loading, setLoading } = useContext(LoadingContext)

  return (
    <>
      {playLists.map((playLista) => (
        loading ?
          <S.SidebarItemSkeleton key={playLista.id}></S.SidebarItemSkeleton>
          :
          <S.SidebarItem key={playLista.id}>
            <S.SidebarLink to={`/category/${playLista.id}`}>
              <S.SidebarImg
                src={playLista.src}
                alt={playLista.name}
              />
            </S.SidebarLink>
          </S.SidebarItem>
      ))}
    </>
  );
};

export default PlayList;
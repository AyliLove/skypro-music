import React from "react";
import { useParams } from "react-router-dom";
// import * as S from "./PlayListStyles"
import {playLists} from "../../PlayListsArr.js"

export const  Category = () => {
  const params = useParams();
  console.log(params)
  const playLista = playLists.find((playLista) => playLista.id === Number(params.id));
  
  
  return (
    <div>
      <h1>Подборкa {playLista.id}</h1>
    </div>
  );
};
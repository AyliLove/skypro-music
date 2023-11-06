import React from "react";
import * as S from "./FilterButtonsStyles"


const { useState } = React;


const FilterButtons = () => {

  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const [visibleYear, setVisibleYear] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)

  const toggleVisibilityAuthor = () => {
    setVisibleAuthor(!visibleAuthor)
    setVisibleGenre(false)
    setVisibleYear(false)
  }

  const toggleVisibilityYear = () => {
    setVisibleAuthor(false)
    setVisibleGenre(false)
    setVisibleYear(!visibleYear)
  }

  const toggleVisibilityGenre = () => {
    setVisibleAuthor(false)
    setVisibleGenre(!visibleGenre)
    setVisibleYear(false)
  }

  return (
    <>
      <S.FilterButtonBox onClick={toggleVisibilityAuthor} >
        <S.FilterButton $props={visibleAuthor}>
          исполнителю
        </S.FilterButton>
        {visibleAuthor &&
          (<S.FilterBox>
            <S.FilterList>
              <S.FilterItem>Исполнитель 1</S.FilterItem>
              <S.FilterItem>Исполнитель 2</S.FilterItem>
              <S.FilterItem>Исполнитель 3</S.FilterItem>
              <S.FilterItem>Исполнитель 4</S.FilterItem>
              <S.FilterItem>Исполнитель 5</S.FilterItem>
              <S.FilterItem>Исполнитель 6</S.FilterItem>
              <S.FilterItem>Исполнитель 7</S.FilterItem>
              <S.FilterItem>Исполнитель 8</S.FilterItem>
            </S.FilterList>
          </S.FilterBox>)}
      </S.FilterButtonBox>

      <S.FilterButtonBox onClick={toggleVisibilityYear}>
        <S.FilterButton $props={visibleYear}>
          году выпуска
        </S.FilterButton>
        {visibleYear &&
          (<S.FilterBox>
            <S.FilterList>
              <S.FilterItem>2016</S.FilterItem>
              <S.FilterItem>2017</S.FilterItem>
              <S.FilterItem>2018</S.FilterItem>
              <S.FilterItem>2019</S.FilterItem>
              <S.FilterItem>2020</S.FilterItem>
              <S.FilterItem>2021</S.FilterItem>
              <S.FilterItem>2022</S.FilterItem>
              <S.FilterItem>2023</S.FilterItem>
            </S.FilterList>
          </S.FilterBox>)}
      </S.FilterButtonBox>

      <S.FilterButtonBox onClick={toggleVisibilityGenre}>
        <S.FilterButton $props={visibleGenre}>
          жанру
        </S.FilterButton>
        {visibleGenre && (
          <S.FilterBox>
            <S.FilterList>
              <S.FilterItem>Жанр 1</S.FilterItem>
              <S.FilterItem>Жанр 2</S.FilterItem>
              <S.FilterItem>Жанр 3</S.FilterItem>
              <S.FilterItem>Жанр 4</S.FilterItem>
              <S.FilterItem>Жанр 5</S.FilterItem>
              <S.FilterItem>Жанр 6</S.FilterItem>
              <S.FilterItem>Жанр 7</S.FilterItem>
              <S.FilterItem>Жанр 8</S.FilterItem>
            </S.FilterList>
          </S.FilterBox>)}
      </S.FilterButtonBox>
    </>
  );
};

export default FilterButtons
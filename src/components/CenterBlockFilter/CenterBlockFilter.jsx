import { useState } from 'react'
import * as S from './CenterBlockFilter.styles.js'

const CenterBlockFilter = () => {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <S.CenterBlockFilterDiv>
      <S.FilterTitleDiv>Искать по:</S.FilterTitleDiv>

      <S.FilterButtonWrapper>
        <S.FilterButton
          $isActive={visibleFilter === 'author' ? true : false}
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </S.FilterButton>
        {visibleFilter === 'author' && (
          <S.FilterBoxDiv>
            <S.FilterListUl>
              <S.FilterItem>Исполнитель1</S.FilterItem>
              <S.FilterItem>Исполнитель2</S.FilterItem>
              <S.FilterItem>Исполнитель3</S.FilterItem>
              <S.FilterItem>Исполнитель4</S.FilterItem>
              <S.FilterItem>Исполнитель5</S.FilterItem>
              <S.FilterItem>Исполнитель6</S.FilterItem>
              <S.FilterItem>Исполнитель7</S.FilterItem>
              <S.FilterItem>Исполнитель8</S.FilterItem>
              <S.FilterItem>Исполнитель9</S.FilterItem>
            </S.FilterListUl>
          </S.FilterBoxDiv>
        )}
      </S.FilterButtonWrapper>

      <S.FilterButtonWrapper>
        <S.FilterButton
          $isActive={visibleFilter === 'year' ? true : false}
          onClick={() => toggleVisibleFilter('year')}
        >
          году выпуска
        </S.FilterButton>
        {visibleFilter === 'year' && (
          <S.FilterBoxDiv>
            <S.FilterListUl>
              <S.FilterItem>1980</S.FilterItem>
              <S.FilterItem>1990</S.FilterItem>
              <S.FilterItem>2000</S.FilterItem>
              <S.FilterItem>2010</S.FilterItem>
              <S.FilterItem>2015</S.FilterItem>
            </S.FilterListUl>
          </S.FilterBoxDiv>
        )}
      </S.FilterButtonWrapper>

      <S.FilterButtonWrapper>
        <S.FilterButton
          $isActive={visibleFilter === 'genre' ? true : false}
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </S.FilterButton>
        {visibleFilter === 'genre' && (
          <S.FilterBoxDiv>
            <S.FilterListUl>
              <S.FilterItem>Рок</S.FilterItem>
              <S.FilterItem>Поп</S.FilterItem>
              <S.FilterItem>Техно</S.FilterItem>
              <S.FilterItem>Джаз</S.FilterItem>
              <S.FilterItem>Металл</S.FilterItem>
              <S.FilterItem>Классика</S.FilterItem>
            </S.FilterListUl>
          </S.FilterBoxDiv>
        )}
      </S.FilterButtonWrapper>
    </S.CenterBlockFilterDiv>
  )
}

export default CenterBlockFilter
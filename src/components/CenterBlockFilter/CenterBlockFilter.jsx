import { useEffect, useState } from 'react'

import * as S from './CenterBlockFilter.styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../store/playerSlice.js'

const dateSorting = ['По умолчанию', 'Сначала новые', 'Сначала старые']

const CenterBlockFilter = () => {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const [authorList, setAuthorList] = useState([])
  const [genreList, setGenreList] = useState([])
  const { playList } = useSelector((state) => state.playerApp)
  const dispatch = useDispatch()
  const filterConditionArr = useSelector((state) => state.playerApp.filters)


  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  useEffect(() => {
    if (playList.length) {
      const authors = playList.map((el) => el.author)
      const authorSet = new Set(authors)
      setAuthorList(Array.from(authorSet))

      const genre = playList.map((el) => el.genre)
      const genreSet = new Set(genre)
      setGenreList(Array.from(genreSet))
    }
  }, [playList])

  return (
    <S.CenterBlockFilterDivWrapper>
      <S.CenterBlockFilterDiv>
        <S.FilterTitleDiv>Фильтр по:</S.FilterTitleDiv>

        <S.FilterButtonWrapper>
          <S.FilterButton
            $isActive={visibleFilter === 'author'}
            onClick={() => toggleVisibleFilter('author')}
          >
            исполнителю
          </S.FilterButton>

          {filterConditionArr.authors.length !== 0 ? (
            <S.Counter>{`${filterConditionArr.authors.length}`}</S.Counter>
          ) : null}

          {visibleFilter === 'author' && (
            <S.FilterBoxDiv>
              <S.FilterListUl>
                {authorList.map((item) => (
                  <S.FilterItem
                    key={item}
                    onClick={() =>
                      dispatch(
                        setFilters({
                          filterName: 'authors',
                          filterValue: item,
                        }),
                      )
                    }
                    $props={filterConditionArr.authors.includes(item)}
                  >
                    {item}
                  </S.FilterItem>
                ))}
              </S.FilterListUl>
            </S.FilterBoxDiv>
          )}
        </S.FilterButtonWrapper>

        <S.FilterButtonWrapper>
          <S.FilterButton
            $isActive={visibleFilter === 'genre'}
            onClick={() => toggleVisibleFilter('genre')}
          >
            жанру
          </S.FilterButton>

          {filterConditionArr.genre.length !== 0 ? (
            <S.Counter>{`${filterConditionArr.genre.length}`}</S.Counter>
          ) : null}

          {visibleFilter === 'genre' && (
            <S.FilterBoxDiv>
              <S.FilterListUl>
                {genreList.map((item) => (
                  <S.FilterItem
                    key={item}
                    onClick={() =>
                      dispatch(
                        setFilters({
                          filterName: 'genre',
                          filterValue: item,
                        }),
                      )
                    }
                    $props={filterConditionArr.genre.includes(item)}
                  >
                    {item}
                  </S.FilterItem>
                ))}
              </S.FilterListUl>
            </S.FilterBoxDiv>
          )}
        </S.FilterButtonWrapper>
      </S.CenterBlockFilterDiv>

      <S.CenterBlockFilterDiv>
        <S.FilterTitleDiv>Сортировка по:</S.FilterTitleDiv>

        <S.FilterButtonWrapper>
          <S.FilterButton
            $isActive={visibleFilter === 'year'}
            onClick={() => toggleVisibleFilter('year')}
          >
            {filterConditionArr.dateOrder}
          </S.FilterButton>

          {filterConditionArr.dateOrder != 'По умолчанию' ? (
            <S.Counter>1</S.Counter>
          ) : null}

          {visibleFilter === 'year' && (
            <S.FilterBoxDiv>
              <S.FilterListUl>
                {dateSorting.map((item) => (
                  <S.FilterItem
                    key={item}
                    onClick={() =>
                      dispatch(
                        setFilters({
                          filterName: 'dateOrder',
                          filterValue: item,
                        }),
                      )
                    }
                    $props={filterConditionArr.dateOrder.includes(item)}
                  >
                    {item}
                  </S.FilterItem>
                ))}
              </S.FilterListUl>
            </S.FilterBoxDiv>
          )}
        </S.FilterButtonWrapper>
      </S.CenterBlockFilterDiv>
    </S.CenterBlockFilterDivWrapper>
  )
}

export default CenterBlockFilter

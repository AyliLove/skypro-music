import * as S from './CenterBlockSearch.styles.js'

const CenterBlockSearch = () => {
  return (
    <S.CenterBlockSearchDiv>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchTextInput
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterBlockSearchDiv>
  )
}

export default CenterBlockSearch
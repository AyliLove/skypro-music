import { useDispatch } from 'react-redux'
import * as S from './CenterBlockSearch.styles.js'
import { searchTracks } from '../../store/playerSlice.js'

const CenterBlockSearch = () => {
  const dispatch = useDispatch()
 
  return (
    <S.CenterBlockSearchDiv>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchTextInput
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => dispatch(searchTracks({value: e.target.value}))}
      />
    </S.CenterBlockSearchDiv>
  )
}

export default CenterBlockSearch

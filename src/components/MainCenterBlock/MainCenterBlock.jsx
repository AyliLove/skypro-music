import CenterBlockContent from '../CenterBlockContent/CenterBlockContent'
import CenterBlockFilter from '../CenterBlockFilter/CenterBlockFilter'
import CenterBlockSearch from '../CenterBlockSearch/CenterBlockSearch'
import * as S from './MainCenterBlock.styles.js'

const MainCenterBlock = () => {
  return (
    <S.MainCenterBlockDiv>
      <CenterBlockSearch />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <CenterBlockFilter />
      
      <CenterBlockContent />
      
    </S.MainCenterBlockDiv>
  )
}

export default MainCenterBlock

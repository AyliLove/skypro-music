import { NavMenu } from '../NavMenu/NavMenu'
import MainCenterBlock from '../MainCenterBlock/MainCenterBlock'
import MainSideBar from '../MainSideBar/MainSideBar'
import { MainDiv } from './Main.styles'

const Main = () => {
  return (
    <MainDiv>
      <NavMenu />
      <MainCenterBlock />
      <MainSideBar />
    </MainDiv>
  )
}

export default Main
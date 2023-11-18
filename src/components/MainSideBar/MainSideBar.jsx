import { useContext } from 'react'
import { loadingContext } from '../Context'
import * as S from './MainSideBar.styles.js'
import { userContext } from '../../App.jsx'

const MainSideBar = () => {
  const { loading } = useContext(loadingContext)
  const { user, handleLogoff } = useContext(userContext)

  return (
    <S.MainSideBarDiv>
      <S.SideBarPersonalDiv>
        <S.SideBarPersonalName>{user}</S.SideBarPersonalName>
        <S.SideBarIconDiv onClick={handleLogoff} to="./login">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIconDiv>
      </S.SideBarPersonalDiv>
      <S.SideBarBlockDiv>
        <S.SideBarListDiv>
          {loading ? (
            <S.SideBarItemSkeletonDiv />
          ) : (
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/1">
                <S.SideBarImg src="img/playlist01.png" alt="day's playlist" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
          )}
          {loading ? (
            <S.SideBarItemSkeletonDiv />
          ) : (
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/2">
                <S.SideBarImg src="img/playlist02.png" alt="day's playlist" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
          )}

          {loading ? (
            <S.SideBarItemSkeletonDiv />
          ) : (
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/3">
                <S.SideBarImg src="img/playlist03.png" alt="day's playlist" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
          )}
        </S.SideBarListDiv>
      </S.SideBarBlockDiv>
    </S.MainSideBarDiv>
  )
}

export default MainSideBar
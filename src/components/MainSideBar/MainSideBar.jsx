import { useContext } from 'react'
import { loadingContext } from '../../Context'
import * as S from './MainSideBar.styles.js'
import { UserContext } from '../../App.jsx'

const MainSideBar = () => {
  const { loading } = useContext(loadingContext)
  const { user, handleLogoff } = useContext(UserContext)

  return (
    <S.MainSideBarDiv>
      <S.SideBarPersonalDiv>
        <S.SideBarPersonalName>{user?.username}</S.SideBarPersonalName>
        <S.SideBarIconDiv onClick={handleLogoff} to="./login">
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIconDiv>
      </S.SideBarPersonalDiv>
      <S.SideBarBlockDiv>
        <S.SideBarListDiv>
          
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/1">
                <S.SideBarImg src="/img/playlist-classic.png" alt="playlist-classic" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
          
          
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/2">
                <S.SideBarImg src="/img/playlist-electro.png" alt="playlist-electro" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
        

        
            <S.SideBarItemDiv>
              <S.RouteSideBarLink to="/Category/3">
                <S.SideBarImg src="/img/playlist-rock.png" alt="playlist-rock" />
              </S.RouteSideBarLink>
            </S.SideBarItemDiv>
         
        </S.SideBarListDiv>
      </S.SideBarBlockDiv>
    </S.MainSideBarDiv>
  )
}

export default MainSideBar

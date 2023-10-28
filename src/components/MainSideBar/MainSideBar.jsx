import { useContext } from 'react'
import loadingContext from '../Context'
import * as S from './MainSideBar.styles.js'

const MainSideBar = () => {
  const loading = useContext(loadingContext)

  return (
    <S.MainSideBarDiv>
      <S.SideBarPersonalDiv>
        <S.SideBarPersonalName>Ilya Shlepin</S.SideBarPersonalName>
        <S.SideBarIconDiv>
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
              <S.SideBarLinkA href="#top">
                <S.SideBarImg src="img/playlist01.png" alt="day's playlist" />
              </S.SideBarLinkA>
            </S.SideBarItemDiv>
          )}
          {loading ? (
            <S.SideBarItemSkeletonDiv />
          ) : (
            <S.SideBarItemDiv>
              <S.SideBarLinkA href="#top">
                <S.SideBarImg src="img/playlist02.png" alt="day's playlist" />
              </S.SideBarLinkA>
            </S.SideBarItemDiv>
          )}

          {loading ? (
            <S.SideBarItemSkeletonDiv />
          ) : (
            <S.SideBarItemDiv>
              <S.SideBarLinkA href="#top">
                <S.SideBarImg src="img/playlist03.png" alt="day's playlist" />
              </S.SideBarLinkA>
            </S.SideBarItemDiv>
          )}
        </S.SideBarListDiv>
      </S.SideBarBlockDiv>
    </S.MainSideBarDiv>
  )
}

export default MainSideBar
import { useContext } from 'react'
import loadingContext from './Context'

const MainSideBar = () => {
  const loading = useContext(loadingContext)

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Ilya.Shlepin</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {loading ? (
            <div className="sidebar__item-skeleton"></div>
          ) : (
            <div className="sidebar__item">
              <a className="sidebar__link" href="#top">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          )}
          {loading ? (
            <div className="sidebar__item-skeleton"></div>
          ) : (
            <div className="sidebar__item">
              <a className="sidebar__link" href="#top">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          )}

          {loading ? (
            <div className="sidebar__item-skeleton"></div>
          ) : (
            <div className="sidebar__item">
              <a className="sidebar__link" href="#top">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainSideBar
import { useContext } from 'react'
import loadingContext from '../Context'
import PlayListItemSkeleton from './PlayListItemSkeleton'
import * as S from './CenterBlockContent.styles.js'

const CenterBlockContent = () => {
  const loading = useContext(loadingContext)

  return (
    <S.CenterBlockContentDiv>
      <S.ContentTitleDiv>
        <S.PlaylistTitleColDiv $width={447}>Трек</S.PlaylistTitleColDiv>
        <S.PlaylistTitleColDiv $width={321}>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColDiv>
        <S.PlaylistTitleColDiv $width={245}>АЛЬБОМ</S.PlaylistTitleColDiv>
        <S.PlaylistTitleColDiv $width={60} $col04={true}>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleColDiv>
      </S.ContentTitleDiv>

      <S.ContentPlaylistDiv>
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Guilt <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Nero
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>

              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Welcome Reality
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>4:44</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}

        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Elektro <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Dynoro, Outwork, Mr. Gee
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Elektro
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>2:22</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    I’m Fire <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Ali Bakgor
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  I’m Fire
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>2:22</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Non Stop
                    <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Стоункат, Psychopath
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Non Stop
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>4:12</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Run Run
                    <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Jaded, Will Clarke, AR/CO
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Run Run
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>2:54</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Eyes on Fire
                    <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Blue Foundation, Zeds Dead
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Eyes on Fire
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>5:20</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Mucho Bien
                    <S.TrackTitleSpan>
                      (Hi Profile Remix)
                    </S.TrackTitleSpan>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Mucho Bien
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>3:41</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Knives n Cherries
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  minthaze
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Captivating
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>1:48</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}

        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    How Deep Is Your Love
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Calvin Harris, Disciples
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  How Deep Is Your Love
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>3:32</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    Morena <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  Tom Boxer
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  Soundz Made in Romania
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>3:36</S.TrackTimeTextSpan>
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
        {loading ? (
          <PlayListItemSkeleton />
        ) : (
          <S.PlaylistItemDiv>
            <S.PlaylistTrackDiv>
              <S.TrackTitleDiv>
                <S.TrackTitleImageDiv>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImageDiv>
                <S.TrackTitleTextDiv>
                  <S.TrackTitleLinkA href="http://">
                    <S.TrackTitleSpan/>
                  </S.TrackTitleLinkA>
                </S.TrackTitleTextDiv>
              </S.TrackTitleDiv>
              <S.TrackAuthorDiv>
                <S.TrackAuthorLinkA href="http://">
                  track__author-link
                </S.TrackAuthorLinkA>
              </S.TrackAuthorDiv>
              <S.TrackAlbumDiv>
                <S.TrackAlbumLinkA href="http://">
                  track__album-link
                </S.TrackAlbumLinkA>
              </S.TrackAlbumDiv>
              <S.TrackTimeDiv>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan />
              </S.TrackTimeDiv>
            </S.PlaylistTrackDiv>
          </S.PlaylistItemDiv>
        )}
      </S.ContentPlaylistDiv>
    </S.CenterBlockContentDiv>
  )
}

export default CenterBlockContent
import { useContext, useEffect, useState } from 'react'
import { loadingContext } from '../Context'
import PlayListItemSkeleton from './PlayListItemSkeleton'
import * as S from './CenterBlockContent.styles.js'
import { getAllTracks } from '../../api.js'
import { userContext } from '../../App.jsx'

const CenterBlockContent = () => {
  const { loading, setLoading } = useContext(loadingContext)
  const {  setCurrentTrack } = useContext(userContext)

  const [allTracks, setAllTracks] = useState([])
  const [getTracksError, setGetTracksError] = useState(null)

  useEffect(() => {
    getAllTracks()
      .then((allTracks) => {
        setAllTracks(allTracks)
      })
      .catch((error) => {
        console.log(`Ошибка загрузки`)
        setGetTracksError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const durationToString = (duration) => {
    let minutes = String(Math.trunc(duration / 60))
    let seconds = String(duration % 60)
    return `${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`
  }

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
          <>
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
            <PlayListItemSkeleton />
          </>
        ) : (
          allTracks.map((track) => {
            return (
              <S.PlaylistItemDiv
                key={track.id}
                onClick={() => {
                  setCurrentTrack(track)
                }}
              >
                <S.PlaylistTrackDiv>
                  <S.TrackTitleDiv>
                    <S.TrackTitleImageDiv>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>
                    </S.TrackTitleImageDiv>
                    <S.TrackTitleTextDiv>
                      <S.TrackTitleLinkA href="#">
                        {track.name} <S.TrackTitleSpan />
                      </S.TrackTitleLinkA>
                    </S.TrackTitleTextDiv>
                  </S.TrackTitleDiv>
                  <S.TrackAuthorDiv>
                    <S.TrackAuthorLinkA href="#">
                      {track.author}
                    </S.TrackAuthorLinkA>
                  </S.TrackAuthorDiv>

                  <S.TrackAlbumDiv>
                    <S.TrackAlbumLinkA href="#">
                      {track.album}
                    </S.TrackAlbumLinkA>
                  </S.TrackAlbumDiv>

                  <S.TrackTimeDiv>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackTimeSvg>
                    <S.TrackTimeTextSpan>
                      {durationToString(track.duration_in_seconds)}
                    </S.TrackTimeTextSpan>
                  </S.TrackTimeDiv>
                </S.PlaylistTrackDiv>
              </S.PlaylistItemDiv>
            )
          })
        )}

        {getTracksError ? (
          <p>
            Не удалось загрузить плейлист, попробуйте позже. {getTracksError}
          </p>
        ) : null}
      </S.ContentPlaylistDiv>
    </S.CenterBlockContentDiv>
  )
}

export default CenterBlockContent
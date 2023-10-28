import { useContext } from 'react'
import loadingContext from '../Context'
import * as S from './Bar.styles'

const Bar = () => {
  const loading = useContext(loadingContext)

  return (
    <S.BarDiv>
      <S.BarContentDiv>
        <S.BarPlayerProgressDiv/>
        <S.BarPlayerBlockDiv>
          <S.BarPlayerDiv>
            <S.PlayerControlsDiv>
              <S.PlayerBtnPrevDiv>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrevDiv>
              <S.PlayerBtnPlayDiv className="_btn">
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlayDiv>
              <S.PlayerBtnNextDiv>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNextDiv>
              <S.PlayerBtnRepeatDiv className="_btn-icon">
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeatDiv>
              <S.PlayerBtnShuffleDiv className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffleDiv>
            </S.PlayerControlsDiv>

            <S.PlayerTrackPlayDiv>
              <S.TrackPlayContainDiv>
                <S.TrackPlayImageDiv>
                  <S.TrackPlaySvg alt="music">
                    {loading ? null : (
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    )}
                  </S.TrackPlaySvg>
                </S.TrackPlayImageDiv>
                <S.TrackPlayAuthorDiv>
                  {loading ? (
                    <S.Rectangle5915Div/>
                  ) : (
                    <S.TrackPlayAuthorLinkA href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLinkA>
                  )}
                </S.TrackPlayAuthorDiv>
                <S.TrackPlayAlbumDiv>
                  {loading ? (
                    <S.Rectangle5915Div/>
                  ) : (
                    <S.TrackPlayAlbumLinkA href="http://">
                      Баста
                    </S.TrackPlayAlbumLinkA>
                  )}
                </S.TrackPlayAlbumDiv>
              </S.TrackPlayContainDiv>

              <S.TrackPlayLikeDisDiv>
                <S.TrackPlayLikeDiv className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLikeDiv>
                <S.TrackPlayDislikeDiv className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislikeDiv>
              </S.TrackPlayLikeDisDiv>
            </S.PlayerTrackPlayDiv>
          </S.BarPlayerDiv>
          <S.BarVolumeBlockDiv>
            <S.VolumeContentDiv>
              <S.VolumeImageDiv>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImageDiv>
              <S.VolumeProgressDiv className="_btn">
                <S.VolumeProgressLineInput
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgressDiv>
            </S.VolumeContentDiv>
          </S.BarVolumeBlockDiv>
        </S.BarPlayerBlockDiv>
      </S.BarContentDiv>
    </S.BarDiv>
  )
}

export default Bar
import * as S from './CenterBlockContent.styles.js'

const PlayListItemSkeleton = () => {
  return (
    <S.PlaylistItemDiv>
      <S.PlaylistTrackDiv>
        <S.TrackTitleDiv>
          <S.TrackTitleImageSkeletonDiv>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImageSkeletonDiv>
          <S.TrackTitleTextDiv>
            <S.Rectangle11Div />
          </S.TrackTitleTextDiv>
        </S.TrackTitleDiv>

        <S.TrackAuthorDiv>
          <S.Rectangle12Div />
        </S.TrackAuthorDiv>

        <S.TrackAlbumDiv>
          <S.Rectangle13Div />
        </S.TrackAlbumDiv>

        <S.TrackTimeDiv>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeTextSpan>0:00</S.TrackTimeTextSpan>
        </S.TrackTimeDiv>
      </S.PlaylistTrackDiv>
    </S.PlaylistItemDiv>
  )
}

export default PlayListItemSkeleton

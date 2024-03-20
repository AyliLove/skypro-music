import styled, { keyframes } from 'styled-components'

const SkeletonAnim = keyframes`
    0%   {
        background-color: #313131;
    }
    50%  {
        background-color: rgb(167, 167, 167);
    }
    100%  {
        background-color: #313131;
    }
`

export const CenterBlockContentDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const ContentTitleDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  /* justify-content: space-between; */
  margin-bottom: 24px;
`
export const ContentPlaylistDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: calc(100vh - 500px);
  overflow-y: scroll;
`
export const PlaylistTitleColDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: ${(props) => props.$width}px;
  text-align: ${(props) => (props.$col04 ? 'end' : null)};
`
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlaylistItemDiv = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrackDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackTitleDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`
export const TrackTitleImageDiv = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTitleImageSkeletonDiv = styled(TrackTitleImageDiv)`
  animation: ${SkeletonAnim} 3s linear infinite both;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTitleTextDiv = styled.div``

export const TrackAuthorDiv = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const TrackAlbumDiv = styled.div`
  width: 245px;
`
export const TrackTitleLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthorLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackAlbumLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTimeDiv = styled.div``

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const TrackTimeTextSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
export const Rectangle11Div = styled.div`
  width: 356px;
  height: 19px;
  flex-shrink: 0;
  background: #313131;
  animation: ${SkeletonAnim} 3s linear infinite both;
`
export const Rectangle12Div = styled.div`
  width: 271px;
  height: 19px;
  flex-shrink: 0;
  background: #313131;
  animation: ${SkeletonAnim} 3s linear infinite both;
`
export const Rectangle13Div = styled.div`
  width: 225px;
  height: 19px;
  flex-shrink: 0;
  background: #313131;
  animation: ${SkeletonAnim} 3s linear infinite both;
`

export const PurpleDot = styled.div`
  width: 150px;
  height: 15px;
  background-color: purple;
  border-radius: 50%;
`

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const BlinkingDot = styled(PurpleDot)`
  animation: ${blinkAnimation} 1s infinite;
`

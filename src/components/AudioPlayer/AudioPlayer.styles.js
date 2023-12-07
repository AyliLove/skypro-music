import styled from 'styled-components'

export const BarDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const BarContentDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const BarPlayerProgressDiv = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const BarPlayerBlockDiv = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const BarPlayerDiv = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const PlayerControlsDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const PlayerBtnPrevDiv = styled(PlayerBtn)`
  margin-right: 23px;
`
export const PlayerBtnPlayDiv = styled(PlayerBtn)`
  margin-right: 23px;
`
export const PlayerBtnNextDiv = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`
export const PlayerBtnRepeatDiv = styled(PlayerBtn)`
  margin-right: 24px;
`
export const PlayerBtnShuffleDiv = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`
export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$stroke ? '#D9D9D9' : '#696969')};
`
export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerTrackPlayDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContainDiv = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImageDiv = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-column: 1;
  grid-area: image;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlayAuthorDiv = styled.div`
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 2;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
export const Rectangle5915Div = styled.div`
  width: 59px;
  height: 15px;
  flex-shrink: 0;
  background: #313131;
`
export const TrackPlayAuthorLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackPlayAlbumDiv = styled.div`
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLinkA = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeDisDiv = styled.div`
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
  margin-left: 26%;
`
export const TrackPlayLikeDiv = styled.div`
  padding: 5px;
`
export const TrackPlayDislikeDiv = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`
export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
export const BarVolumeBlockDiv = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContentDiv = styled.div`
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
  -webkit-box-pack: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
`
export const VolumeImageDiv = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgressDiv = styled.div`
  width: 109px;
`
export const VolumeProgressLineInput = styled.input`
  width: 109px;
`
export const TimeCode = styled.div`
    color: #696969;
    text-align: end;
    margin: 10px 50px 10px;
`
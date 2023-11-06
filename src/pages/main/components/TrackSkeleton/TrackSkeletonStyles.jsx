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
`;

export const PlaylistItemSkeleton = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`

export const PlaylistTrackSkeleton = styled.div`
  display: flex;
  align-items: center;
`

export const TrackTitleImageSkeleton = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  animation: ${SkeletonAnim} 3s linear infinite both;
  border-radius: 2px;
`
export const TrackAuthorSkeleton = styled.div`
  height: 19px;
  width: 356px;
  margin-right: 60px;
  animation: ${SkeletonAnim} 3s linear infinite both;
`

export const TrackAlbumSkeleton = styled.div`
  height: 19px;
  width: 271px;
  animation: ${SkeletonAnim} 3s linear infinite both;
  margin-right: 50px;
`

export const TrackTimeSkeleton = styled.div`
  height: 19px;
  width: 305px;
  animation: ${SkeletonAnim} 3s linear infinite both;
`



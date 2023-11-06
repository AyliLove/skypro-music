import React from "react";
import * as S from "./TrackSkeletonStyles"


const TrackSkeleton = () => {

  function Skeleton() {
    return (
      <S.PlaylistItemSkeleton>
        <S.PlaylistTrackSkeleton>
          <S.TrackTitleImageSkeleton></S.TrackTitleImageSkeleton>
          <S.TrackAuthorSkeleton></S.TrackAuthorSkeleton>
          <S.TrackAlbumSkeleton></S.TrackAlbumSkeleton>
          <S.TrackTimeSkeleton></S.TrackTimeSkeleton>
        </S.PlaylistTrackSkeleton>
      </S.PlaylistItemSkeleton>
    )
  }

  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export default TrackSkeleton
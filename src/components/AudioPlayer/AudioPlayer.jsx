import { useContext, useEffect, useRef, useState } from 'react'
import { loadingContext } from '../../Context'
import * as S from './AudioPlayer.styles'
import {
  ProgressInputTrack,
  ProgressInputTrackDefault,
  ProgressInputVolume,
} from '../ProgressBar/ProgressBar'
import { userContext } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import {
  nextTrack,
  prevTrack,
  playTrack,
  stopTrack,
  shuffleTrack,
  clearCurrentTrack,
} from '../../store/playerSlice'

const AudioPlayer = () => {
  const dispatch = useDispatch()
  // const { currentTrack } = useContext(userContext)
  const { currentTrack, currentTrackId, playList } = useSelector(
    (state) => state.playerApp,
  )

  // const [isPlaying, setIsPlaying] = useState(false)
  const isPlaying = useSelector((state) => state.playerApp.isPlaying)
  const isShuffle = useSelector((state) => state.playerApp.isShuffle)

  const [isLoop, setIsLoop] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef('')

  const track_file = currentTrack.track_file

  // const handlePlay = () => {
  //   dispatch(playTrack())
  //   console.log('заиграли снова')
  //   audioRef.current.play().catch((error) => {
  //     console.log(error)
  //     audioRef.current.pause()
  //   })
  // }

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handlePlay = () => {
    dispatch(playTrack())
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => audioRef.current.pause())
    }
  }

  const handleStop = () => {
    dispatch(stopTrack())
    audioRef.current.pause()
  }

  const handleLoop = () => {
    audioRef.current.loop = !isLoop
    setIsLoop(!isLoop)
  }

  const handleNextTrack = () => {
    dispatch(nextTrack())
  }

  const handlePrevTrack = () => {
    if (audioRef.current.currentTime > 5) audioRef.current.currentTime = 0
    else dispatch(prevTrack())
  }

  const handleShuffleTrack = () => {
    dispatch(shuffleTrack())
  }

  const handleEndTrack = () => {
    if (playList[currentTrackId + 1]) {
      dispatch(nextTrack())
    } else {
      dispatch(stopTrack())
      dispatch(clearCurrentTrack())
    }
    setCurrentTime(timeToString(0))
  }

  const timeToString = (time) => {
    time = Math.round(time)
    let minutes = String(Math.trunc(time / 60))
    let seconds = String(time % 60)
    return `${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`
  }

  const awaitImplementation = () => {
    alert('Функционал еще не реализован')
  }

  useEffect(() => {
    handlePlay()
  }, [currentTrack])

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current?.currentTime && audioRef.current?.duration) {
        setCurrentTime(timeToString(audioRef.current.currentTime))
        setDuration(timeToString(audioRef.current.duration))
      } else {
        setCurrentTime(0)
        setDuration(0)
      }
    }

    audioRef.current.addEventListener('ended', handleEndTrack)
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    return () => {
      audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate)
      audioRef.current?.removeEventListener('ended', handleEndTrack)
    }
  })

  return (
    <>
      <audio src={track_file} ref={audioRef}></audio>
      <S.BarDiv>
        <S.BarContentDiv>
          <S.TimeCode>
            {currentTime} / {duration}
          </S.TimeCode>

          {audioRef.current && <ProgressInputTrack ref={audioRef} />}

          <S.BarPlayerBlockDiv>
            <S.BarPlayerDiv>
              <S.PlayerControlsDiv>
                <S.PlayerBtnPrevDiv onClick={handlePrevTrack}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrevDiv>

                {isPlaying ? (
                  <S.PlayerBtnPlayDiv className="_btn" onClick={handleStop}>
                    <S.PlayerBtnPlaySvg alt="stop">
                      <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlayDiv>
                ) : (
                  <S.PlayerBtnPlayDiv className="_btn" onClick={handlePlay}>
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlayDiv>
                )}

                <S.PlayerBtnNextDiv onClick={handleNextTrack}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNextDiv>

                <S.PlayerBtnRepeatDiv
                  // className="_btn-icon"
                  onClick={handleLoop}
                >
                  <S.PlayerBtnRepeatSvg alt="repeat" $stroke={isLoop}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeatDiv>

                <S.PlayerBtnShuffleDiv onClick={handleShuffleTrack}>
                  <S.PlayerBtnShuffleSvg alt="shuffle" $stroke={isShuffle}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffleDiv>
              </S.PlayerControlsDiv>

              <S.PlayerTrackPlayDiv>
                <S.TrackPlayContainDiv>
                  <S.TrackPlayImageDiv>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImageDiv>
                  <S.TrackPlayAuthorDiv>
                    <S.TrackPlayAuthorLinkA href="http://">
                      {currentTrack.name}
                    </S.TrackPlayAuthorLinkA>
                  </S.TrackPlayAuthorDiv>
                  <S.TrackPlayAlbumDiv>
                    <S.TrackPlayAlbumLinkA href="http://">
                      {currentTrack.author}
                    </S.TrackPlayAlbumLinkA>
                  </S.TrackPlayAlbumDiv>
                </S.TrackPlayContainDiv>

                <S.TrackPlayLikeDisDiv>
                  <S.TrackPlayLikeDiv onClick={awaitImplementation}>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLikeDiv>
                  <S.TrackPlayDislikeDiv onClick={awaitImplementation}>
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
                  <ProgressInputVolume ref={audioRef} />
                </S.VolumeProgressDiv>
              </S.VolumeContentDiv>
            </S.BarVolumeBlockDiv>
          </S.BarPlayerBlockDiv>
        </S.BarContentDiv>
      </S.BarDiv>
    </>
  )
}

export default AudioPlayer
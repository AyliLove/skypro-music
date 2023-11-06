import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import * as S from "./mainStyles"
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import NavMenu from "../components/NavMenu/NavMenu";
import TrackList from "../components/TrackList/TrackList";
import SideBar from "../components/SideBar/SideBar";
import LoadingContext from '../components/context';
import { getTodos } from "../../../api.js";



export function Main() {

  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([]);
  const [loadings, setLoadings] = useState(true)
  const [addTracksError, setAddTracksError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timeout);
  }, [])

  useEffect(() => {
    getTodos().then((tracks) => {
      console.log(tracks)
      setTracks(tracks);
    }).catch(() => {
      setAddTracksError(true);
    }).finally(() => {
      setLoadings(false);
    })
  }, [])

  return (

    <LoadingContext.Provider
      value={{ loading, setLoading, tracks, setTracks, loadings, setLoadings, addTracksError, setAddTracksError, currentTrack, setCurrentTrack }}>
      <div>
        <S.Wrapper>
          <S.Container>
            <S.Main className="main">
              <NavMenu />
              <TrackList />
              <SideBar />
            </S.Main>
            {currentTrack ? <AudioPlayer /> : null}
            <footer className="footer" />
          </S.Container>
        </S.Wrapper>
      </div>
    </LoadingContext.Provider>
  );
}


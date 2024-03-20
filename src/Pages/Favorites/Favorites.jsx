import { useDispatch, useSelector } from 'react-redux'
import CenterBlockContent from '../../components/CenterBlockContent/CenterBlockContent'
import CenterBlockFilter from '../../components/CenterBlockFilter/CenterBlockFilter'
import CenterBlockSearch from '../../components/CenterBlockSearch/CenterBlockSearch'
import * as S from './Favorites.styles'
import { useContext } from 'react'
import { loadingContext } from '../../Context'
import { getAllTracks } from '../../api'
import { setPlayList } from '../../store/playerSlice'
import { useGetFavoritesTracksQuery } from '../../store/api/tracksApi'

export const Favorites = () => {
  const dispatch = useDispatch()
  const { getTracksError, setGetTracksError } = useContext(loadingContext)
  const { loading, setLoading } = useContext(loadingContext)
  const isPlaying = useSelector((state) => state.playerApp.isPlaying)
  const searchString = useSelector((state) => state.playerApp.searchString)

  const { data, isLoading, error } = useGetFavoritesTracksQuery()

  const filterTracks = () => {
    if (data?.length) {
      let filteredTracks = [...data]

      if (searchString?.length) {
        filteredTracks = filteredTracks.filter((el) =>
          el.name.toLowerCase().includes(searchString.toLowerCase()),
        )
      }
      return filteredTracks
    }
    return []
  }

  const tracks = filterTracks()

  return (
    <>
      <CenterBlockSearch />
      <S.CenterBlockH2>Избранные треки</S.CenterBlockH2>
      <CenterBlockContent tracks={tracks} isLoading={isLoading} error={error} />
    </>
  )
}

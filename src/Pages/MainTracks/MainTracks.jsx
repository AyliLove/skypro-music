import { useDispatch, useSelector } from 'react-redux'
import { getAllTracks } from '../../api'
import CenterBlockContent from '../../components/CenterBlockContent/CenterBlockContent'
import CenterBlockFilter from '../../components/CenterBlockFilter/CenterBlockFilter'
import CenterBlockSearch from '../../components/CenterBlockSearch/CenterBlockSearch'
import * as S from './MainTracks.styles'
import { setPlayList } from '../../store/playerSlice'
import { useContext, useEffect } from 'react'
import { loadingContext } from '../../Context'
import { useGetAllTracksQuery } from '../../store/api/tracksApi'

export const MainTracks = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector((state) => state.playerApp.isPlaying)
  const filters = useSelector((state) => state.playerApp.filters)
  const searchString = useSelector((state) => state.playerApp.searchString)
  console.log(searchString)



  const { data, isLoading, error } = useGetAllTracksQuery()

  useEffect(() => {
    if (data?.length) dispatch(setPlayList({ playList: data }))
  }, [data])

  const filterTracks = () => {
    if (data?.length) {
      let filteredTracks = [...data]

      if (filters.authors.length) {
        filteredTracks = filteredTracks.filter((el) =>
          filters.authors.includes(el.author),
        )
      }
      if (filters.genre.length) {
        filteredTracks = filteredTracks.filter((el) =>
          filters.genre.includes(el.genre),
        )
      }

      switch (filters.dateOrder) {
        case 'Сначала новые':
          filteredTracks.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date),
          )
          break
        case 'Сначала старые':
          filteredTracks.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date),
          )
          break
      }

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
      <S.CenterBlockH2>Все треки</S.CenterBlockH2>
      <CenterBlockFilter />
      <CenterBlockContent tracks={tracks} isLoading={isLoading} error={error} />
    </>
  )
}

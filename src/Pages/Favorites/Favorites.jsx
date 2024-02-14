import { useDispatch, useSelector } from 'react-redux'
import CenterBlockContent from '../../components/CenterBlockContent/CenterBlockContent'
import CenterBlockFilter from '../../components/CenterBlockFilter/CenterBlockFilter'
import CenterBlockSearch from '../../components/CenterBlockSearch/CenterBlockSearch'
import * as S from './Favorites.styles'
import { useContext } from 'react'
import { loadingContext } from '../../Context'
import { getAllTracks } from '../../api'
import { setPlayList } from '../../store/playerSlice'
import { useGetFavoritesTracksQuery } from '../../favoritesApi'

export const Favorites = () => {
  const dispatch = useDispatch()
  const { getTracksError, setGetTracksError } = useContext(loadingContext)
  const { loading, setLoading } = useContext(loadingContext)
  const isPlaying = useSelector((state) => state.playerApp.isPlaying)

  const { favoritesTracks, isError } = useGetFavoritesTracksQuery()

  const handleGetFavoritesTracks = () => {
    if (isError) console.log(`Ошибка загрузки`)
    else {
      console.log('3')

      dispatch(setPlayList({ playList: favoritesTracks }))
      console.log('получили все треки')
      console.log(favoritesTracks)
    }

    // getAllTracks()
    //   .then((allTracks) => {
    //     dispatch(setPlayList({ playList: allTracks }))
    //     console.log('получили все треки')
    //     console.log(allTracks)
    //   })
    //   .catch((error) => {
    //     console.log(`Ошибка загрузки`)
    //     setGetTracksError(error.message)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //     console.log(isPlaying)
    //   })
  }

  return (
    <>
      <CenterBlockSearch />
      <S.CenterBlockH2>Избранные треки</S.CenterBlockH2>
      <CenterBlockFilter />
      <CenterBlockContent getAnyTracks={handleGetFavoritesTracks} />
    </>
  )
}
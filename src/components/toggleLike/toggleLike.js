import {
  useSetDisLikeMutation,
  useSetLikeMutation,
} from '../../store/api/tracksApi'

export const handleToggleLike = (e, id, isLiked) => {
  const [setDisLike] = useSetDisLikeMutation()
  const [setLike] = useSetLikeMutation()
  e.stopPropagation()
  isLiked ? setDisLike({ id }) : setLike({ id })
}

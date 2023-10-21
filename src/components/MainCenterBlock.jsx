import CenterBlockContent from './CenterBlockContent'
import CenterBlockFilter from './CenterBlockFilter'
import CenterBlockSearch from './CenterBlockSearch'

const MainCenterBlock = () => {
  return (
    <div className="main__centerblock centerblock">
      <CenterBlockSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <CenterBlockFilter />
      <CenterBlockContent />
    </div>
  )
}

export default MainCenterBlock
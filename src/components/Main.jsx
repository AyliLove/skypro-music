import MainCenterBlock from './MainCenterBlock'
import MainNav from './MainNav'
import MainSideBar from './MainSideBar'

const Main = () => {
  return (
    <main className="main">
      <MainNav />
      <MainCenterBlock />
      <MainSideBar />
    </main>
  )
}

export default Main
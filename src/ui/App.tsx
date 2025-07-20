import './App.css'
import Banner from './components/banner'
import MusicPlayer from './components/music-player'
import NavbarTop from './components/navbar-top'
import Table from './components/table'

function App() {

  return (
    <div className='flex'>
      <div className='flex-1/6 pt-16 flex flex-col justify-between'>
        <NavbarTop />
        <div className='flex flex-col'>
          <MusicPlayer />
        </div>
      </div>
      <div className='flex-5/6 h-[100vh] overflow-scroll'>
        <Banner />
        <div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App

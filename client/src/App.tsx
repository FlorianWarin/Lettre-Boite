import { Routes, Route } from 'react-router-dom'
import MainMenuButton from './Components/mainMenuButton'
import Films from './pages/Films'
import Series from './pages/Series'
import Livres from './pages/Livres'
import Musique from './pages/Musique'
import JeuxVideos from './pages/JeuxVideos'

type Priority = 'Urgente' | 'Moyenne' | 'Basse'
type Todo = {
  id: number
  title: string
  priority : Priority
}

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black', marginBottom: '60px', marginTop: '20px' }}>Lettre-Boite</h1>
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl" style={{ maxWidth: '100%' }}>
          <MainMenuButton text="Films" image="/Icones/Camera.png" route="/films"/>
          <MainMenuButton text="Séries" image="/Icones/TV.png" route="/series"/>
          <MainMenuButton text="Livres" image="/Icones/Book.png" route="/livres"/>
          <MainMenuButton text="Musique" image="/Icones/Music.png" route="/musique"/>
          <MainMenuButton text="Jeux-vidéos" image="/Icones/Controller.png" route="/jeux-videos"/>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/series" element={<Series />} />
      <Route path="/livres" element={<Livres />} />
      <Route path="/musique" element={<Musique />} />
      <Route path="/jeux-videos" element={<JeuxVideos />} />
    </Routes>
  )
}

export default App

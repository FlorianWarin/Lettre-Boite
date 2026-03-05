import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainMenuButton from './Components/mainMenuButton'
import Films from './pages/Films'
import Series from './pages/Series'
import Livres from './pages/Livres'
import Musique from './pages/Musique'
import JeuxVideos from './pages/JeuxVideos'
import Home from './pages/Home'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/jeux-videos" element={<JeuxVideos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

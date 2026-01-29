import MainMenuButton from './Components/mainMenuButton'


type Priority = 'Urgente' | 'Moyenne' | 'Basse'
type Todo = {
  id: number
  title: string
  priority : Priority
}

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black', marginBottom: '60px', marginTop: '20px' }}>Lettre-Boite</h1>
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl" style={{ maxWidth: '100%' }}>
        <MainMenuButton text="Films" image="/Icones/Camera.png"/>
        <MainMenuButton text="Séries" image="/Icones/TV.png"/>
        <MainMenuButton text="Livres" image="/Icones/Book.png"/>
        <MainMenuButton text="Musique" image="/Icones/Music.png"/>
        <MainMenuButton text="Jeux-vidéos" image="/Icones/Controller.png"/>
        </div>
      </div>
    </div>
  )
    
}

export default App

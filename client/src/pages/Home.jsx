import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainMenuButton from '../Components/mainMenuButton';



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


export default Home;
import { useNavigate } from 'react-router-dom'

const JeuxVideos = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen p-6 flex flex-col">
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#af7933',
          color: '#f7dcbe',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
        }}
      >
        ← Retour
      </button>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black' }}>Jeux-Vidéos</h1>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>Contenu des jeux vidéos à venir...</p>
        </div>
      </div>
    </div>
  )
}

export default JeuxVideos

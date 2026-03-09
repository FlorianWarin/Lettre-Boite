import { useNavigate } from 'react-router-dom'
import SearchBarre from '../Components/searchBarre'
import { useState } from 'react'

const Films = () => {


  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchTerm) => {
  if (searchTerm.length < 2) return; 
  try {
    const response = await fetch(`http://localhost:8080/api/search?q=${searchTerm}`)
    const results = await response.json()
    
    setMovies(results.description || []) 
  } catch (error) {
    console.error('Error fetching search results:', error)
  }
}

  

  


  return (
    <div className="min-h-screen p-6 flex flex-row justify-between">


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

      <div className='flex flex-col'>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Films</h1>
        <SearchBarre placeholder="Rechercher des films..." onSearch={handleSearch}/>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%', 
          marginTop: '10px' 
        }}>
          {movies.map((movie) => (
            <div 
              key={movie['#IMDB_ID']}
              onClick={() => navigate(`/film/${movie['#IMDB_ID']}`, { state: { movieData: movie } })}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: '600px',
                backgroundColor: '#f7dcbe', 
                border: '2px solid #af7933',
                borderRadius: '8px',
                padding: '10px',
                marginBottom: '10px',
                cursor: 'pointer'
              }}
            >
              {/* Affiche du film */}
              {movie['#IMG_POSTER'] && (
                <img 
                  src={movie['#IMG_POSTER']} 
                  alt="Affiche" 
                  style={{ width: '50px', height: '75px', objectFit: 'cover', borderRadius: '4px', marginRight: '15px' }} 
                />
              )}
              
              {/* Titre et année */}
              <div>
                <h3 style={{ margin: 0, color: 'black', fontSize: '18px' }}>{movie['#TITLE']}</h3>
                <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>{movie['#YEAR']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
        Mes Films
      </button>

        
      
    </div>
  )
}

export default Films

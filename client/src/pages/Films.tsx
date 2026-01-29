import { useNavigate } from 'react-router-dom'
import SearchBarre from '../Components/searchBarre'

const Films = () => {
  const navigate = useNavigate()

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm)
  }


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
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Films</h1>
      <SearchBarre placeholder="Rechercher des films..." onSearch={handleSearch} />
      
    </div>
  )
}

export default Films

import { useNavigate, useParams, useLocation } from 'react-router-dom'
import SearchBarre from '../Components/searchBarre'
import { useState } from 'react'

const DetailsFilms = () => {

    const { id } = useParams()
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState("");

    const location = useLocation();
    
    const movie = location.state?.movieData;

    

   


    const navigate = useNavigate();



    

    return (
        <div className="min-h-screen p-10 bg-[#f7dcbe] flex flex-col items-center">
      
      
      <div className="w-full max-w-6xl mb-6">
        <button
          onClick={() => navigate('/films')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#af7933',
            color: '#f7dcbe',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          ← Retour
        </button>
      </div>

      
      <div className="flex flex-row w-full max-w-6xl gap-10 items-start">
        
        
        <div className="flex flex-col w-1/3 min-w-[300px]">
          
          <div className="w-full aspect-[120/160] bg-transparent border-2 border-black  flex items-center justify-center">
            <img src={movie["#IMG_POSTER"]}></img>
          </div>

          
          <div className="w-full border-collapse border-2 border-black bg-white rounded-b-lg overflow-hidden">
              <div className="border-b border-gray-300 flex justify-center">
                <p>{movie['#TITLE']}</p>
              </div>
              <div className="border-b border-gray-300 flex justify-center">
                <p>{movie["#YEAR"]}</p>
              </div>
            
        </div>
        </div>

        
        <div className="flex flex-col flex-1 gap-6">
          
          
          <div className="bg-white p-4 rounded-lg self-end border-2 border-black shadow-md">
            <div className="rating rating-lg gap-2">
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
            </div>
          </div>

          
          <div className="bg-white border-2 border-black rounded-lg p-8 min-h-[500px] shadow-inner flex items-center justify-center">
            <p className="text-gray-500 text-xl font-medium">(description)</p>
          </div>

        </div>

      </div>

      
    </div>
  
    );

}

export default DetailsFilms;
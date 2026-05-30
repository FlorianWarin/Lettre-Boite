import { useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { useParams } from 'next/dist/client/components/navigation';

const DetailsFilms = () => {

    const { id } = useParams()
    const [note, setNote] = useState(1.5);
    const [commentaire, setCommentaire] = useState("");

    

    const userName = localStorage.getItem("userName")

    const test = () => {
      console.log(localStorage.getItem("userName"))
    }

    
   





    

    return (
        <div className="min-h-screen p-10 bg-[#f7dcbe] flex flex-col items-center">
      
      
      <div className="w-full max-w-6xl mb-6">
        <Button asChild>
          <Link href="/pwa/client/categories/films">
            ← Retour
          </Link>
        </Button>
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
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-11" className="rating-hidden" />
              <input onChange={() => setNote(0.5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="0.5 star" />
              <input onChange={() => setNote(1)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-500" aria-label="1 star" />
              <input onChange={() => setNote(1.5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="1.5 star" defaultChecked />
              <input onChange={() => setNote(2)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-500" aria-label="2 star" />
              <input onChange={() => setNote(2.5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="2.5 star" />
              <input onChange={() => setNote(3)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-500" aria-label="3 star" />
              <input onChange={() => setNote(3.5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="3.5 star" />
              <input onChange={() => setNote(4)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-500" aria-label="4 star" />
              <input onChange={() => setNote(4.5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="4.5 star" />
              <input onChange={() => setNote(5)}type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-500" aria-label="5 star" />
            </div>
          </div>

          
          <textarea onChange= {(e) => setCommentaire(e.target.value)} placeholder='Votre avis sur le film...' className=" textarea bg-white w-full border-2 border-black rounded-lg p-8 min-h-[500px] shadow-inner flex items-center justify-center">
            
          </textarea>

          <Button onClick={() => saveReview(userName,note,commentaire,id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Sauvegarder votre avis</Button>

        </div>

      </div>

      
    </div>
  
    );

}

export default DetailsFilms;
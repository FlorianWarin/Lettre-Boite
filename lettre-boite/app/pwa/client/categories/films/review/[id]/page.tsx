'use client'

import { useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ReviewsFilms() {  
  const [note, setNote] = useState(1.5);
  const [commentaire, setCommentaire] = useState("");
  const searchParams = useSearchParams()
  const [movieData, setMovieData] = useState(null)

  useEffect(() => {
      const data = searchParams.get('data')
      if (data) {
          setMovieData(JSON.parse(data))
      }
  }, [searchParams])

  const userName = localStorage.getItem("userName")

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
        <div className="w-full bg-transparent border-2 border-black flex items-center justify-center p-2 rounded-t-lg">
          <img src={movieData?.["#IMG_POSTER"]} alt={movieData?.["#TITLE"]} className="max-w-full h-auto rounded" />
        </div>

        <div className="w-full border-collapse border-l-2 border-r-2 border-b-2 border-black bg-white rounded-b-lg overflow-hidden">
            <div className="border-b border-gray-300 flex justify-center p-2">
              <p className="font-semibold text-center">{movieData?.['#TITLE']}</p>
            </div>
            <div className="flex justify-center p-2">
              <p>{movieData?.["#YEAR"]}</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-6">
        <div className="bg-white p-4 rounded-lg self-end border-2 border-black shadow-md flex justify-center items-center">
          <div className="flex items-center gap-1">
            {[...Array(10)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index} className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="rating" 
                    value={currentRating} 
                    className="hidden"
                    onClick={() => setNote(currentRating)}
                  />
                  <svg 
                    className={`w-8 h-8 ${currentRating <= note ? 'text-orange-500' : 'text-gray-300'} transition-colors duration-200`} 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                </label>
              );
            })}
          </div>
        </div>

        <textarea onChange= {(e) => setCommentaire(e.target.value)} placeholder='Votre avis sur le film...' className="textarea bg-white w-full border-2 border-black rounded-lg p-8 min-h-[500px] shadow-inner flex items-center justify-center text-lg">
          
        </textarea>

        <Button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Sauvegarder votre avis</Button>

      </div>

    </div>
    
  </div>

  );

}
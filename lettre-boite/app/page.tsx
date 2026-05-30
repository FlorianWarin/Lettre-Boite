'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {

  const [userName,setUserName] = useState("")

  const [displayName,setDisplayName] = useState(localStorage.getItem("userName"))

  const saveUserName = () => {

    localStorage.setItem("userName",userName)
    setDisplayName(userName)

  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'black', marginBottom: '60px', marginTop: '20px' }}>Lettre-Boite</h1>
      <p className="mb-10">Welcome : {displayName}</p>
      <div className="flex flex-1 items-center justify-center w-full flex-col">
        <input type="text" placeholder="Username" className="input mb-10" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={saveUserName} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-error mb-10"> Save Username</button>
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl" style={{ maxWidth: '100%' }}>

          <Button asChild>
            <Link href="/pwa/client/categories/films">
              Films
            </Link>
          </Button>

          <Button asChild>
            <Link href="/pwa/client/categories/series">
              Séries
            </Link>
          </Button>
          <Button asChild>
            <Link href="/pwa/client/categories/livres">
              Livres
            </Link>
          </Button>
          <Button asChild>
            <Link href="/pwa/client/categories/musique">
              Musique
            </Link>
          </Button>
          <Button asChild>
            <Link href="/pwa/client/categories/jeux-vidéos">
              Jeux-vidéos
            </Link>
          </Button>


        </div>
      </div>
    </div>
  )
}

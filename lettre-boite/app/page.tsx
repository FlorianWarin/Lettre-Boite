'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Home() {
  const [userName, setUserName] = useState("")
  const [displayName, setDisplayName] = useState<string | null>(null)

  useEffect(() => {
    setDisplayName(localStorage.getItem("userName"))
  }, [])

  const saveUserName = () => {
    if (!userName.trim()) return
    localStorage.setItem("userName", userName)
    setDisplayName(userName)
    setUserName("")
  }

  const categories = [
    {
      name: 'Films',
      path: '/pwa/client/categories/films',
      icon: (
        <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      name: 'Séries',
      path: '/pwa/client/categories/series',
      icon: (
        <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h10M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm4-4l3 3M16 4l-3 3" />
        </svg>
      )
    },
    {
      name: 'Livres',
      path: '/pwa/client/categories/livres',
      icon: (
        <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Musique',
      path: '/pwa/client/categories/musique',
      icon: (
        <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      name: 'Jeux-vidéos',
      path: '/pwa/client/categories/jeuxVideos',
      icon: (
        <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zM7 9h.01M11 9h.01" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full py-12">
        
        {/* Title and Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-orange-950 tracking-tight mb-4">
            Lettre-Boite
          </h1>
          <p className="text-lg text-orange-800 font-medium">
            {displayName ? `Bienvenue, ${displayName}` : 'Bienvenue dans votre boîte de favoris'}
          </p>
        </div>

        {/* Profile/Username Section */}
        <div className="bg-orange-100 border-2 border-orange-200 p-6 rounded-2xl shadow-sm w-full max-w-md mb-12">
          <h2 className="text-xs font-bold text-orange-900 mb-4 uppercase tracking-wider text-center">
            {displayName ? "Changer de nom d'utilisateur" : "Définir un nom d'utilisateur"}
          </h2>
          <div className="flex gap-3">
            <Input 
              type="text" 
              placeholder="Nom d'utilisateur" 
              className="border-orange-300 focus-visible:ring-orange-500 bg-white" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  saveUserName()
                }
              }}
            />
            <Button 
              onClick={saveUserName} 
              className="bg-orange-200 hover:bg-orange-300 text-orange-900 transition-colors shrink-0"
            >
              Enregistrer
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 text-center">
            Vos Catégories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-full">
            {categories.map((cat) => (
              <Link key={cat.path} href={cat.path} className="block group">
                <div className="flex items-center p-5 bg-orange-100 border-2 border-orange-200 rounded-xl cursor-pointer hover:border-orange-400 transition-colors shadow-sm">
                  <div className="mr-4 bg-orange-200/50 p-2.5 rounded-lg group-hover:bg-orange-200 transition-colors">
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-orange-950">{cat.name}</h3>
                    <p className="text-xs text-orange-700">Accéder à la rubrique</p>
                  </div>
                  <span className="text-orange-400 group-hover:text-orange-700 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <footer className="text-center py-4 text-xs text-orange-600/70 border-t border-orange-200/40 mt-12">
        Lettre-Boite &copy; {new Date().getFullYear()} — Tous droits réservés
      </footer>
    </div>
  )
}

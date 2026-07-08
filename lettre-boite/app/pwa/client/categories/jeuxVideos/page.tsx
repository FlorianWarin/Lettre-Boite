'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function JeuxVideos() {

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm.length < 2) return
    
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 500))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="flex justify-between items-start mb-8">
        <Button asChild variant="outline" className="border-orange-200 hover:bg-orange-100">
          <Link href="/">← Retour</Link>
        </Button>
        <Button variant="secondary" className="bg-orange-200 hover:bg-orange-300 text-orange-900">
          Mes Jeux Vidéos
        </Button>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-orange-950 mb-8">Jeux Vidéos</h1>
        
        <Input 
          className="mb-8 border-orange-300 focus-visible:ring-orange-500"
          placeholder="Rechercher des jeux vidéos..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(inputValue)
            }
          }}
          disabled={isLoading}
        />

        <div className="w-full space-y-4">
          {results.map((item, index) => (
            <div key={index} className="flex items-center w-full p-4 bg-orange-100 border-2 border-orange-200 rounded-xl cursor-pointer hover:border-orange-400 transition-colors shadow-sm">
              <div>
                <h3 className="font-bold text-lg text-orange-950">{item['#TITLE']}</h3>
                <p className="text-sm text-orange-700">{item['#YEAR']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

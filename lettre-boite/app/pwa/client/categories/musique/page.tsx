'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Musique() {

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm.length < 1) return
    
    setIsLoading(true)
    try {
      const response = await fetch(`/api/client/categories/music`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ albumName: searchTerm })
      })
      if (!response.ok) throw new Error('Erreur réseau')
      
      const results = await response.json()

      const releases = results.releases ?? [];
      const seen = new Set();
      const unique = releases.filter((r) => {
        const key = `${r.title?.toLowerCase()}|${r['artist-credit']?.[0]?.name?.toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setResults(unique);
      } catch (error) {
      console.error('Erreur lors de la récupération:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="flex justify-between items-start mb-8">
        <Button asChild variant="outline" className="border-orange-200 hover:bg-orange-100">
          <Link href="/">← Retour</Link>
        </Button>
        <Button variant="secondary" className="bg-orange-200 hover:bg-orange-300 text-orange-900">
          Ma Musique
        </Button>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-orange-950 mb-8">Musique</h1>
        
        <Input 
          className="mb-8 border-orange-300 focus-visible:ring-orange-500"
          placeholder="Rechercher de la musique..." 
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
          {results.map((item : any) => (
            <div key={item.id} className="flex items-center w-full p-4 bg-orange-100 border-2 border-orange-200 rounded-xl cursor-pointer hover:border-orange-400 transition-colors shadow-sm">
              <div>
                <h3 className="font-bold text-lg text-orange-950">{item.title}</h3>
                <p className="text-sm text-orange-600">{item['artist-credit']?.[0]?.name}</p>
                <p className="text-sm text-orange-700">{item.date?.split('-')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

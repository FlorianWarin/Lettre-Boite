'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

type Book = {
  key: string
  title?: string
  author_name?: string[]
  first_publish_year?: number
  cover_i?: number
}

export default function Livres() {

  const [results, setResults] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm.length < 1) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/client/categories/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchTerm })
      })
      if (!response.ok) throw new Error('Erreur réseau')

      const data = await response.json()
      setResults(data.docs ?? [])
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
          Mes Livres
        </Button>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-orange-950 mb-8">Livres</h1>

        <Input
          className="mb-8 border-orange-300 focus-visible:ring-orange-500"
          placeholder="Rechercher des livres..."
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
          {results.map((book) => (
            <div key={book.key} className="flex items-center w-full p-4 bg-orange-100 border-2 border-orange-200 rounded-xl cursor-pointer hover:border-orange-400 transition-colors shadow-sm">
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                  alt={book.title}
                  className="w-12 h-16 object-cover rounded-lg mr-4"
                />
              )}
              <div>
                <h3 className="font-bold text-lg text-orange-950">{book.title}</h3>
                <p className="text-sm text-orange-600">{book.author_name?.[0]}</p>
                <p className="text-sm text-orange-700">{book.first_publish_year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

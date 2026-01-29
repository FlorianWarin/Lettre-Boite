import { useState } from 'react'

interface SearchBarreProps {
  onSearch?: (searchTerm: string) => void
  placeholder?: string
}

const SearchBarre = ({ onSearch, placeholder = 'Rechercher...' }: SearchBarreProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch?.(value)
  }

  const handleClear = () => {
    setSearchTerm('')
    onSearch?.('')
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
      }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 40px 12px 16px',
            fontSize: '16px',
            border: '2px solid #af7933',
            borderRadius: '8px',
            backgroundColor: '#f7dcbe',
            color: '#2c2c2c',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#8b5a2b'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#af7933'
          }}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#af7933',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBarre

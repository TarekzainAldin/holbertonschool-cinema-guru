// src/components/general/SearchBar.jsx

import React from 'react'
import './general.css'

export default function SearchBar({ title, setTitle }) {
  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="ابحث..."
        className="search-input"
      />
    </div>
  )
}

import React from 'react'
import './general.css'

export default function SelectInput({ label, options, className, value, setValue }) {
  const handleSelect = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={`select-input ${className || ''}`}>
      {label && <label className="select-label">{label}</label>}
      <select value={value} onChange={handleSelect} className="select-element">
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

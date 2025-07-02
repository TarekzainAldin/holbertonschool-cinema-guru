import React from 'react'
import './general.css'

export default function Button({ label, className, onClick, icon }) {
  return (
    <button className={`custom-button ${className || ''}`} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  )
}

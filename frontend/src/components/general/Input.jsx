import React from 'react';
import './general.css'; // تأكد أن هذا الملف موجود ويحتوي على ستايلاتك العامة

function Input({ label, type, className = '', value, setValue, icon, inputAttributes = {} }) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          className="input-field"
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;

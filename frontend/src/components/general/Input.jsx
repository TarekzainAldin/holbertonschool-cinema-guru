import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // استيراد المكون
import './general.css';

function Input({ label, type, className = '', value, setValue, icon, inputAttributes = {} }) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />} {/* هنا */}
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

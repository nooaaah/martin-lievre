import { useState } from 'react';
import '../styles/DropDown.scss';

const DropDown = ({ titre, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onMouseEnter={() => setIsOpen(true)}
      >
        <h3 className="dropdown-title">{titre}</h3>
      </div>

      <div
        className={`dropdown-content ${isOpen ? 'show' : ''}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
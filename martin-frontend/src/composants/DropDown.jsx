import { useState } from 'react';

const DropDown = ({ titre, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <h3 className="text-white text-sm tracking-widest uppercase cursor-pointer hover:text-gray-300">
        {titre}
      </h3>
      {isOpen && (
        <div className="absolute top-full left-0 bg-black border border-gray-800 py-2 min-w-40 z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
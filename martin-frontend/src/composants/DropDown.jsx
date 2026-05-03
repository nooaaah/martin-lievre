import { useState } from 'react';

const DropDown = ({ titre, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <p className="text-gray-500 text-xs tracking-[2px] uppercase cursor-pointer hover:text-white transition-colors">
      {titre}
    </p>
    {isOpen && (
      <div className="absolute top-full left-0 pt-4 min-w-48 z-50">
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </div>
    )}
  </div>
);
};

export default DropDown;
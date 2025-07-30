import React, { useRef, useEffect } from 'react';

const DropdownMenu = ({ 
  trigger, 
  items, 
  isOpen, 
  onToggle, 
  className = "",
  position = "bottom-right" 
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "top-full left-0 mt-1";
      case "bottom-right":
        return "top-full right-0 mt-1";
      case "top-left":
        return "bottom-full left-0 mb-1";
      case "top-right":
        return "bottom-full right-0 mb-1";
      default:
        return "top-full right-0 mt-1";
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => onToggle(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={`absolute z-50 ${getPositionClasses()} bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-48`}
          onMouseLeave={() => onToggle(false)}
        >
          {items.map((item, index) => (
            <div key={index}>
              {item.separator ? (
                <div className="border-t border-gray-200 my-1"></div>
              ) : (
                <button
                  onClick={item.onClick}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                    item.destructive ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'
                  } ${item.highlighted ? 'bg-blue-50' : ''}`}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu; 
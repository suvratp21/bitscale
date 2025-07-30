import React, { useState } from 'react';
import { Star, Bookmark, MoreHorizontal, Cloud, ChevronDown, ArrowLeft, Save } from 'lucide-react';

const Header = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved', 'unsaved', 'saving'

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Listen for unsaved changes trigger from toolbar
  React.useEffect(() => {
    const handleUnsavedChanges = () => {
      setSaveStatus('unsaved');
    };

    document.addEventListener('triggerUnsavedChanges', handleUnsavedChanges);
    return () => {
      document.removeEventListener('triggerUnsavedChanges', handleUnsavedChanges);
    };
  }, []);

  const handleSave = () => {
    if (saveStatus === 'unsaved') {
      setSaveStatus('saving');
      // Simulate saving process
      setTimeout(() => {
        setSaveStatus('saved');
      }, 2000);
    }
  };

  const getSaveButtonContent = () => {
    switch (saveStatus) {
      case 'unsaved':
        return (
          <button 
            onClick={handleSave}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        );
      case 'saving':
        return (
          <div className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Saving changes</span>
          </div>
        );
      case 'saved':
        return (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Cloud className="w-4 h-4" />
            <span>Changes saved</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-200 space-y-3 sm:space-y-0">
      {/* Left side */}
      <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
        <button className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          onClick={handleBookmark}
          className={`hover:text-gray-600 transition-colors ${
            isBookmarked ? 'text-yellow-500' : 'text-gray-400'
          }`}
        >
          <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
        <h1 className="text-base sm:text-lg font-semibold text-gray-900 truncate">Bitscale workbook</h1>
        <button className="text-gray-400 hover:text-gray-600 ml-auto sm:ml-0">
          <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end">
        <div className="hidden sm:block">
          {getSaveButtonContent()}
        </div>
        
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded"></div>
          <span className="hidden sm:inline">2,450,005/9,900,000</span>
          <span className="sm:hidden">2.4M/9.9M</span>
        </div>
      </div>
    </div>
  );
};

export default Header; 
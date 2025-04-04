import { useState, useRef } from 'react';
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const FileInput = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return; // Exit if no file selected
    
    // Validate it's an image file
    if (!file.type.match('image.*')) {
      alert('Please select an image file (JPEG, PNG, etc.)');
      return;
    }

    const reader = new FileReader();
    
    reader.onload = () => {
      setPreviewUrl(reader.result); // Set the image data URL
    };
    
    reader.onerror = () => {
      console.error('Error reading file');
    };
    
    reader.readAsDataURL(file); // Convert to data URL
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input
    }
  };

  return (
    <div className={` max-w-[12.7rem] w-[12.7rem] min-w-[12.7rem] min-h-[8rem] h-auto max-h-auto ${previewUrl ? 'w-auto' : 'w-auto'}`}>
      {/* Hidden file input */}
      <input 
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
      
      {/* Conditional rendering */}
      {!previewUrl ? (
        <div 
          className="h-full min-h-[8rem] max-h-[7rem] w-full border-1 border-solid border-gray-200 rounded-sm flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
          onClick={triggerFileInput}
        >
          <div className="text-[1rem] font-medium text-gray-300 flex items-center gap-1">
            <FaPlus /> Add Your Logo
          </div>
        </div>
      ) : (
        <div className="relative group h-[8rem]">
          {/* Clickable preview area */}
          <div 
            className="relative cursor-pointer h-full"
            onClick={triggerFileInput}
          >
            {/* Preview image with fallback styling */}
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="h-full w-full object-fill rounded-sm bg-gray-100"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = ''; // Clear broken image
                setPreviewUrl(null); // Reset preview
              }}
            />
          </div>
          {/* Cancel button */}
          <button
            onClick={handleCancel}
            className="absolute top-1 left-1 bg-gray-700 font-medium text-white rounded-lg p-[1px] flex items-center justify-center shadow-md hover:bg-emerald-600 transition z-10 text-sm"
            aria-label="Remove image"
          >
            <MdCancel />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
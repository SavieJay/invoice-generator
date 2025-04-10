import React, { useState, useRef, useEffect } from 'react';

const AutoResizingTextarea = ({ placeholder, wid, midWid, height }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);
  
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.classList.add(wid);
    textarea.classList.add(midWid);
    textarea.classList.add(height);
  
    textarea.style.height = '15px';
    
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;
    
    console.log('Content height:', scrollHeight);
  }, [height, midWid, value, wid]);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <div className="">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        className="
           py-3 px-4 text-[.75rem] border border-gray-300 rounded-sm focus:outline-none focus:ring-0 
          focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] resize-none overflow-hidden"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AutoResizingTextarea;
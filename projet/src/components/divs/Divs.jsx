import React, { useState, useRef } from 'react'
import './divs.css'
import add from '../Assets/add.png'

import Formm from './form/Form';
const Divs = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    return (
    <div className='div'>
      <div className="file-input-container">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
          ref={fileInputRef}
        />
        <label htmlFor="file-input" className="file-label" onClick={handleImageClick}>
          <img className='img-add' src={add} alt="Upload File" />
        </label>
        {selectedFile && <p className='p-add'>الملف المختار: {selectedFile.name}</p>}
      </div>
      <div className='add-document'>
        <Formm/>
      </div>
    </div>
    );
}

export default Divs
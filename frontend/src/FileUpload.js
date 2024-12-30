import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('http://localhost:5000/api/files/upload', formData);
      alert('File uploaded successfully');
    } catch (err) { 
      alert('File upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
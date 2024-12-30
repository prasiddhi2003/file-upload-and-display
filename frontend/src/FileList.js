import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FileList.css'


function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data } = await axios.get('http://localhost:5000/api/files');
      setFiles(data);
    };
    fetchFiles();
  }, []);

  const fetchFromDB = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/files/view-db');
      console.log('Files in MongoDB:', data.files);
      alert(`Files in MongoDB: \n${data.files.map(f => f.filename).join('\n')}`);
    } catch (err) {
      alert('Failed to fetch files from MongoDB');
    }
  };

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            <a href={`http://localhost:5000/uploads/${file.filename}`} target="_blank" rel="noopener noreferrer">
              {file.filename}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={fetchFromDB}>View Files in MongoDB</button>
    </div>
  );
}

export default FileList;
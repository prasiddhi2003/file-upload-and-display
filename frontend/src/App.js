import React from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <h1>File Upload and Display</h1>
      <div className="content-container">
        <FileUpload />
        <FileList />
      </div>
    </div>
  );
}

export default App;

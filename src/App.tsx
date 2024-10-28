import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostPage } from './components/posts/PostPage';
import { PostDetails } from './components/posts/PostDetails';
import { HomePage } from './components/HomePage';
import './App.css';

function App() {
  return (
    <>
      <div>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>
        <div className="circle2 circle-7"></div>
        <div className="circle2 circle-8"></div>
        <div className="circle2 circle-9"></div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postPage" element={<PostPage />} />
          <Route path="/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

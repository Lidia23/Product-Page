import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostPage } from './posts/PostPage';
import { PostDetails } from './posts/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}
export default App;

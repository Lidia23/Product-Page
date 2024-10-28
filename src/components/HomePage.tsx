import React from 'react';
import { Main } from './Main';
import { PostPage } from './posts/PostPage';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <>
      <Main />
      <div className="mt-20px">
        <PostPage />
      </div>
      <Footer />
    </>
  );
}

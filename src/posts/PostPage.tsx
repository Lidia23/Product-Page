import React from 'react';
import { PostsList } from './PostsList';
import { Header } from '../Header';
import { useState, useEffect } from 'react';
import { getPosts } from './getPosts';
import { PostData } from './types';

export function PostPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  useEffect(() => {
    let cancel = false;
    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);
  if (isLoading) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  return (
    <>
      <Header posts={posts} onSelectCategory={setSelectedCategory} />
      <PostsList posts={filteredPosts} />
    </>
  );
}

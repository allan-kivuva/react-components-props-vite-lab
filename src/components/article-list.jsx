import React from 'react'
import article from './article'

export default function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article key={post.id} post={post} />
      ))}
    </main>
  );
}
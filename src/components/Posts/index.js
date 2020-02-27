import React from 'react';
import Comments from '../Comments';

import './styles.css';
 

export default function Posts({post}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={post.img} />
        <div className="card-info">
          <strong>{post.name}</strong>
          <span>{post.date}</span>
        </div>         
      </div>
      <div className="card-body">
        <p>
        {post.content}
        </p>
      </div>
      <Comments comments={post.comments} />
    </div>    
  );
}

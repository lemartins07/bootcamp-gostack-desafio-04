import React from 'react';
import Comment from '../Comment';

import './styles.css';
 

export default function Post({data}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={data.author.avatar} />
        <div className="card-info">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>         
      </div>
      <div className="card-body">
        <p>
        {data.content}
        </p>
      </div>
      {data.comments.map( comment => 
        <Comment key={comment.id} data={comment} />
      )}      
    </div>    
  );
}

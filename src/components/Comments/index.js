import React from 'react';

import './styles.css';



export default function Comments({comments}) {
  return (
    <div className="card-footer">
      {comments.map(comment => 
        <>
          <div>
            <img src={comment.img} /> 
            <p key={comment.name}><strong>{comment.name} </strong>{comment.content}</p>
          </div>          
        </>
      )}      
    </div>
  );
}

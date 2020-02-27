import React from 'react';

import './styles.css';

export default function Comment({data}) {
  return (
    <div className="card-footer">
      <div>
        <img src={data.author.avatar} /> 
        <p><strong>{data.author.name} </strong>{data.content}</p>
      </div>      
    </div>
  );
}

import React from 'react';
import './Card.css';

function Card({ id, name, email}) {
  // const { id, name, email } = props;
  return (
    <div className="card">
      <img alt="" src={`https://robohash.org/${id}?100x100`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
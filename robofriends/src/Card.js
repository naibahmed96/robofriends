import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="card">
      <img alt="" src="https://robohash.org/test" />
      <div>
        <h2>Jane Doe</h2>
        <p>janeDoe@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;
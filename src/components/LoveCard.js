import React, { useState } from 'react';

function LoveCard({ message }) {
  const [showAnniversary, setShowAnniversary] = useState(false);

  const handleClick = () => {
    setShowAnniversary(true);
  };

  return (
    <div className="love-card">
      <h2>Special Message</h2>
      <p>{message}</p>

      <div className={`anniversary-message ${showAnniversary ? 'show' : ''}`}>
        Happy 3 Months Anniversary! ❤️🎉
        <div className="hearts">
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
}

export default LoveCard;

import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      
      <div className="container">
  <button
    className={isTrue ? 'true' : 'false'}
    onClick={handleClick}
  >
    Button
  </button>
</div>

    </div>
  );
};

export default App;

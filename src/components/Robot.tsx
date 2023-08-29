import React, { useState } from 'react';
import Image from "../assets/robot-hanging-bg.png";

function Robot() {
  const [isSwinging, setIsSwinging] = useState(false);

  const toggleSwing = () => {
    setIsSwinging(true);
    setTimeout(() => setIsSwinging(false), 3000); // stops swinging after 3 seconds
  };

  return ( 
     <div className="w-64 mt-[-15rem] mb-24 ml-[50rem]">
        <img 
          src={Image} 
          alt="Robot" 
          className={`robot-image ${isSwinging ? 'swing-animation' : ''}`} 
          onClick={toggleSwing}
        />
     </div>
  )
}

export default Robot;

import React from "react";

export default function List({img, name, dob}) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="imgStyle">
          <img src={img} alt={name} />
          
            <h2> {name}</h2>
            <span> {dob}</span>
          
        </div>
      </div>
      </div>
  );
}

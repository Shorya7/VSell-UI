import React from "react";

const Card = () => {
  return (
    <div className="container">
      <div >
        <h1>Title</h1>
      </div>
      <div>
        <p id="price">$50</p>/month<p id="pm"></p>
      </div>
      <div>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
      </div>
      <div>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Card;
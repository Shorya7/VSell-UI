import React from "react";

const Card = () => {
  return (
    <div className="container">
      <div className="head">
        <h1>Title</h1>
      </div>
      <div className="card_price">
        <p id="price">$50</p>/month<p id="pm"></p>
      </div>
      <div className="items_list">
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
        <p>List Item 1</p>
      </div>
      <div className="card_button">
        <button className="sub">Button</button>
      </div>
    </div>
  );
};

export default Card;
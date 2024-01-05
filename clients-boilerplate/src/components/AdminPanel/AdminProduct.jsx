import React from "react";
import "./AdminPanel.css";
function AdminProduct({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
  handleDelete,
  handleUpdate,
  handleReplace,
}) {
  return (
    <div className="productadContainer">
      <div className="imgntitle">
        <img src={thumbnail} />
        <h3>{title}</h3>
      </div>
      <div className="otherInfo">
        <p>Price:{price}$</p>
        <p>discountPercentage:{discountPercentage}%</p>
        <p>rating:{rating}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleDelete(_id)}>Delete</button>
        <button onClick={() => handleUpdate(_id)}>Update</button>
        <button onClick={() => handleReplace(_id)}>Replace</button>
      </div>
      <p></p>
    </div>
  );
}

export default AdminProduct;

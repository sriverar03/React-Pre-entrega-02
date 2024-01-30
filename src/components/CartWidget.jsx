import React from "react";

export const CartWidget = () => {
  return (
    <button
      className=" btn btn-primary  position-relative"
      style={{ paddingLeft: "10px", paddingRight: "1px" }}
    >
      <i
        className="glyphicon glyphicon-shopping-cart"
        style={{ marginRight: "10px", fontSize: "20px" }}
      ></i>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ color: "white", backgroundColor: "orange", top: "-20px" }}
      >
        5<span className="visually-hidden"></span>
      </span>
    </button>
  );
};

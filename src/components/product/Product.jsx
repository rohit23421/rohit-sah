import React from "react";
import "./product.scss";

export default function Product({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "product active" : "product"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
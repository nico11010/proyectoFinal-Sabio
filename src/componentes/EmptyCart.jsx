import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h1>El carrito esta Vacio!</h1>
      <h3>Revisa nuestros productos</h3>
      <Link className="btn btn-dark" to="/">
        Ir a Home
      </Link>
    </div>
  );
};

export default EmptyCart;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className="btn btn-dark" onClick={restar} disabled={count === 0}>
        -
      </button>
      <span className="btn">{count}</span>
      <button className="btn btn-dark" onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default ItemCount;

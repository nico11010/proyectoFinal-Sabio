import { CiShoppingCart } from "react-icons/ci";
import Badge from "react-bootstrap/Badge";

const CartWidget = () => {
  return (
    <>
      <CiShoppingCart color="white" size={32} />
      <Badge bg="light" text="dark">
        5
      </Badge>
    </>
  );
};

export default CartWidget;

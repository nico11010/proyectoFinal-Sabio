import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../service/firebase";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [secondmail, setSecondmail] = useState(" ");
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.name || !buyer.adress) {
      setError("Campos Incompletos!");
    } else if (buyer.mail !== secondmail) {
      setError("Los mail ingresados no coinciden");
    } else {
      setError(null);
      let order = {
        comprador: buyer,
        compras: cart,
        total: total(),
        fecha: serverTimestamp(),
      };

      const ventas = collection(db, "orders");
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error));
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart></EmptyCart>;
  }

  return (
    <>
      {orderId ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            size="lg"
            variant="outlined"
            sx={{
              minWidthwidth: "500px",
              minHeightheight: "200px",
              maxWidth: "90%",
              padding: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ gap: 2 }}>
              <Typography level="title-lg" sx={{ fontSize: "1.8rem" }}>
                La Orden se ha realizado con exito!🙌{" "}
              </Typography>
              <Typography sx={{ fontSize: "1.5rem" }}>
                Su nro de pedido es: {orderId}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                Muchas Gracias por su compra.
              </Typography>
              <Link to="/" style={{ textAlign: "center" }}>
                <Button size="md" variant="solid" color="primary">
                  Ir a Inicio!
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          <h1>Complete sus datos</h1>
          {error && (
            <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
          )}
          <form
            className="p-4 bourder rounder shadow-sm bg-light"
            onSubmit={finalizarCompra}
          >
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Nombre"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="lastname"
              type="text"
              placeholder="Apellido"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="adress"
              type="text"
              placeholder="Direccion"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="mail"
              type="email"
              placeholder="Mail"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="secondmail"
              type="email"
              placeholder="Repita el Mail"
              onChange={(e) => setSecondmail(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              Finalizar Compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;

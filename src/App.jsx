import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/navbar";
import ItemListContainer from "./componentes/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ItemListContainer saludo="Bienvenido a Van Houtte Cafe!" />
      </div>
    </>
  );
}

export default App;

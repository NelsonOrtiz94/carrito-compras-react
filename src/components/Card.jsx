import { useState } from "react";
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, handelAgregar,handelQuitar,handelAumentar,handelDisminuir }) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handelAgregar()
    setAdded(true)
  }
  const clickQuitar = () => {
    handelQuitar()
    setAdded(false)
  }

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>

      {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carrito
        </button>
      ) : (
          <button type="button" className="boton-agregar" onClick={clickAgregar}>
            Agregar del Carrito
            </button>
      )}
      </div>
    </div>
  );
};

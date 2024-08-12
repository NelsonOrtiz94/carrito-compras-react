import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);

  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handelAgregar = (compra) =>{
    agregarCompra(compra)
  }
  const handelQuitar = (id) =>{
    eliminarCompra(id)
  }

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handelAgregar={() =>handelAgregar(producto)}
          handelQuitar={() => handelQuitar(producto.id)}
        ></Card>
      ))}
    </>
  );
};

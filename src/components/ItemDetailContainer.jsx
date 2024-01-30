import React, { useEffect, useState } from "react";
import listaProductos from "../data/Productos.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [stock,setStock] = useState(0);
  const [mensajeError, setMensajeError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      let newProductos = listaProductos.filter(
        (item) => item.id === parseInt(id)
      );

      if (newProductos.length > 0) {
        resolve(newProductos);
      } else {
        reject("Error! No se encontro el producto!");
      }
    });

    promesa
      .then((data) => {
        setProducto(data);
      })
      .catch((error) => {
        setMensajeError(error);
      });
  }, [id]);
  

  const handleContadorAumenta = () =>{
        setStock(stock  + 1)
  };

 const handleContadorDisminuye = () =>{
    setStock(stock - 1)
};

  return (
    <section className="section lb">
			<div className="container">
      {producto.map((item) => (
        <div key ={item.id}className="row">
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="pitem">
              <div className="case-box">
                <img src={item.image} alt="" className="img-responsive img-item" />
              </div>
            </div>
          </div>

          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="case-details">
              <h3>
                {item.title}
                <small>{item.rating.rate}/ {item.rating.count}</small> 
              </h3>
              
              <p>
                {" "}{item.description}.{" "}
              </p>
              <h3>$ {item.price}</h3>
              
            </div>
            <div>
                <button  onClick={handleContadorAumenta}>+</button>
                <input className="text-center" type="text" value={stock} style={{width:"50px"}} />
                <button onClick={handleContadorDisminuye}>-</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

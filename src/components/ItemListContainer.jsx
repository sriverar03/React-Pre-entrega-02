import React, { useEffect, useState } from "react";
import listaProductos from "../data/Productos.json";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [mensajeError, setMensajeError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      let newProductos = id
        ? listaProductos.filter((item) => item.category === id)
        : listaProductos;

      if (newProductos.length > 0) {
        resolve(newProductos);
      } else {
        reject("Error! No se encontraron productos!");
      }
    });

    promesa
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        setMensajeError(error);
      });
  }, [id]);

 

  return (
    <section className="section ">
      <div className="container">
        <div className="row">
          {productos.map((pro) => (
            <div key={pro.id} className="col-md-4 mb">
              <div className="case-box">
                <div>
                  <img src={pro.image} alt="" className=" card-img-top" />
                </div>
                <div className="case-info clearfix">
                  <div className="pull-left mg-text">
                    <h5>{pro.title}</h5>
                    <small>$ {pro.price}</small>
                  </div>
                  <div>
                    <span className="case-link">
                      <Link to={"/producto/" + pro.id} >						
                       <span><i className="fa fa-link"></i></span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

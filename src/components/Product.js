import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const mockProduct = [
  {
    id: 1,
    title: "Ballinasloe 3pc Smoke Sectional Sofa",
    dimensions: "145 x 60 x 37",
    image:
      "https://cdn.shopify.com/s/files/1/0572/8534/5467/products/ballinasloe-smoke-3pc-sectional-w-chaise-ornate-furniture-1_1100x.jpg?v=1648459824",
    price: 1299,
    type: "sofa",
  },
  {
    id: 2,
    title: "Altari L Shape 2pc Sectional Sofa w/ Chaise",
    dimensions: "110 x 90 x 37",
    image:
      "https://cdn.shopify.com/s/files/1/0572/8534/5467/products/june-special-altari-l-shape-2pc-sectional-sofa-w-chaise-1_1000x.jpg?v=1676020722",
    price: 979,
    type: "sofa",
  },
  {
    id: 3,
    title: "Arroyo Reversible Sectional Sofa",
    dimensions: "82 x 57 x 33",
    image:
      "https://cdn.shopify.com/s/files/1/0572/8534/5467/products/arroyo-caramel-reversible-sectional-sofa-2_1100x.jpg?v=1677615894",
    price: 759,
    type: "sofa",
  },
  {
    id: 4,
    title: "Christie White High Gloss Lacquer Queen Bed",
    dimensions: "97 x 77 x 27",
    image:
      "https://cdn.shopify.com/s/files/1/0572/8534/5467/products/christie-white-high-gloss-lacquer-queen-bed-1_1100x.jpg?v=1656006877",
    price: 719,
    type: "bed",
  },
];

const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh" }}
    >
      <div className="row mb-3">
        <div className=" col-md-8 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Search product...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{
                height: "48px",
                border: "1px solid #CD9B4F",
                "&:focus": {
                  boxShadow: "0px 0px 0px",
                  borderColor: "#f8c146",
                  outline: "0px",
                },
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-warning btn-lg"
                type="button"
                style={{ borderRadius: "0px", "&:hover": { color: "white" } }}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-warning"
          onClick={handleShow}
          style={{ background: "#CD9B4F", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add Product
        </button>
      </div>
      
      <div className="row mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-5">
                {mockProduct.map((item) => (
                  <div
                    class="row my-2 py-2 d-flex align-items-center "
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <div class="col-sm-6 col-md-2 col-lg-1">
                      <img
                        className="img-fluid"
                        style={{
                          borderRadius: "5px",
                        }}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3">
                      <strong>{item.title}</strong>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2">
                      <p>{item.dimensions}</p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2">
                      <p>${item.price}</p>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2">
                      <p>{item.type}</p>
                    </div>
                    <div class="col-sm-2  col-md-1 col-lg-2">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{ background: "#CD9B4F", color: "white" }}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ width: "750px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add Product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>Buraya Form Gelecek</Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import copy from 'copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";

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

   //handles
   const handleCopyClick = (text) => {
    copy(text)
    successNote(`Copied`);
  };

  const handleSave = ()=> {
    //redux ta fonk kurulacak 
    console.log("handle-save--product")
}


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
                    class="row my-3 py-2 d-flex align-items-center "
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
                    <div class="col-sm-3 d-flex justify-content-end  col-md-12 col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{ background: "#CD9B4F", color: "white" }}
                        onClick={() => handleCopyClick(item.dimensions)}
                      >
                        <i class="fa-regular fa-copy"></i> copy
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
          <Offcanvas.Body>
            <div class="input-group mb-3">
              <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Title
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Dimensions
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Price
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Photo-Url
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Photo"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
            <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Type
              </span>
              <select class="form-select" aria-label="Default select example">
                <option selected value="sofa">Sofa</option>
                <option value="bed">Bed</option>
                <option value="dining">Dining</option>
                <option value="accessesories">Accessesories</option>
              </select>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
              <button
                type="submit"
                className="btn btn-warning"
                style={{
                  background: "#CD9B4F",
                  color: "white",
                  marginLeft: "10px",
                }}
                onClick={() => handleSave}
              >
                Save
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
};

export default Product;

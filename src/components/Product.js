import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { successNote } from "../utils/ToastNotify";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  deleteProduct,
  clearProducts,
  setProduct,
} from "../services/productSlice";
import ProductModal from "./ProductModal";
import Spinner from "react-bootstrap/Spinner";

const Product = () => {
  const [show, setShow] = useState(false);
  const [filterText, setFilterText] = useState("");

  //redux
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  const handleShow = () => setShow(true);

  //handles
  const handleCopyClick = (text) => {
    copy(text);
    successNote(`Copied`);
  };

  const handleUpdate = (item) => {
    dispatch(setProduct(item));
    setShow(true);
  };

  const filterChange = (e) => {
    setFilterText(e.target.value);
  };

  //Effects
  useEffect(() => {
    dispatch(getAllProducts({ filterText: filterText }));
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, filterText]);

  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh" }}
    >
      <div className="row mb-3 pr-4">
        <div className=" col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-text w"
              placeholder="Search product...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={filterChange}
              value={filterText}
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
                {products.map((item) => (
                  <div
                    className="row my-3 py-2 d-flex align-items-center "
                    key={item?._id}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="col-sm-6 col-md-2 col-lg-1">
                      <img
                        className="img-fluid"
                        style={{
                          borderRadius: "5px",
                        }}
                        src={item?.photoUrl}
                        alt={item?.title}
                      />
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <strong>{item?.title}</strong>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                      <p>{item?.dimensions}</p>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                      <p>${item?.price}</p>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                      <p>{item?.type}</p>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-end  col-md-12 col-lg-12">
                      <button
                        onClick={() => dispatch(deleteProduct(item))}
                        type="button"
                        className="btn btn-outline-danger mr-2"
                      >
                        {!loading ? (
                          <i className="fa-solid fa-trash"></i>
                        ) : (
                          <Spinner
                            variant="danger"
                            animation="border"
                            size="sm"
                          />
                        )}
                      </button>
                      <button
                        onClick={() => handleUpdate(item)}
                        className="btn btn-outline-primary mr-2"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        type="submit"
                        className="btn btn-outline-success"
                        onClick={() => handleCopyClick(item.dimensions)}
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <ProductModal show={show} setShow={setShow} />}
    </div>
  );
};

export default Product;

import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {clearProduct, createProduct,onChangeProduct,updateProduct} from "../services/productSlice";
import Spinner from 'react-bootstrap/Spinner';


const ProductModal = ({show,setShow}) => {

 const dispatch = useDispatch()
const {product, updateLoading, createLoading} =  useSelector((state)=> state.product)

  const onChange = (e)=> {
    const { name, value } = e.target;
      dispatch(onChangeProduct({ name, value }))
  }

 const handleClose = () => setShow(false);

 const handleSave = ()=> {
    if(product._id ) {
        dispatch(updateProduct({product,setShow}))
    }else {
        dispatch(createProduct({product,setShow}));
    }
    
}

useEffect(() => {
 
  return () => {
    dispatch(clearProduct())
  }
}, [dispatch])


    
  return (
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
                name="title"
                onChange={(e)=> onChange(e)}
                value={product.title ? product.title : "" }
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
                name="dimensions"
                onChange={(e)=> onChange(e)}
                value={product.dimensions ? product.dimensions : "" }
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
                name="price"
                onChange={(e)=> onChange(e)}
                value={product.price ? product.price : "" }
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
                name="photoUrl"
                onChange={(e)=> onChange(e)}
                value={product.photoUrl ? product.photoUrl : "" }
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
              <select class="form-select" aria-label="Default select example"
                name="type"
                onChange={(e)=> onChange(e)}
                value={product.type ? product.type : "" }>
                <option selected value="">Select</option>
                <option  value="sofa">Sofa</option>
                <option value="bed">Bed</option>
                <option value="dining">Dining</option>
                <option value="accessesories">Accessesories</option>
              </select>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
              {product._id ? (
                  <button
                  type="submit"
                  className="btn btn-warning"
                  style={{
                    background: "#CD9B4F",
                    color: "white",
                    marginLeft: "10px",
                  }}
                  onClick={handleSave}
                >
                  {
                     updateLoading ? (
                        <Spinner variant="light" animation="border" size="sm"/>
                     ) : (
                      "Update"
                     )
                  }
                </button>
              ): (
                <button
                  type="submit"
                  className="btn btn-warning"
                  style={{
                    background: "#CD9B4F",
                    color: "white",
                    marginLeft: "10px",
                  }}
                  onClick={handleSave}
                >
                  {
                     createLoading ? (
                        <Spinner variant="light" animation="border" size="sm"/>
                     ) : (
                      "Save"
                     )
                  }
                </button>
              )}
              
            </div>
          </Offcanvas.Body>
        </Offcanvas>
  )
}

export default ProductModal
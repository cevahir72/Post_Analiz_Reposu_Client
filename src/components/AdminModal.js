import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {clearSale, createSale,onChangeSale,updateSale} from "../services/adminSlice";
import Spinner from 'react-bootstrap/Spinner';
import { getUsers } from "../services/authSlice";



const AdminModal = ({show,setShow}) => {

    const dispatch = useDispatch()
    const {sale, updateLoading, createLoading} =  useSelector((state)=> state.admin)
    const { users} = useSelector((state)=>state.auth)

      const onChange = (e)=> {
        const { name, value } = e.target;
        if(e.target.name === "paid" || e.target.name === "facebook") {
            dispatch(onChangeSale({ name, value:e.target.checked }))
        }else if (e.target.name === "price" || e.target.name === "percentage"){
            let numValue = parseInt(e.target.value)
            dispatch(onChangeSale({ name, value: numValue }))
        }else{
            dispatch(onChangeSale({ name, value}))
        }
          
      }
    
     const handleClose = () => setShow(false);
    
     const handleSave = ()=> {
        if(sale._id ) {
            dispatch(updateSale({sale,setShow}))
        }else {
            dispatch(createSale({sale,setShow}));  
        }
        
    }
    
    useEffect(() => {
      dispatch(getUsers());
      return () => {
        dispatch(clearSale())
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
            <Offcanvas.Title>Add Sale</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                User
              </span>
              <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                name="username"
                value={sale.username ? sale.username : ""}>
                <option selected>Select User...</option>
                {users.map((item, idx)=> (
                  <option key={idx}  value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Date
              </span>
              <input
              name="date"
              onChange={(e)=> onChange(e)}
              value={sale.date ? sale.date : "" }
                type="date"
                class="form-control"
                aria-label="Date"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Location
              </span>
              <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                name="location"
                value={sale.location ? sale.location : ""}>
                <option selected>Select Location...</option>
                <option  value="Santa Ana">Santa Ana</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Riverside">Riverside</option>
                <option value="San Diego">San Diego</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Zip
              </span>
              <input
              name="zip"
              onChange={(e)=> onChange(e)}
              value={sale.zip ? sale.zip : "" }
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Price
              </span>
              <input
              name="price"
              onChange={(e)=> onChange(e)}
              value={sale.price ? sale.price : 0 }
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Percentage
              </span>
              <input
              name="percentage"
              onChange={(e)=> onChange(e)}
              value={sale.percentage ? sale.percentage : 0 }
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Sold Pr.
              </span>
              <input
                name="soldProduct"
                onChange={(e)=> onChange(e)}
                value={sale.soldProduct ? sale.soldProduct : "" }
                type="text"
                class="form-control"
                aria-label="SoldPr"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={sale.facebook | false}
                name="facebook"
                onChange={(e)=> onChange(e)}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Facebook
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={sale.isPaid | false}
                name="isPaid"
                onChange={(e)=> onChange(e)}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                isPaid
              </label>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
              {sale._id ? (
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

export default AdminModal
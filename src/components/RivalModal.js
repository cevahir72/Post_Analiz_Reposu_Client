import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {clearSale, createSale,onChangeSale,updateSale} from "../services/rivalSlice";
import Spinner from 'react-bootstrap/Spinner';



const RivalModal = ({show,setShow}) => {

    const users = ["Betül","Metin","Hacer","Enes Malik","Züleyha","Tuğba","Serhat","Ahmet","Banıçiçek","Zeynep","İmdat","Berrak","Mustafa","Belin","Cihad","Muhammet","Yasin"]

    const dispatch = useDispatch()
    const {sale, updateLoading, createLoading} =  useSelector((state)=> state.rival)

      const onChange = (e)=> {
        const { name, value } = e.target;
            dispatch(onChangeSale({ name, value}))
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
            <Offcanvas.Title>{sale._id ? "Rakip Satış Güncelle" : "Rakip Satış Ekle"} </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group mb-3">
              <span
                style={{ width: "100px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Kullanıcı
              </span>
              <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                name="user"
                value={sale.user ? sale.user : ""}>
                <option selected>Kullanıcı seçiniz...</option>
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
                Tarih
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
                Bölge
              </span>
              <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                name="location"
                value={sale.location ? sale.location : ""}>
                <option selected>Bölge Seçiniz...</option>
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
                Ürün
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
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={handleClose} className="btn btn-outline-danger">İptal</button>
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
                      "Güncelle"
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
                      "Kaydet"
                     )
                  }
                </button>
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      
  )
}

export default RivalModal
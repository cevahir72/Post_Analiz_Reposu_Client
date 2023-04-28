import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import copy from 'copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";


const mockCustomer = [
  {
    id:1,
    question: "Pazarlık",
    answer: "I have no authorization to negotiate. But if you share your number, i can direct it to my manager."
  },
  {
    id:2,
    question: "Adres",
    answer: "2235 North Tustin 92705 Santa Ana - CA - phone: 844 955 3399 - Monday to Thursday 10 am- 6 pm / Friday-Saturday 10 am - 7 pm / Sunday 12 pm -5 pm."
  },
]

const Customer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   //handles
   const handleCopyClick = (text) => {
    copy(text)
    successNote(`Copied`);
  };

  const handleSave = ()=> {
      //redux ta 
      console.log("handle-save--customer")
  }

  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh" }}
    >
      <div>
        <button
          type="submit"
          className="btn btn-warning"
          onClick={handleShow}
          style={{ background: "#CD9B4F", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add Customer Answer
        </button>
      </div>
      <div className="row mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-5">
                {mockCustomer.map((item) => (
                  <div
                    class="row my-2 py-2 d-flex align-items-center "
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <strong style={{marginBottom:"0.5rem"}}>{item.question}</strong>
                    <p>{item.answer}</p>
                    <div class="col-sm-12 d-flex justify-content-end  col-md-12 col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{ background: "#CD9B4F", color: "white" }}
                        onClick={() => handleCopyClick(item.answer)}
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
            <Offcanvas.Title>Add Customer Answer</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group mb-3">
              <span style={{width:"90px"}} class="input-group-text" id="basic-addon1">
              Question
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group">
              <span style={{width:"90px"}} class="input-group-text">Answer</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <hr />
            <div style={{display:"flex", justifyContent:"end"}}>
              <button className="btn btn-outline-danger">Cancel</button>
              <button
                type="submit"
                className="btn btn-warning"
                style={{ background: "#CD9B4F", color: "white",marginLeft:"10px" }}
                onClick={()=> handleSave}
              >
                Save
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
}

export default Customer
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import copy from 'copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";


const mockCustomer = [
  {
    id:1,
    question: "Pazarlık",
    answer: "I have no authorization to negotiate. But if you share your number, i can direct it to my manager."
  }
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
                      <strong>{item.question}</strong>
                      <p>{item.answer}</p>
                      <div class="col-sm-12 d-flex justify-content-end  col-md-12 col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{ background: "#CD9B4F", color: "white" }}
                        onClick={()=> handleCopyClick(item.answer)}
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
          <Offcanvas.Body>Buraya Form Gelecek</Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  )
}

export default Customer
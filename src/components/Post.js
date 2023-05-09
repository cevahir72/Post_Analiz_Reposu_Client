import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DataTable from 'react-data-table-component';

const mockPost = [
  {
    id:1,
    date:"28/01/2023",
    location:"Santa Ana",
    zip:"92705",
    user: "Mevlüt",
    count: 30,
    customerReturns: 3,
    sale: false
  },
  {
    id:2,
    date:"11/02/2023",
    location:"Los Angeles",
    zip:"90255",
    user: "Betül",
    count: 20,
    customerReturns: 5,
    sale: true
  },
  {
    id:3,
    date:"14/02/2023",
    location:"San Diego",
    zip:"92101",
    user: "Rabia",
    count: 10,
    customerReturns: 2,
    sale: false
  },
  {
    id:4,
    date:"18/02/2023",
    location:"Riverside",
    zip:"92501",
    user: "Melek",
    count: 40,
    customerReturns: 4,
    sale: true
  }
]

const columns = [
  {
      name: 'Date',
      selector: row => row.date,
      
  },
  {
      name: 'Location',
      selector: row => row.location,
      
  },
  {
      name: 'Zip',
      selector: row => row.zip,
      
  },
  {
    name: 'User',
    selector: row => row.user,
    
},
{
  name: 'Count',
  selector: row => row.count,
 
},
{
  name: 'Customer Returns',
  selector: row => row.customerReturns,
  
},
{
  name: 'Sale',
  selector: row => row.sale ? <i class="fa-solid fa-plus"></i> : <i class="fa-solid fa-minus"></i> ,
  
},
];

const Post = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //handles
  const handleSave = ()=> {
    //redux ta fonk kurulacak
    console.log("handle-save--post")
}

  const customStyles = {
    rows: {
      style: {
        border: "1px solid #CD9B4F",
        fontSize: "14px"
      }
    },
    headCells: {
      style : {
        background: "#e8b76d",
        color: "white",
        fontSize: "14px"
      }
    }
  }
 
  return (
    <div
      className="container justify-content-center "
      style={{ height: "87vh" }}
    >
      <div className="row mb-3">
        <div className=" col-md-8 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Search post...."
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
      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-warning"
          onClick={handleShow}
          style={{ background: "#CD9B4F", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add Post
        </button>
      </div>
      <div className="row table-responsive">
        <DataTable
          title="Post List"
          columns={columns}
          data={mockPost}
          pagination
          striped
          responsive
          customStyles={customStyles}
        />
      </div>
      {show && (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ width: "750px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add Post</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group mb-3">
            <span
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                User
              </span>
              <select class="form-select" aria-label="Default select example">
                <option selected value="1">Mevlüt</option>
                <option value="2">Betül</option>
                <option value="3">Rabia</option>
                <option value="4">Melek</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Date
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
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Location
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
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Zip
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
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Count
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
                style={{ width: "90px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                C. Returns
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Sale
              </label>
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

export default Post;

import React, {useState} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Offcanvas from "react-bootstrap/Offcanvas";

const mockData = [
  { id: 1, user: "Mevlüt", post: 10, return: 3, sale: 1, time: "12-03-2023" },
  { id: 2, user: "Mevlüt", post: 20, return: 6, sale: 0, time: "12-03-2023" },
  { id: 3, user: "Mevlüt", post: 33, return: 7, sale: 0, time: "15-03-2023" },
  { id: 4, user: "Mevlüt", post: 22, return: 5, sale: 1, time: "17-03-2023" },
  { id: 5, user: "Mevlüt", post: 44, return: 9, sale: 0, time: "19-03-2023" },
];

const data = mockData.map((item) => ({
  time: item.time,
  posts: item.post,
  returns: item.return,
  sales: item.sale,
}));

const Analyze = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleSave = ()=> {
    //redux ta fonk kurulacak 
    console.log("handle-save--product")
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
          onClick={() => setShow(true)}
          style={{ background: "#CD9B4F", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add Sale
        </button>
      </div>

      <div className="row mt-4">
        <div>
          <h4>Sales Chart</h4>
        </div>
        <div className="row d-flex justify-content-start align-items-center h-100">
          <div
            style={{ background: "#eee",minHeight:"400px", }}
            className="col-sm-12 col-md-12 col-lg-6 "
          >
         
            <AreaChart
              width={450}
              height={250}
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" thick={{ fill: "#CD9B4F" }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="posts"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="returns"
                fill="#82ca9d"
                stroke="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="sales"
                fill="#ffc658"
                stroke="#ffc658"
              />
            </AreaChart>
           
          </div>
          <div
            style={{
              background: "#eee",
              minHeight: "400px",
              paddingTop: "1rem",
              overflowY:"400px"
            }}
            className="col-sm-12 col-md-12 col-lg-6 sm-mt-5"
          >
            <h5>Sale Table</h5>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Zip</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10/03/2023</th>
                  <td>Riverside</td>
                  <td>92503</td>
                  <td>$1099</td>
                </tr>
                <tr>
                  <th scope="row">12/03/2023</th>
                  <td>Los Angeles</td>
                  <td>90256</td>
                  <td>$699</td>
                </tr>
                <tr>
                  <th scope="row">15/03/2023</th>
                  <td>Santa Ana</td>
                  <td>92705</td>
                  <td>$2099</td>
                </tr>
              </tbody>
            </table>
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
                Location
              </span>
              <select class="form-select" aria-label="Default select example">
                <option selected value="Santa Ana">Santa Ana</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Riverside">Riverside</option>
                <option value="San Diego">San Diego</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span
                style={{ width: "110px" }}
                class="input-group-text"
                id="basic-addon1"
              >
                Zip Code
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Zip"
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

export default Analyze;

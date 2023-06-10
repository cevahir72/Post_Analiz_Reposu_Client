import React, {useEffect, useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';
import AdminModal from "./AdminModal";
import {
    getAllSales,
    getAllMyAdminSales,
    deleteSale,
    clearSales,
    setSale,
  } from "../services/adminSlice";
  import { getUsers } from '../services/authSlice';
  import Spinner from "react-bootstrap/Spinner";




const Admin = () => {

    //*Hooks
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");
    const [totalSale, setTotalSale] = useState(0);
    const [totalAdminSale, setTotalAdminSale] = useState(0);
  
    //redux
    const dispatch = useDispatch();
    const { sales,adminSales, deleteLoading } = useSelector((state) => state.admin);
    const { users} = useSelector((state)=>state.auth)
  
    //handles
    const handleShow = () => setShow(true);
  
    const handleUpdate = (item) => {
      dispatch(setSale(item));
      setShow(true);
    };
  useEffect(() => {
    setTotalSale( 
      sales.reduce((accumulator, item) => accumulator + item.price, 0)
  )
  
  setTotalAdminSale(
    adminSales.reduce((accumulator, item) => accumulator + parseFloat((item.price * item.percentage )/100) , 0).toFixed(2)
  )
  }, [sales,adminSales])
  

      //Effects
  useEffect(() => {
    dispatch(getAllSales({ user: user}));
    dispatch(getAllMyAdminSales());
    dispatch(getUsers());
    return () => {
      dispatch(clearSales());
    };
  }, [dispatch, user]);
    
    useEffect(() => {
        const id = localStorage.getItem("user")
        if(id !== '6483b235cfccda99d12a9c01' ){
            navigate("/")
        }  
    })


    const columns = [
        {
          name: "Date",
          selector: (row) => row.date,
          grow: 2,
        },
        {
          name: "Location",
          selector: (row) => row.location,
          grow: 1,
        },
        {
          name: "Zip",
          selector: (row) => row.zip,
          grow: 1,
          omit: true
        },
        {
          name: "User",
          selector: (row) => row.username,
          grow: 1,
        },
        {
          name: "Price",
          selector: (row) =>"$" + row.price,
        },
        {
          name: "Percentage",
          selector: (row) =>  row.percentage + "%",
          grow: 1,
        },
        {
          name: "Profit",
          selector: (row) => <b>{"$" + parseFloat((row.percentage * row.price)/ 100)}</b> ,
          grow: 1,
        },
        {
          name: "Sold Product",
          selector: (row) => row.soldProduct,
          grow: 1,
        },
        {
          name: "Facebook",
          selector: (row) =>
            row.facebook ? (
              <i class="fa-solid fa-plus"></i>
            ) : (
              <i class="fa-solid fa-minus"></i>
            ),
          grow: 1,
        },
        {
            name: "Paid",
            selector: (row) =>
              row.isPaid ? (
                <i class="fa-solid fa-plus"></i>
              ) : (
                <i class="fa-solid fa-minus"></i>
              ),
            grow: 1,
          },
        {
          name: "Actions",
          selector: (row) => {
            return (
              <span className="d-flex justify-content-end">
                <button
                  onClick={() => dispatch(deleteSale(row))}
                  type="button"
                  size="sm"
                  className="btn btn-outline-danger mr-2"
                >
                  {!deleteLoading ? (
                    <i className="fa-solid fa-trash"></i>
                  ) : (
                    <Spinner variant="danger" animation="border" size="sm" />
                  )}
                </button>
    
                <button
                  size="sm"
                  onClick={() => handleUpdate(row)}
                  className="btn btn-outline-primary mr-2"
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
              </span>
            );
          },
          grow: 3,
          style: {
            display:"flex",
            justifyContent:"end"
          }
        },
      ];

      const customStyles = {
        rows: {
          style: {
            border: "1px solid #CD9B4F",
            fontSize: "14px",
          },
        },
        headCells: {
          style: {
            background: "#e8b76d",
            color: "white",
            fontSize: "14px",
          },
        },
      };

      const subHeaderComponent = (
        <div style={{ display:"flex", justifyContent:"end", flexDirection:"row"}}>
            <button 
            className="btn btn-outline-success mr-2"
            disabled
            ><b>Total Sales : {"$"}{totalSale}</b>  </button>{' '}
            <button 
            className="btn btn-outline-danger mr-2"
            onClick={()=> setUser("")}
            >Clean</button>{' '}
          <select className="form-select mr-2" aria-label="Default select example"
                onChange={(e)=> setUser(e.target.value)}
                style={{minWidth:"10rem"}}
                name="username"
                value={user ? user : ""}>
                <option  selected>Select User</option>
                {users.map((item, idx)=> (
                  <option key={idx}  value={item}>{item}</option>
                ))}
              </select>
              <button
          className="btn btn-secondary"
          onClick={handleShow}
          style={{ background: "#31375B", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Add Sale
        </button>
        </div>
      );

      const subHeaderComponent2 = (
        <div style={{ display:"flex", justifyContent:"end", flexDirection:"row"}}>
            <button 
            className="btn btn-outline-success mr-2"
            disabled
            ><b>Total Income : {"$"}{totalAdminSale}</b>  </button>{' '}  
        </div>
      )
    

  return (
    <div className="container mt-5 mb-5" style={{background:"#eeeeeee",height:"87vh",fontFamily:"Quicksand"}}>
        <div style={{marginBottom:"3rem"}}>
        <h4>Admin</h4>
          <hr/>
        </div>
        <div className='row mb-3 mx-auto' style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%",background:"white"}}>
      <div className="row table-responsive py-3"style={{background:"#eeeeeee",fontFamily:"Quicksand"}} >
        <DataTable
          title="Sale List"
          highlightOnHover
          columns={columns}
          data={sales}
          pagination
          striped
          responsive
          subHeader
          subHeaderComponent={subHeaderComponent}
          customStyles={customStyles}
        />
      </div>
        {show && <AdminModal show={show} setShow={setShow} />}

        </div>
        <div className='row mb-3 mx-auto' style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%",background:"white"}}>

        <DataTable
          title="Admin Sales"
          highlightOnHover
          columns={columns}
          data={adminSales}
          pagination
          striped
          responsive
          subHeader
          subHeaderComponent={subHeaderComponent2}
          customStyles={customStyles}
        />
        </div>
    
</div>
  )
}

export default Admin
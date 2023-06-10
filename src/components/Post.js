import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "./PostModal";
import {
  getAllPosts,
  deletePost,
  clearPosts,
  setPost,
} from "../services/postSlice";
import { getUsers } from '../services/authSlice';
import Spinner from "react-bootstrap/Spinner";


const Post = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("")

  //redux
  const dispatch = useDispatch();
  const { posts, deleteLoading } = useSelector((state) => state.post);
  const { users} = useSelector((state)=>state.auth)

  //handles
  const handleShow = () => setShow(true);

  const handleUpdate = (item) => {
    dispatch(setPost(item));
    setShow(true);
  };


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
    },
    {
      name: "User",
      selector: (row) => row.username,
      grow: 1,
    },
    {
      name: "Count",
      selector: (row) => row.count,
      omit: true,
    },
    {
      name: "Customer Returns",
      selector: (row) => row.customerReturns,
      grow: 1,
    },
    {
      name: "Sold Product",
      selector: (row) => row.soldProduct,
      grow: 1,
    },
    {
      name: "Sale",
      selector: (row) =>
        row.sale ? (
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
              onClick={() => dispatch(deletePost(row))}
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
      grow: 2,
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
      <i class="fa-solid fa-plus"></i> Add Post
    </button>
    </div>
  )

  //Effects
  useEffect(() => {
    dispatch(getAllPosts({ user: user}));
    dispatch(getUsers());
    return () => {
      dispatch(clearPosts());
    };
  }, [dispatch, user]);

  return (
    <div
      className="container justify-content-center "
      style={{ height: "87vh" , fontFamily:"Quicksand", borderRadius:"10px", padding:"1rem 1rem"}}
    >
      <div style={{marginBottom:"3rem"}}>
        <h4>Post</h4>
          <hr/>
        </div>
      <div className="row table-responsive" style={{ background:"#fcfafa",borderRadius:"10px"}}>
        <DataTable
          title="Post List"
          columns={columns}
          data={posts}
          pagination
          striped
          responsive
          subHeader
          subHeaderComponent={subHeaderComponent}
          customStyles={customStyles}
        />
      </div>
      {show && <PostModal show={show} setShow={setShow} />}
    </div>
  );
};

export default Post;

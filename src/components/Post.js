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
import Spinner from "react-bootstrap/Spinner";


const Post = () => {
  const [show, setShow] = useState(false);
  const [filterText, setFilterText] = useState("");

  //redux
  const dispatch = useDispatch();
  const { posts, deleteLoading } = useSelector((state) => state.post);

  //handles
  const handleShow = () => setShow(true);

  const handleUpdate = (item) => {
    dispatch(setPost(item));
    setShow(true);
  };

  const filterChange = (e) => {
    setFilterText(e.target.value);
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
          <>
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
          </>
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
  console.log(posts)
  //Effects
  useEffect(() => {
    dispatch(getAllPosts({ filterText: filterText }));
    return () => {
      dispatch(clearPosts());
    };
  }, [dispatch, filterText]);

  return (
    <div
      className="container justify-content-center "
      style={{ height: "87vh" }}
    >
      <div className="row mb-3 pr-4">
        <div className=" col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Search post...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={filterChange}
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
          data={posts}
          pagination
          striped
          responsive
          customStyles={customStyles}
        />
      </div>
      {show && <PostModal show={show} setShow={setShow} />}
    </div>
  );
};

export default Post;

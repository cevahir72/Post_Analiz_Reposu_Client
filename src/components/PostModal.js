import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {clearPost, createPost,onChangePost,updatePost} from "../services/postSlice";
import Spinner from 'react-bootstrap/Spinner';


const PostModal = ({show,setShow}) => {

    const dispatch = useDispatch()
    const {post, updateLoading, createLoading} =  useSelector((state)=> state.post)
    
      const onChange = (e)=> {
        const { name, value } = e.target;
        if(e.target.name === "sale") {
            dispatch(onChangePost({ name, value:e.target.checked }))
        }else if (e.target.name === "count" || e.target.name === "customerReturns"){
            let numValue = parseInt(e.target.value)
            dispatch(onChangePost({ name, value: numValue }))
        }else{
            dispatch(onChangePost({ name, value}))
        }
          
      }
    
     const handleClose = () => setShow(false);
    
     const handleSave = ()=> {
        if(post._id ) {
            dispatch(updatePost({post,setShow}))
        }else {
            dispatch(createPost({post,setShow}));
        }
        
    }
    
    useEffect(() => {
     
      return () => {
        dispatch(clearPost())
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
              <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                name="username"
                value={post.username ? post.username : ""}>
                <option selected>Select</option>
                <option  value="Mevlüt">Mevlüt</option>
                <option value="Betül">Betül</option>
                <option value="Rabia">Rabia</option>
                <option value="Melek">Melek</option>
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
              name="date"
              onChange={(e)=> onChange(e)}
              value={post.date ? post.date : "" }
                type="date"
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
                name="location"
                onChange={(e)=> onChange(e)}
                value={post.location ? post.location : "" }
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
              name="zip"
              onChange={(e)=> onChange(e)}
              value={post.zip ? post.zip : "" }
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
              name="count"
              onChange={(e)=> onChange(e)}
              value={post.count ? post.count : 0 }
                type="number"
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
              name="customerReturns"
              onChange={(e)=> onChange(e)}
              value={post.customerReturns ? post.customerReturns : 0 }
                type="number"
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
                Sold Pr.
              </span>
              <input
                name="soldProduct"
                onChange={(e)=> onChange(e)}
                value={post.soldProduct ? post.soldProduct : "" }
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
                value={post.sale | false}
                name="sale"
                onChange={(e)=> onChange(e)}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Sale
              </label>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
            <button onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
              {post._id ? (
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

export default PostModal
import React, { useState, useEffect} from "react";
import copy from 'copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAnswer,
  getAllAnswers,
  clearAnswers,
  setAnswer
} from "../services/answerSlice"; 
import AnswerModal from "./AnswerModal";
import Spinner from "react-bootstrap/Spinner";


const Answer = () => {

  const [show, setShow] = useState(false);
  const [filterText, setFilterText] = useState("");

  //redux
  const dispatch = useDispatch();
  const { answers, loading } = useSelector((state) => state.answer);

   //handles
   const handleCopyClick = (text) => {
    copy(text)
    successNote(`Copied`);
  };

  const handleShow = () => setShow(true);

  const handleUpdate = (item) => {
    dispatch(setAnswer(item));
    setShow(true);
  };

  const filterChange = (e) => {
    setFilterText(e.target.value);
  };

  //Effects
  useEffect(() => {
    dispatch(getAllAnswers({ filterText: filterText }));
    return () => {
      dispatch(clearAnswers());
    };
  }, [dispatch, filterText]);

  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh",fontFamily:"Quicksand" }}
    >
      <div style={{marginBottom:"3rem"}}>
        <h4>Hazır Cevaplar</h4>
          <hr/>
        </div>
      <div className="row  pr-4 d-flex justify-content-end">
      <div style={{width:"15%",display:"flex", justifyContent:"end"}}>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleShow}
          style={{ background: "#31375B", color: "white",height:"48px"  }}
        >
          <i class="fa-solid fa-plus"></i> Ekle
        </button>
      </div>
        <div style={{width:"55%"}}>
          <div className="input-group mb-1">
            <input
              type="text"
              className="form-control input-text w"
              placeholder="Hazır cevap ara...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={filterChange}
              value={filterText}
              style={{
                height: "48px",
                border: "1px solid #31375B",
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
      <div className="row mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-5">
                {answers.map((item) => (
                  <div
                    class="row my-2 py-2 d-flex align-items-center "
                    key={item?._id}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <strong style={{marginBottom:"0.5rem"}}>{item.title}</strong>
                    <p>{item.answer}</p>
                    <div class="col-sm-12 d-flex justify-content-end  col-md-12 col-lg-12">
                    <button
                        onClick={() => dispatch(deleteAnswer(item))}
                        type="button"
                        className="btn btn-outline-danger mr-2"
                      >
                        {!loading ? (
                          <i className="fa-solid fa-trash"></i>
                        ) : (
                          <Spinner
                            variant="danger"
                            animation="border"
                            size="sm"
                          />
                        )}
                      </button>
                      <button
                        onClick={() => handleUpdate(item)}
                        className="btn btn-outline-primary mr-2"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        type="submit"
                        className="btn btn-outline-success"
                        onClick={()=>handleCopyClick(item.answer)}
                      >
                        <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <AnswerModal show={show} setShow={setShow} />}
    </div>
  );
}

export default Answer
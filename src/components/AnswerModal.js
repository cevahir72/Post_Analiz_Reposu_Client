import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {clearAnswer, createAnswer,onChangeAnswer,updateAnswer} from "../services/answerSlice";
import Spinner from 'react-bootstrap/Spinner';

const AnswerModal = ({show,setShow}) => {

    const dispatch = useDispatch()
    const {answer, updateLoading, createLoading} =  useSelector((state)=> state.answer)
    
      const onChange = (e)=> {
        const { name, value } = e.target;
          dispatch(onChangeAnswer({ name, value }))
      }
    
     const handleClose = () => setShow(false);
    
     const handleSave = ()=> {
        if(answer._id ) {
            dispatch(updateAnswer({answer,setShow}))
        }else {
            dispatch(createAnswer({answer,setShow}));
        }
        
    }
    
    useEffect(() => {
     
      return () => {
        dispatch(clearAnswer())
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
            <Offcanvas.Title>{answer._id ? "Hazır Cevap Güncelle": "Hazır Cevap Ekle"}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group mb-3">
              <span style={{width:"90px"}} class="input-group-text" id="basic-addon1">
              Başlık
              </span>
              <input
                type="text"
                name="title"
                onChange={(e)=>onChange(e)}
                value={answer.title}
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group">
              <span style={{width:"90px"}} class="input-group-text">Cevap</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
                onChange={(e)=>onChange(e)}
                name="answer"
                value={answer.answer}
              ></textarea>
            </div>
            <hr />
            <div style={{display:"flex", justifyContent:"end"}}>
              <button onClick={handleClose} className="btn btn-outline-danger">İptal</button>
              {answer._id ? (
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

export default AnswerModal
import React, {useEffect, useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import DataTable from "react-data-table-component";
import RivalModal from "./RivalModal";
import {
    getAllSales,
    deleteSale,
    clearSales,
    setSale,
    mostSaledItems
  } from "../services/rivalSlice";
  import Spinner from "react-bootstrap/Spinner";

const Rival = () => {

  const users = ["Betül","Metin","Hacer","Enes Malik","Züleyha","Tuğba","Serhat","Ahmet","Banıçiçek","Zeynep","İmdat","Berrak","Mustafa","Belin","Cihad","Muhammet","Yasin"]

        //*Hooks
        const [show, setShow] = useState(false);
        const [user, setUser] = useState("");

        //redux
        const dispatch = useDispatch();
        const { sales, deleteLoading,mostSaledProducts } = useSelector((state) => state.rival);

        //handles
        const handleShow = () => setShow(true);
      
        const handleUpdate = (item) => {
          dispatch(setSale(item));
          setShow(true);
        };


         //Effects
  useEffect(() => {
    dispatch(mostSaledItems())
    dispatch(getAllSales({ user: user}));
    return () => {
      dispatch(clearSales());
    };
  }, [dispatch, user]);

  const columns2 = [
    {
      name: "#",
      selector: (row,idx) => idx +1,
      grow: 1,
    },
    {
      name: "Ürün",
      selector: (row) => row._id,
      grow: 3,
    },
    {
      name: "Satış Sayısı",
      selector: (row) => row.count,
      grow: 3,
    },
  ];

    const columns = [
        {
          name: "Tarih",
          selector: (row) => row.date,
          grow: 2,
        },
        {
            name: "Rakip",
            selector: (row) => row.user,
            grow: 1,
        },
        {
          name: "Bölge",
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
          name: "Ürün",
          selector: (row) => row.soldProduct,
          grow: 1,
        },
        {
          name: "İşlemler",
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
            className="btn btn-outline-danger mr-2"
            onClick={()=> setUser("")}
            >Temizle</button>{' '}
          <select className="form-select mr-2" aria-label="Default select example"
                onChange={(e)=> setUser(e.target.value)}
                style={{minWidth:"6rem"}}
                name="username"
                value={user ? user : ""}>
                <option  selected>Kullanıcı</option>
                {users.map((item, idx)=> (
                  <option key={idx}  value={item}>{item}</option>
                ))}
              </select>
              <button
          className="btn btn-secondary"
          onClick={handleShow}
          style={{ background: "#31375B", color: "white" }}
        >
          <i class="fa-solid fa-plus"></i> Satış Ekle
        </button>
        </div>
      );



  return (
    <div className="container justify-content-center" style={{background:"#eeeeeee",height:"100%",fontFamily:"Quicksand"}}>
    <div style={{marginBottom:"3rem"}}>
    <h4>Rakip Analizi</h4>
      <hr/>
    </div>
    <div className='row mb-3 mx-auto' style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%",background:"white"}}>
  <div className="row table-responsive py-3" >
    <DataTable
      title="Rakip Satış Listesi"
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
  <hr  style={{width:"95%"}}/>
  <div className="mb-3 py-4" >
          <DataTable
            title="En Çok Satan Ürünler"
            columns={columns2}
            data={mostSaledProducts}
            pagination
            striped
            responsive
            customStyles={customStyles}
          />
        </div>
    {show && <RivalModal show={show} setShow={setShow} />}

    </div>


</div>
  )
}

export default Rival
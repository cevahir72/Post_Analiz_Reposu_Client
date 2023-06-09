import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { clearAnalysis, mostSaledItems,mostSaledLocations } from "../services/analysisSlice";

// const mockData = [
//   { id: 1, user: "Mevlüt", post: 10, return: 3, sale: 1, time: "12-03-2023" },
//   { id: 2, user: "Mevlüt", post: 20, return: 6, sale: 0, time: "12-03-2023" },
//   { id: 3, user: "Mevlüt", post: 33, return: 7, sale: 0, time: "15-03-2023" },
//   { id: 4, user: "Mevlüt", post: 22, return: 5, sale: 1, time: "17-03-2023" },
//   { id: 5, user: "Mevlüt", post: 44, return: 9, sale: 0, time: "19-03-2023" },
// ];

// const data = mockData.map((item) => ({
//   time: item.time,
//   posts: item.post,
//   returns: item.return,
//   sales: item.sale,
// }));

const Analyze = () => {
  //hooks
  const [location, setLocation] = useState("")
  
   //redux
   const dispatch = useDispatch();
   const { mostSaledProducts, mostSaledZipcodes } = useSelector((state) => state.analysis);

  const columns = [
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

  const columns2 = [
    {
      name: "#",
      selector: (row,idx) => idx +1,
      grow: 1,
    },
    {
      name: "Zip Kodu",
      selector: (row) => row._id,
      grow: 3,
    },
    {
      name: "Satış Sayısı",
      selector: (row) => row.count,
      grow: 3,
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

  const onChange =(e) => {
      setLocation(e.target.value)
  }

  useEffect(() => {
    dispatch(mostSaledItems())
    dispatch(mostSaledLocations())
  
    return () => {
      dispatch(clearAnalysis())
    }
  }, [])

  useEffect(() => {
   
    dispatch(mostSaledLocations({location: location}))
  
  }, [location])

  const subHeaderComponent = (
    <div style={{ display:"flex", justifyContent:"end", flexDirection:"row"}}>
      <button 
            className="btn btn-outline-danger mr-2"
            onClick={()=> setLocation("")}
            style={{height:"48px"}}
            >Temizle</button>{' '}
        <select class="form-select" aria-label="Default select example"
                onChange={(e)=> onChange(e)}
                label="Location"
                style={{width:"50%"}}
                name="location"
                value={location ? location : ""}>
                <option selected>Bölge</option>
                <option  value="Santa Ana">Santa Ana</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Riverside">Riverside</option>
                <option value="San Diego">San Diego</option>
              </select>
    </div>

  )
  

  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "87vh",fontFamily:"Quicksand",background:"#eeeeeee" }}
    >
      <div style={{marginBottom:"3rem"}}>
        <h4>Analiz</h4>
          <hr/>
        </div>
      <div className="row mb-3" style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%",background:"white"}}>
        <div className="row table-responsive py-3">
          <DataTable
            title="En Çok Satan Ürünler"
            columns={columns}
            data={mostSaledProducts}
            pagination
            striped
            responsive
            customStyles={customStyles}
          />
        </div>
        <div className="mb-3 py-4" style={{border:"1px solid #aaa", borderRadius:"7px",padding:"1rem 1rem"}}>
        
          <DataTable
            title="En Çok Satış Yapılan Zip Kodları"
            columns={columns2}
            data={mostSaledZipcodes}
            pagination
            striped
            responsive
            subHeader
            subHeaderComponent={subHeaderComponent}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Analyze;

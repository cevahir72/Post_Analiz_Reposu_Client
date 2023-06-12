import React, { useEffect,useState } from 'react';
import image from "../assets/profile.png";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../services/authSlice';
import {
    getAllSalesProfile,
    clearSales,
  } from "../services/adminSlice";
  import ProgressBar from 'react-bootstrap/ProgressBar';


const Profile = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth);
    const { sales} = useSelector((state) => state.admin);
    const [totalSale, setTotalSale] = useState(0);
    const [totalProfileSale, setTotalProfileSale] = useState(0);
    const [variant, setVariant] = useState("danger");
    

    const currentDate = new Date();
    const options = { month: 'long', locale: 'en-US' };
    const currentMonth = currentDate.toLocaleString('default', options);
  
  const columns = [
    {
      name: "Tarih",
      selector: (row) => row.date,
      grow: 2,
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
    },
    {
      name: "Kullanıcı",
      selector: (row) => row.username,
      grow: 1,
    },
    {
      name: "Fiyat",
      selector: (row) => "$"+ row.price,
    },
    {
      name: "Yüzde",
      selector: (row) => row.percentage + "%",
      grow: 1,
    },
    {
      name: "Satılan Ürün",
      selector: (row) => row.soldProduct,
      grow: 1,
    },
    {
      name: "Net Gelir",
      selector: (row) =>"$"+ parseFloat((row.price * row.percentage)/100)  ,
      grow: 1,
    },
    {
        name: "Ödendi",
        selector: (row) =>
          row.isPaid ? (
            <i class="fa-solid fa-plus"></i>
          ) : (
            <i class="fa-solid fa-minus"></i>
          ),
        grow: 1,
      }
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
  //handles
  const changeColor = (x)=> {
        if(x < 5000){
          return "danger"
        }else if (x>5000 && x<10000){
          return "warning"
        }else if (x==10000 || x>10000){
          return "success"
        }
  }


  useEffect(() => {
    setTotalSale( 
      sales.reduce((accumulator, item) => accumulator + item.price, 0)
      )
      setTotalProfileSale(
        sales.reduce((accumulator, item) => accumulator + parseFloat((item.price * item.percentage )/100) , 0).toFixed(2)
      )
  }, [sales])


  useEffect(() => {
      const id = localStorage.getItem("user")
      dispatch(getUser(id))
      dispatch(getAllSalesProfile({ id: id}));
      return ()=> {
        dispatch(clearSales());
      }
  }, [dispatch])

  const subHeaderComponent2 = (
        <div style={{ display:"flex", justifyContent:"end", flexDirection:"row"}}>
            <button 
            className="btn btn-outline-success mr-2"
            disabled
            ><b>Toplam Gelir : {"$"}{totalProfileSale}</b>  </button>{' '}  
        </div>
      )
 
  return (   
    <div className="container mt-5 mb-5" style={{background:"#eeeeeee",height:"87vh",fontFamily:"Quicksand"}}>
        <div style={{marginBottom:"3rem"}}>
        <h4>Profil</h4>
          <hr/>
        </div>
        <div className='row mb-3 mx-auto' style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%", background:"white"}}>
            <div className="col-12 py-2" style={{height:"5px"}}>
                <ProgressBar style={{height:"1.5rem"}} variant={`${changeColor(totalSale)}`} now={Math.ceil(totalSale/100)} label={`$${totalSale}`}/>
            </div>
            <div className='col-3 col-sm-4 d-flex justify-content-center align-items-center'>
                <img src={image} alt="profil-resim" style={{width:"50%", height:"50%",borderRadius:"50%",outline:"0.5rem inset #0b4d89", outlineOffset:"0.5rem"}}/>
            </div>
            <div className='col-6' style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                 <div className='d-flex  align-items-center'>
                <div style={{marginRight:"7px",marginTop:"1rem"}}><b>Rol:  </b></div>
                <div style={{marginTop:"1rem"}}> Satış Temsilcisi</div>
                </div>
                <div className='d-flex  align-items-center'>
                <div style={{ marginRight:"7px",marginTop:"1rem"}}><b>Kullanıcı:  </b></div>
                <div style={{marginTop:"1rem"}}> {user.username}</div>
                </div>
                <div className='d-flex  align-items-center'>
                <div style={{ marginRight:"7px",marginTop:"1rem"}}><b>Aylık Toplam Satış:  </b></div>
                <div style={{marginTop:"1rem"}}> {"$"}{totalSale}</div>
                </div> 
                <div className='d-flex  align-items-center'>
                <div style={{ marginRight:"7px",marginTop:"1rem"}}><b>Aylık Hedef:  </b></div>
                <div style={{marginTop:"1rem"}}> $10,000</div>
                </div> 
            </div>
        </div>
        <div className='row table-responsive mb-3 mx-auto' style={{border: "1px solid #ccc", borderRadius:"10px",minHeight:"35%",background:"white"}}>
        <DataTable
          title={`${currentMonth} Satışları`}
          columns={columns}
          data={sales}
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

export default Profile
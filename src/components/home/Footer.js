import React from 'react'

const Footer = () => {
  return (
    <div style={{width:"100%",height:"12vh", display:"flex", background:"#31375B", color:"white", alignItems:"center",paddingLeft:"1rem", flexWrap:"wrap"}}>
        <span style={{marginRight:"1rem"}}>@MK-SOFTWARE - Tüm hakları saklıdır.</span>
        <span style={{display:"flex", alignItems:"center"}}>
        <i style={{fontSize:"2rem", marginRight:"1rem"}} class="bi bi-youtube"></i>
             <a style={{color:"red"}} href="https://www.youtube.com/channel/UCeatnUwJNMUHbjqM_sOHy1w">MK-SOFTWARE CHANNEL</a>  </span>

    </div>
  )
}

export default Footer
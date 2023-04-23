import React from 'react';

const Profile = () => {
  return (   
    <div className="container mt-5 mb-5" style={{background:"#eeeeeee",height:"83vh"}}>
    <div className="row no-gutters">
        <div className="col-md-4 col-lg-4"><img style={{width:"100%", height:"100%"}} alt="resim" src="https://media.licdn.com/dms/image/D4D03AQHjB6fbHagzvw/profile-displayphoto-shrink_800_800/0/1679980374190?e=2147483647&v=beta&t=vmbIRtXrdFkqT62m-foOcUlWZgQaC5Rn_DoIrURJ5IY"/></div>
        <div className="col-md-8 col-lg-8">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                    <h3 className="display-5">Mevlüt KELEŞ</h3><i className="fa fa-facebook"></i></div>
                <div className="p-3 bg-black text-white" style={{background:"#000"}}>
                    <h6>Satış Personeli</h6>
                </div>
                <div className="d-flex flex-row text-white">
                    <div className="p-4 bg-primary text-center skill-block" style={{width: "30%"}}>
                        <h4>90%</h4>
                        <h6>Santa Ana</h6>
                    </div>
                    <div className="p-3 bg-success text-center skill-block" style={{width: "30%"}}>
                        <h4>70%</h4>
                        <h6>Los Angeles</h6>
                    </div>
                    <div className="p-3 bg-warning text-center skill-block" style={{width: "30%"}}>
                        <h4>80%</h4>
                        <h6>Riverside</h6>
                    </div>
                    <div className="p-3 bg-danger text-center skill-block" style={{width: "30%"}}>
                        <h4>75%</h4>
                        <h6>San Diego</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Profile
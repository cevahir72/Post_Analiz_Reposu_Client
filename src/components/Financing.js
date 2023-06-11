import React from 'react';
import copy from 'copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";

//Variables
let financeList = [
  {
    id:1,
    title:"SNAP",
    desc: "SNAP FINANCE-> 100 days same as cash. 12-18 Months of Approvals. $0 Initial Fee. Start Paying two weeks after delivery. You can apply from website and store.Up to $5000",
    image: 'https://mms.businesswire.com/media/20210421005173/en/872890/21/SnapLogo_NoTag_RGB.jpg'
  },
  {
    id:2,
    title:"KOALIFI",
    desc: "KOALIFI FINANCE-> 92 Days same as cash. 12-18 Months of Approvals. $10 Initial Fee.  Start Paying two weeks after delivery. Higher Amount Approvals .IN-STORE ONLY",
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAMAAAC+GOY3AAAAqFBMVEXy9fUXlKVJ6Ks9bt82xv/4+vr8/Pyd7tBk0v1qj+Q/prRFv7HJ4+aExM2U3fpo6rnS8+dQoO7d8+xz671T6a9NrLnm8vao79TX6eskmqquwu1Zz/2SytKg0Nfn9PDI8uKy8NmT7ste6rTF0++AoOfb5PJIduDD6fir4/m98d5puMN97MKXseqI2vu73eF2vsh83cRc1bdTfuJJo+HQ3PFeh+NgtfN1mOalqjmgAAAD50lEQVR4nO3baVcaQRCF4WZCIjpucSGIEfddsy///58FJSrCLNU1VT035N7PmXPmOe+gGJrwblEWFmVv274Bs1GCN0rwRgneKMEbJXijBG+U4I0SvFGCN0rwRgneKMEbJXijBG+U4I0SvFGCN0rwRgneKMEbJXijBG+U4I0SvFGCt/9cMrC+i7ltxV+iknTWNFfJt7W9FH+RTtJZWdVcJ9yHnSydpOOXZWs7y5JKvLKMg6SWuGR5DJJeYp9lEqQFiXGWpyCtSCyzPAdpR2KWZSpIWxKbLNNBWpMYZHkdpEVJ0ywzQdqUNMoyF6RdiT7LfJCWJcosRUFal2iyFAZpXxKdpSQIgiQuS1kQCElElvIgIBJploogKBJRls2NKgeMpD7LUrUDR1KTpS5IQsluPaUiS20QLElpFkGQ8a4TSW4kkuIskiDjHSaSHIgkBVlkQcZT3JTu/4WFktkswiBZdptKElaklM7By0Wjql/qr3eUTCJ9vKYpI+mTlWU7mntSfn6yF0+RQzQ/g9WST3JJZ/JaOZZDTlS3pP1M67NcsvLw7w/lkGwzqaQvf9E/Pl8Rz9aR7o7UnzNGUPZCuHaHNPjEtC96z/I3yq07pNFnv2tSyc1I6jjRvUaaSsKq8AnbOxJCjkf6m2n4ebwwyxdZEMX7RjOJMMtX7yAGElmW3DuIiUSSpV7SMIiNRJClTrLRNEiwOoFTl6VGonrHODurs0TVWSolG/rfIdMzOxVVmaVKYhIkmJ7vqshSLjEKEmxPqpVnKZVYBQnWZ+7KspRI7IIE89ODq8VvkIslhkGCwznIj0V/4hdJTIMEjxOdg4IsBRLbIMHnbOp8ljmJdZDgdMp2LsusxDxIcDsvPJMl9w4S/E4+v86SewcJnme4p7Pk3kGC62n0qSy5d5DgfK7+OUvuHSR4f0PgKUvuHST4f9dhkiX3DhISfGvjMUvuHSQk+f7JOEvuHSSk+SbNYDf3DhIaSU7Pvr0R7ntXuN56P7nkx7KUMd57qWS89cSSYYQjTtLd12VRSuIgcRIlRSc5v/CUdHvpJDGvEYWke5lKch4JiZZooqgkd96SruKVopLEPlzxEsXjpZL8dJcofqmoJLEQSiihhBJKWpX8WhTJsL+/GJJhCLEUTMnw4ZJICqRkOLkmjoIoGT5dFEUBlAxfroqhwEkuTqcv69//s5Kz2T/9LqVZoCQXZ+cFl171oCTLtft9d1p28eDqvle7q0QSyFGCN0rwRgneKMEbJXijBG+U4I0SvFGCN0rwRgneKMEbJXijBG+U4I0SvFGCN0rwRgneKMEbJXijBG+U4I0SvFGCN0rwtkCSP+rKW2DuueX2AAAAAElFTkSuQmCC'
  },
  {
    id:3,
    title:"ACIMA",
    desc: "92 Days same as cash. 12-18 Months of Approvals. $50 Initial Fee.  Start Paying two weeks after delivery. Higher Amount Approvals .IN-STORE ONLY",
    image: 'https://mms.businesswire.com/media/20170130005293/en/566773/21/acima_logo_color.jpg'
  },
  {
    id:4,
    title:"AFFIRM",
    desc: "AFFIRM FINANCE-> No same as cash time. It depends on the credit score. Different interest rates. 1-12 Months Different Options. No Application Fee .WEBSITE ONLY",
    image: 'https://res.cloudinary.com/etoro/image/fetch/w_1.5/https://etoro-cdn.etorostatic.com/market-avatars/8108/150x150.png'
  },
  {
    id:5,
    title:"SHOP PAY",
    desc: "Divide all orders by 4. No interest. No Application Fee. WEBSITE ONLY",
    image: 'https://help.shopify.com/assets/manual/shop-pay/shop-pay-logo-do-3.png'
  },
  {
    id:6,
    title:"REQUIREMENTS",
    desc: "REQUIREMENTS - Minimum requirements for a customer to apply for financing is: being over 18 years old - Having a bank account matching the ID - Having a monthly income of at least 750 dollars - If these conditions are present and the credit rating is not too bad, it is quick and easy to get approved.",
    image: 'https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2018/requirements-software-obsolete.png'
  }
]



const Financing = () => {


  //handles
  const handleCopyClick = (text) => {
    copy(text)
    successNote(`Copied`);
  };


  return (
    <div
    className="container justify-content-center "
    style={{ minHeight: "87vh",fontFamily:"Quicksand" }}
  >
    <div style={{marginBottom:"3rem"}}>
        <h4>Finansman</h4>
          <hr/>
        </div>
    <div className="row mt-4">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-5">
              {financeList.map((item) => (
                <div
                  class="row my-2 py-2 d-flex align-items-center "
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <div class="col-sm-6 col-md-2 col-lg-1">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                      }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div class="col-sm-12 col-md-3 col-lg-3">
                    <strong>{item.title}</strong>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-6">
                    <p>{item.desc}</p>
                  </div>
                  <div class="col-sm-3 d-flex justify-content-end  col-md-12 col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      style={{ background: "#31375B", color: "white" }}
                      onClick={()=> handleCopyClick(item.desc)}
                    >
                      <i class="fa-regular fa-copy"></i> kopyala
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Financing
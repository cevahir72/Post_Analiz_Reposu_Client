import React from 'react'

const Footer = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5"
      style={{ background: "#31375B"}}>
      {/* <!-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2023. All rights reserved. MK-SOFTWARE
      </div>
      {/* <!-- Copyright --> */}
  
      {/* <!-- Right --> */}
      <div>
        <a href="#!" className="text-white me-4">
        <i class="bi bi-facebook"></i>
        </a>
        <a href="#!" className="text-white me-4">
        <i class="bi bi-twitter"></i>
        </a>
        <a href="#!" className="text-white me-4">
          <i className="bi bi-google"></i>
        </a>
        <a href="#!" className="text-white">
        <i class="bi bi-linkedin"></i>
        </a>
      </div>
      {/* <!-- Right --> */}
    </div>
  )
}

export default Footer
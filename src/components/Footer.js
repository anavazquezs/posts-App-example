import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{ minHeight:'12em'}}>
      <div className='row pt-4 text-center'>
        {/* Create 3 sections each of 4 cols for lg and md devices but for sm divice of 12 cols*/}
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5 className='foot-title'>Quick links</h5>
            <div className='d-flex flex-column mb-2'>
              <NavLink className='text-white lh-lg pt-3' to="/about">About us</NavLink>
              <NavLink className='text-white lh-lg' to="/contact">Contact us</NavLink>
            </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5 className='foot-title'>Newsletters</h5>
          <div style={{ minHeight:'8rem' }} className='d-flex flex-column justify-content-around mb-2'>
            <form>
              <input type="text" className="form-control" placeholder='Subscribe to the newsletter' />
              <button type="submit" className='btn btn-warning mt-4'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5 className='foot-title'>Contact address</h5>
          <div className='d-flex flex-column mb-2'>
            <p>
            <i className="px-2 fa-solid fa-location-arrow"></i>26 Huston Street
            </p>
            <p>Newton City</p>
            <p>Random State - 756767</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
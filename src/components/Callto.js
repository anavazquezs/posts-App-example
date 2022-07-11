import React from 'react';
import { Link } from 'react-router-dom';

function Callto() {
  return (
    <div className='container-fluid bg-primary bg-gradient mt-4' style={{minHeight:'30vh'}}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <i className="fs-1 text-light my-3 fa-solid fa-location-dot"></i>
            <h3 className='text-white text-uppercase'>We have a wide variety of posts</h3>
            <button className='f-w-bold btn btn-dark my-3 text-uppercase'>
              <Link className='btn btn-dark' to='/allposts'>View All Posts</Link>
            </button>
        </div>
    </div>
  )
}

export default Callto
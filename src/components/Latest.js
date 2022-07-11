import React from 'react';
import { Link } from 'react-router-dom';

function Latest() {
  return (
    <div className='latest-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>Latest posts</h3>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1547638599-d4bf222cf5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className='d-grid'>
                            <Link to='/allposts' className="btn btn-secondary">Read more...</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className='d-grid'>
                            <Link to='/allposts' className="btn btn-secondary">Read more...</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className='d-grid'>
                            <Link to='/allposts' className="btn btn-secondary">Read more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest
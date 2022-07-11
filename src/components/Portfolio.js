import React from 'react';

function Portfolio() {
  return (
    <div className='our-portfolio container'>
        <h3 className='text-center text-uppercase py-4'>Our portfolio</h3>
        <div className="container">
            <div className="row g-2">
                <div className="col-6">
                    <div className="p-1 border bg-light">
                        <img src="https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-1 border bg-light">
                        <img src="https://images.unsplash.com/photo-1600585154166-d8897c8f930d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNhc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-1 border bg-light">
                        <img src="https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNhc2FzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-1 border bg-light">
                        <img src="https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxjYXNhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
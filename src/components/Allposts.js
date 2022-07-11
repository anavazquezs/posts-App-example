import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/constant';


function Allposts() {
  

  // Create a variable to store all posts and set a method to update the value of posts 
  //useState() hook helps us to create this variable winth empty array

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] =useState(false);

  

  

  //Function to get all posts from REST API
  const getAllPosts = () => {
    setLoader(true);
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
        setLoader(false);
    });
  }

  //useEffect() hook helps us to load data on page load of this component

  useEffect(() => {
    //console.log("All posts loaded");
    getAllPosts();
  }, []) //empty array means execute only once when component loads

  return (
    <div className='all-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>All posts</h3>
        <div id="alertMsg"></div>
        <div className='row'>
            {loader ?
              <div className='col-12 text-center'>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :posts.map((post, index) => {
              return <div key={post.id} className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                      <div className="card">
                        <img style={{ height:'50vh'}} src="https://source.unsplash.com/400x400/?citynight" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{post.title}</h5>
                          <p className="card-text">{post.body}</p>
                            <div className='d-grid'>
                              <Link to={`/allposts/${post.id}/${post.userId}`} className="btn btn-primary text-uppercase">
                              <i className="fa-solid fa-location-arrow me-1"></i>
                                Details
                              </Link>
                            </div>
                        </div>
                      </div>
                    </div>
            })
            }
        </div>
    </div>
  )
}

export default Allposts
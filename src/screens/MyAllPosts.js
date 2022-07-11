import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/constant';
import axios from 'axios';
import { UserContext } from '../App';


function MyAllPosts() {
    const navigate = useNavigate();

    // Create a variable to store all posts and set a method to update the value of posts 
    //useState() hook helps us to create this variable winth empty array
  
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] =useState(false);
    const { state, dispatch } = useContext(UserContext);
  
    const alertPlaceholder = document.getElementById('alertMsg')
  
    const alertFunction = (message, type) => {
      const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
      }
  
    const deletePost = (postId) => {
      let action = window.confirm('Are you sure to proceed?');
      if(action) {
        axios.delete(`${API_BASE_URL}/posts/${postId}`)
          .then((res) => {
            console.log(res);
            alertFunction(`Post with Id ${postId} has been deleted`, 'success');
            navigate('/posts');
          })
          .catch((err) => {
            console.log(err);
            alertFunction('Error occurred in deleting process', 'danger');
          })
      }
    };
  
    //Function to get all posts from REST API
    const getAllPosts = () => {

      if(state) {
        setLoader(true);
        fetch(`${API_BASE_URL}/posts`)
            .then((response) => response.json())
            .then((json) => {
        setPosts(json);
        setLoader(false);
        });
      }
    }
  
    //useEffect() hook helps us to load data on page load of this component
  
    useEffect(() => {
      //console.log("All posts loaded");
      getAllPosts();
    }, []) //empty array means execute only once when component loads
  
    return (
      <div className='all-posts container pt-2'>
          <h3 className='text-center text-uppercase py-4'>My all posts</h3>
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
                              <div className='d-flex justify-content-between'>
                                <Link to={`/allposts/${post.id}/${post.userId}`} className="btn btn-primary">
                                <i className="fa-solid fa-location-arrow me-1"></i>
                                  Details
                                </Link>
                                <Link to={`/create/${post.id}/${post.userId}`} className="btn btn-warning">
                                <i className="fa-solid fa-pen-to-square me-1"></i>
                                  Edit
                                </Link>
                                <button onClick={() => {deletePost(post.id)}} className="btn btn-danger">
                                <i className="fa-solid fa-trash-can me-1"></i>
                                  Delete
                                </button>
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

export default MyAllPosts
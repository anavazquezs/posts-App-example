import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/constant';
import './PostDetail.css';

function PostDetail() {

    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [website, setWebsite] = useState();

    const {postId, userId} = useParams();

    const getPostAndUser = () => {
        axios.get(`${API_BASE_URL}/posts/${postId}`)
            .then((postRes) => {
                const { title, body} = postRes.data;
                setTitle(title);
                setBody(body);
                axios.get(`${API_BASE_URL}/users/${userId}`)
                    .then((userRes) => {
                        const { name, email, phone, website } = userRes.data;
                        setName(name);
                        setEmail(email);
                        setPhone(phone);
                        setWebsite(website);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    //useEffect() hook helps us to load data on page load of this component
  useEffect(() => {
    //console.log("Post details loaded");
    getPostAndUser();
  }, []) //empty array means execute only once when component loads

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h3 className='text-center text-uppercase pt-4'>Post details</h3>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-9 col-lg-9 col-sm-12'>
                <div className="card mb-3">
                    <img src="https://source.unsplash.com/800x600/?city,night" className="card-img-top card-img-height" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-lg-3 col-sm-12'>
                <div className="card">
                    <img src="https://source.unsplash.com/800x800/?person" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">User information</h5>
                        <p className="card-text">{name}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <a href={`mailto: ${email}`}>{email}</a>
                        </li>
                        <li className="list-group-item">
                            <a href={`tel: ${phone}`}>{phone}</a>
                        </li>
                        <li className="list-group-item">
                        <a target={'_blank'} href={`www.${website}`}>{website}</a>
                        </li>
                        <li className="list-group-item">
                            <div className='d-block'>
                                <button onClick={() => { navigate(-1)}} className='btn btn-primary w-100 text-uppercase'>Back</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetail
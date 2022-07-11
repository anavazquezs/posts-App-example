import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function NavBar() {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  //Función para el logout
  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  //Menú dinámico que depende de si el usuario está o no logueado
  const dynamicMenu = () => {
    
    if(state) {
      return [
        <li key='990' className="nav-item">
                <NavLink className="nav-link text-uppercase" aria-current="page" to="/myposts">My posts</NavLink>
        </li>,
        <li key='989' className="nav-item">
                <NavLink className="nav-link text-uppercase" aria-current="page" to="/create">Create post</NavLink>
        </li>
      ]
    }
  };

  //Renderizado
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">PostsApp</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key='988' className="nav-item">
                <NavLink className="nav-link text-uppercase" aria-current="page" to="/">Home</NavLink>
              </li>
              <li key='987' className="nav-item">
                <NavLink className="nav-link text-uppercase" aria-current="page" to="/allposts">Posts</NavLink>
              </li>
              <li key='986' className="nav-item">
                <NavLink className="nav-link text-uppercase" aria-current="page" to="/about">About us</NavLink>
              </li>
              <li key='985' className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
              </li>
              {dynamicMenu()}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              {state ? 
                  <button onClick={(event) => logout(event)} className="btn btn-danger" type="submit">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </button> 
              : <>
                  <NavLink to='/login' className="btn btn-primary">
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </NavLink>
                  <NavLink to='/signup' className="btn btn-primary">
                    <i className="fa-solid fa-user-plus"></i>
                  </NavLink>
              </>}
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavBar
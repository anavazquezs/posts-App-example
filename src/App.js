import React, { useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Allposts from './components/Allposts';
import PostDetail from './screens/PostDetail';
import CreatePost from './components/CreatePost';
import { Signup } from './screens/Signup';
import { Login } from './screens/Login';
import { initialUserState, userReducer } from './reducers/userReducer';
import MyAllPosts from './screens/MyAllPosts';

export const UserContext = createContext();

function DynamicRoutes() {

  const navigate = useNavigate();
  
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {//Means user is already logged in
      const user = JSON.parse(localStorage.getItem('user'));
      const userState = {'token': token, 'user': user};
      const action = {type: 'LOGIN', payload: userState};
      dispatch(action);
      navigate('/posts');
    } else {
      navigate('/login');
    }
  }, [])
    return(
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/allposts' element={<Allposts />}></Route>
          <Route exact path='/myposts' element={<MyAllPosts />}></Route>
          <Route exact path='/create' element={<CreatePost />}></Route>
          <Route exact path='/create/:postId/:userId' element={<CreatePost />}></Route>
          <Route exact path='/allposts/:postId/:userId' element={<PostDetail />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    )
}


function App() {

  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <div>
          <NavBar />
          <DynamicRoutes />
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

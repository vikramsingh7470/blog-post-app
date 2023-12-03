import './App.css';
import React from 'react'
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Provider from './context/provider/LikeProvider';
import My404 from './components/My404';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddBlog />} />
        <Route exact path="blog/edit/:id" element={<EditBlog />} />
        <Route exact path="/blog/:id" element={<Provider><BlogDetails /></Provider>} />
        <Route path='*' exact={true} element={<My404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

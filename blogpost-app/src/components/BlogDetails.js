import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "../style/BlogDetails.css";
import { LikeProvider } from '../context/provider/LikeProvider.js'

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentBlog = blogs.find((blog) => blog.id === parseInt(id));
  const deleteBlog = (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
    toast.success("Blog Deleted Successfully !!!");
    navigate("/");
  };

  const { blogFinder } = LikeProvider()
  const { likeBlog } = LikeProvider()
  const [like, setLike] = useState(blogFinder(id));

  const toggleLike = () => {
    likeBlog(id);
    if (like === 1) {
      setLike(0)
    } else {
      setLike(1)
    }
  }

  return (
    <>
      {currentBlog ? (<div className="container">
        <div className="row justify-content-between d-flex mt-2">
          <div>
            <h2>
              <Link to="/" className="text-dark">
                <i class="fas fa-home"> Home</i>
              </Link>
            </h2>
          </div>
          <div className="justify-content-end d-flex">
            <h2>
              {like === 1 ? <i class="fas fa-heart mx-3 text-danger" onClick={() => toggleLike(id)}></i> : <i class="far fa-heart mx-3" onClick={() => toggleLike(id)}></i>}
            </h2>
            <h2>
              <Link to={`/blog/edit/${currentBlog.id}`} className="text-dark">
                <i class="fas fa-edit mx-3"></i>
              </Link>
            </h2>
            <h2>
              <button
                className="text-dark btn pt-0"
                onClick={() => deleteBlog(currentBlog.id)}
              >
                <h2>
                  <i class="fas fa-trash-alt mx-3"></i>
                </h2>
              </button>
            </h2>
          </div>
        </div>
        <div className="rounded-border shadow mt-3 mb-5">
          <div className=" row justify-content-center">
            <img
              src={currentBlog.image}
              alt="Not Found"
              className="col-6 blogDetails-img mt-4 px-0"
            />
          </div>
          <div className="justify-content-center d-flex">
            <h1 className="px-5">{currentBlog.title}</h1>
          </div>
          <hr className="mx-5 " />
          <div className="justify-content-center d-flex px-5 pb-5">
            <p className="px-3 text-justify h5  font-weight-normal">
              {currentBlog.description}
            </p>
          </div>
        </div>
      </div>) : (<div className="justify-content-center d-flex my-5 py-5" style={{ minHeight: '66 vh' }}>
        <h1 className="my-5 py-5">Blog with id : {id} not exist !!!</h1>
      </div>)}
    </>
  );
};

export default BlogDetails;

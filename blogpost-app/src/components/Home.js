import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  const blogs = useSelector((state) => state);
  return (
    <>
      <div className="container home">
        <div className="row mt-3">
          <div className="col-md-12 text-right">
            <Link to="/add" className="btn btn-outline-dark">
              Add Blog
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          {blogs.map((blog, id) => (
            <div className="col-md-4 my-3 ">
              <div className="card shadow" style={{ width: "18rem" }} key={id}>
                <img
                  style={{ height: "10rem" }}
                  src={blog.image}
                  className="card-img-top my-img"
                  alt="Not Found"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">
                    {blog.title}
                  </h5>
                  <p className="card-text text-truncate">
                    {blog.description}
                  </p>
                  <Link to={`/blog/${blog.id}`} className="btn btn-primary btn-block">
                    View Blog
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

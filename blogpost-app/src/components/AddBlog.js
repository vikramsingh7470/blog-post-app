import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");
  const [image, setImage] = useState("");
  const [description, setDiscription] = useState("");

  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !technology || !image || !description) {
      return toast.warning("Please fill in all fields");
    }

    const data = {
      id: blogs[blogs.length - 1].id + 1,
      title,
      technology,
      image,
      description,
    };
    dispatch({ type: "ADD_BLOG", payload: data });
    toast.success("Blog added Successfully !!!");
    navigate("/");
  };

  return (
    <>
      <div className="container shadow my-3 py-3 justify-content-center ">
        <form onSubmit={handleSubmit}>
          <div className="justify-content-center d-flex">
            <h1>Add Blog</h1>
          </div>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="image">Image URL</label>
                <input
                  type="url"
                  id="image"
                  placeholder="Enter Image Link"
                  className="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="technology">Category</label>
                <input
                  type="text"
                  id="technology"
                  placeholder="Enter Category"
                  className="form-control"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              placeholder="Type here..."
              onChange={(e) => setDiscription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Blog"
              className="btn btn-block btn-success"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");
  const [image, setImage] = useState("");
  const [description, setDiscription] = useState("");

  const currentBlog = blogs.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    if (currentBlog) {
      setTitle(currentBlog.title);
      setTechnology(currentBlog.technology);
      setImage(currentBlog.image);
      setDiscription(currentBlog.description);
    }
  }, [currentBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !technology || !image || !description) {
      return toast.warning("Please fill in all fields");
    }

    const data = {
      id: parseInt(id),
      title,
      technology,
      image,
      description,
    };
    dispatch({ type: "UPDATE_BLOG", payload: data });
    toast.success("Blog updated Successfully !!!");
    navigate("/");
  };

  return (
    <>
      {currentBlog ? (
        <div className="container shadow my-3 py-3 justify-content-center ">
          <form onSubmit={handleSubmit}>
            <div className="justify-content-center d-flex">
              <h1>Edit Blog</h1>
            </div>
            <div className="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
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
                    name="image"
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
                    name="technology"
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
                name="description"
                rows="3"
                value={description}
                placeholder="Type here..."
                onChange={(e) => setDiscription(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex row">
              <div className="form-group col-md-6 px-0 pl-3">
                <Link to="/" className="btn btn-block btn-danger rounded-0">
                  Cancel
                </Link>
              </div>
              <div className="form-group col-md-6 px-0 pr-3">
                <input
                  type="submit"
                  value="Update Blog"
                  className="btn btn-block btn-success rounded-0"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div
          className="justify-content-center d-flex my-5 py-5"
          style={{ minHeight: "80 vh" }}
        >
          <h1 className="my-5 py-5">Blog with id : {id} not exist !!!</h1>
        </div>
      )}
    </>
  );
};

export default EditBlog;

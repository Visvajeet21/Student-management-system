import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [getData, setGetData] = useState({
    name: "",
    age: "",
    subject: "",
    course: "",
    mobile: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate(); // USED FOR NAVIGATION FROM ONE PAGE TO ANOTHER
  useEffect(() => {
    axios
      .get("http://localhost:3000/student/" + id)
      .then((response) => {
        setGetData(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  function handleData(e) {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id, getData)
      .then((response) => {
        setGetData(response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-info text-dark">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h3 className="d-flex justify-content-center">UPDATE DETAILS</h3>
          <form onSubmit={handleData} className="d-flex flex-column ">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => {
                setGetData({ ...getData, name: e.target.value });
              }}
              value={getData.name}
              className="mb-3"
            />
            <input
              type="text"
              placeholder="Enter your age"
              name="age"
              onChange={(e) => {
                setGetData({ ...getData, age: e.target.value });
              }}
              value={getData.age}
              className="mb-3"
            />
            <input
              type="text"
              placeholder="Enter your subject"
              name="subject"
              onChange={(e) => {
                setGetData({ ...getData, subject: e.target.value });
              }}
              value={getData.subject}
              className="mb-3"
            />
            <input
              type="text"
              placeholder="Enter your course"
              name="course"
              onChange={(e) => {
                setGetData({ ...getData, course: e.target.value });
              }}
              value={getData.course}
              className="mb-3"
            />
            <input
              type="text"
              placeholder="Enter your mobile"
              name="mobile"
              onChange={(e) => {
                setGetData({ ...getData, mobile: e.target.value });
              }}
              value={getData.mobile}
              className="mb-3"
            />
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => {
                setGetData({ ...getData, email: e.target.value });
              }}
              value={getData.email}
              className="mb-3"
            />
            <button type="submit" className="btn btn-info mt-3">
              Update
            </button>
            <Link to="/" className="btn btn-primary mt-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;

import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Home from "./Home";
import { Link, useNavigate, useParams } from "react-router-dom";
const Create = () => {
  const { id } = useParams();
  const [value, setValue] = useState({
    name: "",
    age: "",
    subject: "",
    course: "",
    mobile: "",
    email: "",
  });
  const navigate = useNavigate(); // USED FOR NAVIGATION FROM ONE PAGE TO ANOTHER
  function handleSubmit(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function submitData(e) {
    e.preventDefault(); // PREVENT PREVIOUS DATA FROM VANISH
    axios
      .post("http://localhost:4000/create", value)
      // .post("http://localhost:3000/student/", value)
      .then((response) => {
        console.log("Response ==> ", response);
        navigate("/"); // NAVIGATE TO HOME PAGE
        setValue({
          id: "",
          name: "",
          age: "",
          subject: "",
          course: "",
          mobile: "",
          email: "",
        });
      })
      .catch((err) => {
        console.log("Error occured");
      });
  }
  return (
    <>
      {/* <Navbar /> */}

      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-info text-dark">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h2 className="d-flex justify-content-center">
            STUDENT REGISTRATION
          </h2>
          <form onSubmit={submitData} className="d-flex flex-column w-100">
            <input
              type="text"
              placeholder="Enter Name"
              value={value.name}
              name="name"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Age"
              value={value.age}
              name="age"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Subject"
              value={value.subject}
              name="subject"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Course"
              value={value.course}
              name="course"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Mobile"
              value={value.mobile}
              name="mobile"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              value={value.email}
              name="email"
              onChange={(e) => handleSubmit(e)}
            />
            <br />
            <button type="submit" className="btn btn-success">
              Add Student
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

export default Create;

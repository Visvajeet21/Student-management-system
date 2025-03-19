import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// import Navbar from "./Navbar";
const Read = () => {
  const { id } = useParams(); // READING ID
  const [getData, setGetData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/${id}`)
      .then((response) => {
        console.log(response.data);
        setGetData(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-info text-dark">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded d-flex justify-content-center flex-column">
          <h2 class="p-2 mb-2 bg-info-subtle text-info-emphasis d-flex justify-content-center">
            Student Details
          </h2>
          <div>Name: {getData?.name}</div>
          <div>Age: {getData?.age}</div>
          <div>Email: {getData?.email}</div>
          <div>Course: {getData?.course}</div>
          <div>Subject: {getData?.subject}</div>
          <div>Mobile: {getData?.mobile}</div>
          <Link to="/" className="btn btn-primary mt-3">
            Back
          </Link>
          <Link to={`/update/${id}`} className="btn btn-primary mt-3">
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default Read;

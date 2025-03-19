import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { IoReader } from "react-icons/io5";
// import Navbar from "./Navbar";
const Home = () => {
  const [getData, setGetData] = useState([]);
  const dataFetching = () => {
    axios
      .get("http://localhost:3000/student")
      .then((response) => {
        // console.log(response);
        setGetData(response.data);
      })
      .catch((e) => {
        console.error("Error Occured", e);
      });
  };
  useEffect(() => {
    dataFetching();
  }, []);

  function deleteData(id) {
    const confirmOpt = window.confirm("Would you like to delete?");
    if (confirmOpt) {
      axios
        .delete("http://localhost:3000/student/" + id)
        .then((response) => {
          console.log("Response", response);
          // window.location.reload(); // THIS WILL RELOAD AND REFRESH THE WHOLE BROWSER AND PAGE
          dataFetching(); // RENDER THE COMPONENTS AND WEB PAGE WITHOUT REFRESH AND CHANGES THE UI
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          backgroundColor: "cyan",
          height: "10vh",
        }}
      >
        Student Management System
      </h1>
      <Link to={"/create"}>
        <button
          style={{ marginBottom: "15px", marginLeft: "10px" }}
          className="btn btn-success"
        >
          Create Student <IoMdAddCircle />
        </button>
      </Link>
      <table
        border="1"
        cellPadding="5"
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          border: "10px solid black",
          width: "98vw",
        }}
        class="table table-dark table-hover"
      >
        <thead>
          <tr style={{ textAlign: "center", border: "2px solid red" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((item, index) => {
            return (
              <tr key={index} style={{ textAlign: "center" }}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/read/${item.id}`}>
                    <button className="btn btn-outline-info m-1">
                      Read <IoReader />
                    </button>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-outline-success m-1">
                      Update <FaPencilAlt />
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger m-1"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Navbar /> */}
    </>
  );
};

export default Home;

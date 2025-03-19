// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <>
//       <Link to="/">Home</Link>
//       <Link to="/read/1">Read</Link>
//       <Link to="/create">Add</Link>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/create">
              Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

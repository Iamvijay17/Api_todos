import React from "react";
import logo from "./Asset/task.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-light  fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-light fw-bolder" href="/"><img src={logo} alt="" srcset="" /> Api-Todos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg text-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header"><img src={logo} alt="" srcset="" />
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Api-Todos</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body ">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item ">
            <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/Todos">Todos</a>
          </li>
         
        </ul>
        <form class="d-flex mt-3 scale-in-center" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;

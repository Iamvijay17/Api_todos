import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer class="bg-light text-center text-white">
        {/* Grid container  */}
        <div class="container p-4 pb-0">
          {/* Section: Social media  */}
          <section class="mb-4">
            {/* Facebook  */}
            <a
              class="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i ><FaFacebookF/></i>
            </a>

            

            {/* Google  */}
            <a
              class="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i><FaGoogle/></i>
            </a>

            {/* Instagram  */}
            <a
              class="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i ><FaInstagram/></i>
            </a>

           
            {/* Github  */}
            <a
              class="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Iamvijay17"
              role="button"
            >
              <i> <FaGithub/></i>
            </a>
          </section>
          {/* Section: Social media  */}
        </div>
        {/* Grid container  */}

        {/* Copyright  */}
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
        >
          © 2023 Copyright:
          <a class="text-white" href="https://github.com/Iamvijay17">
           Vijay17
          </a>
        </div>
        {/* Copyright  */}
      </footer>
    </div>
  );
};

export default Footer;

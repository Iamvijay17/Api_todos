import React from "react";
import style from "./Title.css";

const Title = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-12">
          <div class="wrapper">
            <svg>
              <text
                x="50%"
                y="50%"
                dy=".35em"
                text-anchor="middle"
                className="cen"
              >
                Api
              </text>
            </svg>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col-12">
          <div class="wrapper">
            <svg>
              <text
                x="50%"
                y="50%"
                dy=".35em"
                text-anchor="middle"
                className="cen"
              >
                Todos
              </text>
            </svg>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Title;

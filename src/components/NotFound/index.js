import React from "react";
import "./notfound.css";
export const NotFound = () => {
  return (
    <div className="page-container">
      <div className="bg"> </div>
      <div className="title">
        404{" "}
        <p className="text-error">
          We are sorry but the page you are looking for does{" "}
          <small>
            <i style={{ color: "#777" }}>not exist</i>
          </small>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
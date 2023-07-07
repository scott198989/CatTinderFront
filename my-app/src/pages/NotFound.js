import React from "react";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <h3 className="error title">THERE ISNT ANYTHING HERE!</h3>
      <p className="error message">The requested page could not be found.</p>
    </>
  );
};

export default NotFound;

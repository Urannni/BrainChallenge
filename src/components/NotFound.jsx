import React from "react";
import "../App.css";

function NotFound() {
  return (
    <div className="main">
      {/* To set the bg color */}
      <h1 className="t404">! 404 !</h1>
      <h1 className="title">Page Not Found</h1>
      <p className="titlee">Oops! The page you're looking for does not exist.</p>
    </div>
  );
}

export default NotFound;

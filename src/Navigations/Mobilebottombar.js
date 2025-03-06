import React from "react";
import { Link, useLocation } from "react-router-dom";

function CustomLink({ to, iconClass, text }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: isActive ? "#FF7035" : "#121212",
        textAlign: "center",
      }}
      className="d-flex flex-column align-items-center"
    >
      <i
        className={iconClass}
        style={{
          fontSize: "24px",
          color: isActive ? "#FF7035" : "#121212",
        }}
      ></i>
      <span
        style={{
          fontSize: "12px",
          fontFamily: "Manrope, sans-serif",
          color: isActive ? "#FF7035" : "#121212",
        }}
      >
        {text}
      </span>
    </Link>
  );
}

const Mobilebottombar = () => {
  return (
    <div
      className="d-block d-md-none"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTop: "1px solid #ddd",
      }}
    >
      <div className="container-fluid py-2">
        <div className="row justify-content-around text-center">
          <div className="col">
            <CustomLink to="/home" iconClass="fas fa-home" text="Home" />
          </div>
          <div className="col">
            <CustomLink
              to="/account"
              iconClass="fas fa-user-circle"
              text="My Account"
            />
          </div>
          <div className="col">
            <CustomLink
              to="/gift-cards"
              iconClass="fas fa-gift"
              text="Gift Cards"
            />
          </div>
          <div className="col">
            <CustomLink
              to="/studios"
              iconClass="fas fa-map-marker-alt"
              text="Studios"
            />
          </div>
          <div className="col">
            <CustomLink
              to="/categories"
              iconClass="fas fa-list"
              text="Categories"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilebottombar;

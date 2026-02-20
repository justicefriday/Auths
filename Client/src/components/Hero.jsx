import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

const Hero = () => {
  const user = useUserStore((s) => s.user);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center text-white py-5 m-2"
      style={{ backgroundColor: "#09637E", minHeight: "60vh" }}
    >
      <h1 className="fw-bold mb-3 display-4">
        Welcome to AuthApp {user ? `, ${user.name}` : ""}
      </h1>

      <p
        className="lead mb-4"
        style={{ color: "#EBF4F6", maxWidth: "600px" }}
      >
        Secure, fast, and simple authentication for your app.
        Login, register, and access your dashboard with ease.
      </p>

      <div className="d-flex gap-3 flex-wrap justify-content-center">

        {user ? (
          <Link
            to="/dashboard"
            className="btn btn-lg fw-semibold"
            style={{ backgroundColor: "#088395", color: "#fff" }}
          >
            Go To Dashboard
          </Link>
        ) : (
          <>
            <Link
              to="/register"
              className="btn btn-lg fw-semibold"
              style={{ backgroundColor: "#088395", color: "#fff" }}
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="btn btn-lg fw-semibold"
              style={{ backgroundColor: "#7AB2B2", color: "#fff" }}
            >
              Login
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default Hero;

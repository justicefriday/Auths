import React from "react";
import { useUserStore } from "../store/useUserStore";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const user = useUserStore((s) => s.user);

  // Redirect to login if not logged in
  if (!user) return <Navigate to="/login" />;

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#EBF4F6" }}
    >
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-11 col-sm-8 col-md-6 col-lg-4">

            <div
              className="card shadow-lg border-0 text-center"
              style={{ borderRadius: "15px" }}
            >
              {/* Header */}
              <div
                className="card-header text-white"
                style={{
                  backgroundColor: "#09637E",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <h4 className="mb-0">Dashboard</h4>
              </div>

              {/* Body */}
              <div className="card-body p-4">

                <h5 className="fw-semibold mb-3">
                  Welcome, {user.name} 
                </h5>

                <p className="mb-0">
                  Your email: <span className="fw-bold">{user.email}</span>
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

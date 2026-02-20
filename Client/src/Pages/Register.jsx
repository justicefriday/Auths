import React, { useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const register = useUserStore((s) => s.register);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await register(name, email, password);
    toast.success('Thanks for Registering with us');
    navigate("/dashboard");
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
  }
};

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#EBF4F6" }}
    >
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-11 col-sm-8 col-md-6 col-lg-4">

            <div
              className="card shadow-lg border-0"
              style={{ borderRadius: "15px" }}
            >
              {/* Header */}
              <div
                className="card-header text-center text-white"
                style={{
                  backgroundColor: "#09637E",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <h4 className="mb-0">Create Account</h4>
              </div>

              {/* Body */}
              <div className="card-body p-4">

                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="btn w-100 fw-semibold"
                    style={{
                      backgroundColor: "#088395",
                      color: "#fff",
                    }}
                  >
                    Register
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;

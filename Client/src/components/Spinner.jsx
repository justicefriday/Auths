import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #6E8CFB, #636CCB, #50589C, #3C467B)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite",
      }}
    >
      <BounceLoader color="#FFD700" size={90} />
    </div>
  );
};

export default Spinner;

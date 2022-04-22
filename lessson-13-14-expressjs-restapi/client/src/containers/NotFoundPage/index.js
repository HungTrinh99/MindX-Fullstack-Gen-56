import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleBackToHomeBtn = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-center text-danger">404</h1>
      <h2 className="text-center text-danger">Page not found</h2>
      <Button type="primary" onClick={handleBackToHomeBtn}>
        Back to home
      </Button>
    </div>
  );
};

export default NotFoundPage;

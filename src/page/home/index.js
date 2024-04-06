import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "false") {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.setItem("auth", false);
    navigate("/login");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

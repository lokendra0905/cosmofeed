import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData || {};

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      navigate("/home-page");
    }
  }, [navigate]);

  const submitData = async (e) => {
    e.preventDefault();
    await localStorage.setItem("auth", true);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/home-page");
  };

  return (
    <div style={{ width: "30%", margin: "auto", marginTop: "300px" }}>
      <form
        onSubmit={submitData}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
          autoFocus
          placeholder="name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          placeholder="email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          required
          placeholder="password"
        />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

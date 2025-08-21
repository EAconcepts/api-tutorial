import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const { API_BASE_URL, setUser, setToken } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, userDetails);
      console.log(res);
      console.log("login successful");
      const { accessToken, refreshToken, ...user } = res?.data;
      console.log(user);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginMutation = useMutation({
    mutationFn: () => axios.post(`${API_BASE_URL}/auth/login`, userDetails),
    onSuccess: (data) => {
      console.log(data);
      alert("Login successful!");
      // window.location.href = "/";
    },
    onError: (error) => {
      console.log(error);
      alert(error.response?.data?.message);
    },
    onSettled: () => {
      console.log("This will run regardless");
    },
  });
  const { data, mutate, isPending } = useMutation({
    mutationFn: (loginCredientials) =>
      axios.post(`${API_BASE_URL}/auth/login`, loginCredientials),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = (e) => {
    e.preventDefault();
    console.log(userDetails);
    // loginMutation.mutate();
    mutate(userDetails);
  };

  return (
    <div>
      <h2>Login to Continue</h2>
      <form onSubmit={login}>
        <div>
          <label>username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userDetails.username}
          />
        </div>
        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
          />
        </div>
        <button disabled={loginMutation.isPending}>
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

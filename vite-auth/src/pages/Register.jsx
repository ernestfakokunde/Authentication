import React from 'react';
import axios from "../utils/axiosConfig";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();

  const [formData, setformData] = useState({
      username:"",
      email: "",
      password: "",
  })

  const handlechange= (e) =>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", formData);
      console.log(res.data);
      alert("user registered successfully")
      //navigate to login page
      navigate("/login");
    } catch (error) {
      console.error(err.response?.data || err.message);
      alert("Error registering user");
    };
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
        <form  onSubmit={handleSubmit} > 
          <div className="mb-4">
            <input
              type="text"
              name='username'
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name='email'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handlechange}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              name='password'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handlechange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

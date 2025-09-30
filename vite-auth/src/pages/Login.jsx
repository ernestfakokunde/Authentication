 import React, { use, useContext } from 'react';
 import axios from "../utils/axiosConfig";
 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { Authcontext } from '../context/authContext';
 
 
 const Login = () => {

    const { login } = useContext(Authcontext);
     const navigate = useNavigate();

    const [formData, setformData] = useState({
      email: "",
      password: "",
    })

    const handlechange = (e)=>{
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const res = await axios.post("/auth/login", formData);
        console.log(res.data);
        alert("login successful");
        setformData({"email":"", "password":""})
        navigate("/");
      } catch (error) {
        console.error(error.response?.data || error.message);
        alert("Error logging in user");
      }
    }

   return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
         <h2 className="text-2xl font-bold text-center mb-6">Already have an account ? Login </h2>
         <form onSubmit={handleSubmit}>
           <div className="mb-4">
             <input
               type="email"
               placeholder="Email"
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               onChange={handlechange}
               name='email'
             />
           </div>
           <div className="mb-6">
             <input
               type="password"
               placeholder="Password"
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               onChange={handlechange}
               name='password'
               id='password'
             />
           </div>
           <button
             type="submit"
             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
             
           >
             Login
           </button>
         </form>
         <p className="text-center text-gray-500 mt-4">
           Don't have an account?{' '}
           <a href="/register" className="text-blue-500 hover:underline">
             register
           </a>
         </p>
       </div>
     </div>
   );
 };
 
 export default Login;
 
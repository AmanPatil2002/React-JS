import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/Register",
        {
          username,
          email,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);
      alert("Register Successful");

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-500 mt-2">Register to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input type="password" placeholder="* * * * * * " value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Register
        </button>
      </form>
      <div className="mt-5 text-center"><h5>Already Registered then <a href="http://localhost:5173/" className=" hover:text-blue-700 transition duration-300">Sign In</a></h5></div>
    </div>
  </div>
);
}

export default Register;
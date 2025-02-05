import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sideImage from "../assets/sideImage.jpg";
import logo from "../assets/companyLogo.jpg";
import wavingHand from "../assets/wavingHand.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/auth/login", data);
      
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        
        // Show success toast and navigate to dashboard
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 1500,
          onClose: () => navigate("/dashboard"),
        });
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <ToastContainer />

      <div className="w-1/2 hidden md:flex items-center justify-center p-6">
        <img src={sideImage} alt="Side" className="w-full h-auto object-cover rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
        <div className="w-full max-w-md p-6">
          <img src={logo} alt="Company Logo" className="h-10 w-28 mb-4" />

          <div className="flex items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <img src={wavingHand} alt="Waving Hand" className="w-7 h-7 ml-2" />
          </div>

          <p className="text-sm font-normal text-gray-800 mb-6">
            Today is a new day. It&rsquo;s your day. You shape it.
            <br /> Sign in to start managing your projects.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                className="w-full p-2 border border-gray-300 rounded-md text-xs bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full p-2 border border-gray-300 rounded-md text-xs bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message:
                      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)",
                  },
                })}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-xs text-blue-400"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-sm bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-200"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-gray-400">© 2025 Enira Lean Automation.</p>
        </footer>
      </div>
    </div>
  );
}

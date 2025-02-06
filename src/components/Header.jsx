  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import axios from "axios";



  export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
  

  
    const handleCloseForm = () => {
      setIsFormOpen(false);
      reset(); // Clear the form fields when closing
    };

    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm();

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const onSubmit = async (data) => {
      try {
        const info = {
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
        };

        const response = await axios.post("http://localhost:8000/auth/signup", info);
        console.log("User Registered:", response.data);

        setIsRegistered(true);

        setIsFormOpen(false);

        reset();
        setIsDropdownOpen(false);
        setTimeout(() => setIsRegistered(false), 3000);

      } catch (error) {
        console.error("Error registering user:", error);
      }
    };
    return (
      <header className="flex items-center justify-between h-[73px] border-b-[0.9px] border-gray-300 bg-gray-200 w-[100vw] lg:w-[84.5vw]">
        <div className="flex ml-[40px] lg:ml-[0px] h-[73px] items-center ">
          <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-white flex items-center justify-center w-[8vw] sm:w-[6vw] md:w-[4vw]   lg:w-[2.8vw] text-[23px] rounded-tl-[8px] rounded-bl-[8px] ml-[10px] sm:ml-[20px]   h-[42px]">
            search
          </span>
          <input type="text" name="search" {...register("search")} placeholder="Search Tasks" className=" h-[42px] font-bold outline-none w-[28vw] sm:w-[25vw] md:w-[18vw] lg:w-[14vw] text-[12px] " />
          <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[8vw] sm:w-[6vw] md:w-[4vw]  lg:w-[2.8vw] text-[23px] cursor-pointer h-[42px] rounded-tr-[8px] rounded-br-[8px] ">
            login
          </span>
          <span className="material-symbols-outlined cursor-pointer bg-gray-200 text-gray-350 flex items-center justify-center w-[3vw] text-[24px] h-[42px] ml-[8px]">
            mic
          </span>
        </div>
        <div className="flex gap-1 sm:gap-2 md:gap-3 mr-[21px]">
          <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-gray-200 flex items-center justify-center text-[25px]">
            folder
          </span>
          <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-gray-200 flex items-center justify-center text-[25px] ">
            notifications
          </span>
          <div className="relative">
            <div
              className="h-[35px] w-[35px] ml-[8px] cursor-pointer rounded-full border-[1px] border-white "
              onClick={toggleDropdown}
            >
              <img
                src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"
                alt=""
              />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-2">
                  {/* Add New User option */}
                  <li
                    className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200"
                    onClick={() => setIsFormOpen(true)}
                  >
                    Add New User
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {isFormOpen && (
          <div className="absolute top-16 right-5 bg-white p-5 rounded-md border  border-gray-300 shadow-lg w-[300px]">
            <div className="flex justify-between">
              <h2 className="text-xl mb-4 font-bold">Register New User</h2>
              <button
                className="text-gray-500 hover:text-gray-700 px-[10px]"
                onClick={handleCloseForm}
              >
                <span className="material-symbols-outlined">close</span>
              </button>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="block text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
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
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="block text-sm font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="block text-sm font-semibold">
                  Role
                </label>
                <select
                  id="role"
                  {...register("role", { required: "Role is required" })}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                >
                  <option value="ROLE_USER">ROLE_USER</option>
                  <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                </select>
                {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-570 text-white p-2 rounded-md mt-4"
              >
                Register User
              </button>
            </form>
          </div>
        )}
        {isRegistered && (
          <div className="fixed top-16 right-5 bg-green-500 text-white p-3 rounded-md shadow-md w-[300px]">
            <p>User Registered Successfully!</p>
          </div>
        )}
      </header>
    );
  }

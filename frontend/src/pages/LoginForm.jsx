import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; 

function LoginForm() {

  const [isValid, setIsValid] = useState(null); // Set initial state to null

  const handleInputChange = (e) => {
    const value = e.target.value;

   if (value === "") {
      // If the input is empty, set isValid to null (no icon displayed)
      setIsValid(null);
    } else {
      // Example condition: If the username has more than 5 characters, set isValid to true, else false
      setIsValid(value.length > 5);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#13162e]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#21243D] bg-opacity-30 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <form className="mt-8 space-y-6">

          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              onChange={handleInputChange} // Call handleInputChange on input change
              className="w-full p-3 mt-1 border border-gray-100 border-opacity-30 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
              placeholder="Enter your username"
            />
            {isValid !== null && (
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                {isValid ? (
                  <FaCheckCircle style={{ fill: "#47fc19" }} className="mt-6" />
                ) : (
                  <FaTimesCircle style={{ fill: "#fc1934" }} className="mt-6" />
                )}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full p-3 mt-1 border border-gray-100 border-opacity-30 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default LoginForm;

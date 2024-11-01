

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#13162e]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#21243D] bg-opacity-30 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium ">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full p-3 mt-1 border border-gray-100 border-opacity-30 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
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

import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex mt-24 flex-col items-center justify-center max-w-96 min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md moviecardglassmorph">
        {/* <div className="text-lime-300 text-center text-4xl font-bold mb-2">
          {" "}
          Movie Search
        </div> */}

        <h1 className="text-3xl font-semibold text-center text-white">Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full text-white mt-2 mb-2 px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="*******"
              className="w-full text-white mt-2 mb-2 px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-lime-400 hover:underline hover:text-lime-300 mt-2 inline-block"
          >
            {"Don't"} have an account? SignUp
          </Link>

          <div>
            <button
              className="block css-button-retro--green mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex sm:mt-24 md:mt-0 flex-col items-center justify-center max-w-96 min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md moviecardglassmorph">
        {/* <div className="text-lime-300 text-center text-4xl font-bold mb-2">
          {" "}
          Movie Search
        </div> */}
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up
        </h1>
        <p className="text-[0.8rem] text-center  text-red-500 font-semibold mt-1">
          💡 Remember Username 💡
        </p>

        <form onSubmit={handleSubmit} className="mt-3">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Sandip"
              className="w-full mt-2 text-white mb-2 px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="sandip_1234"
              className="w-full mt-2 mb-2 text-white px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 mb-2 text-white px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 mb-2 text-white px-2 border border-white bg-gray-900/50 rounded-md h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm text-lime-400 hover:underline hover:text-lime-300 mt-2 inline-block"
            href="#"
          >
            Already have an account? Login
          </Link>

          <div>
            <button
              className="block css-button-retro--green mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

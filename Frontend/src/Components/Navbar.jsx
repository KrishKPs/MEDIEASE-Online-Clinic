import { useNavigate, useLocation } from "react-router-dom";
import { Interaction } from "./Interaction"; // Import the Interaction component
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showInteraction, setShowInteraction] = useState(false); // State to show Interaction

  function Login() {
    navigate("/signup");
  }
  function Signin() {
    navigate("/signin");
  }
  function Doctorlogin() {
    navigate("/doctorsregistration");
  }
  function Homepage() {
    navigate("/");
  }
  function Interaction_Button() {
    setShowInteraction(!showInteraction); // Toggle Interaction component
  }

  if (
    location.pathname !== "/homepage" &&
    location.pathname !== "/loggedin" &&
    location.pathname !== "/doctors" &&
    location.pathname !== "/medicaldata" &&
    location.pathname !== "/Interaction" &&
    location.pathname !== "/doctors-dashboard"
  ) {
    return (
      <div id="navbar" className="bg-misty-rose shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold cursor-pointer text-4xl" onClick={Homepage}>
            Online Clinic
          </h1>
          <div id="btn" className="space-x-4 text-md">
            <button
              onClick={Login}
              className="bg-rosy-brown text-black px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Signup
            </button>
            <button
              onClick={Signin}
              className="bg-rosy-brown text-black px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Signin
            </button>
            <button
              onClick={Doctorlogin}
              className="bg-rosy-brown text-black px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Doctor's Registration
            </button>
            <button
              onClick={Interaction_Button}
              className="bg-rosy-brown text-black px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              Drug-Drug Interaction
            </button>
          </div>
        </div>
        {showInteraction && (
          <div
            className="animate-slide-in mt-4 transition-all duration-500 ease-in-out"
            id="interaction-component"
          >
            <Interaction />
          </div>
        )}
      </div>
    );
  }

  return null;
}

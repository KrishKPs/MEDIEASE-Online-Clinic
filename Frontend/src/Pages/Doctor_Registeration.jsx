import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Doctor_Registeration() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  return (
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Doctor Registration</h2>
          
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="text"
            name="email"
            id="docemail"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            name="password"
            id="docpassword"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Experience"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />

          <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            onClick={async () => {
              fetch("http://localhost:3088/docsignup", {
                method: "POST",
                body: JSON.stringify({
                  username: username,
                  email: email,
                  password: password,
                  experience: Number(experience),
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(async (res) => {
                if (!res.ok) {
                  const errorData = await res.json();
                  throw new Error(
                    errorData.message || "Failed to register doctor."
                  );
                }

                alert("Doctor Registered");
                navigate("/doctors-dashboard");
              });
            }}
          >
            Signup
          </button>
        </div>
        
        <p
          className="mt-4 text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            navigate("/doctorslogin");
          }}
        >
          Already registered? Log in here
        </p>
      </div>
  );
}

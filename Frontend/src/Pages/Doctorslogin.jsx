import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing ShadCN UI components
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@shadcn/ui/card';
// import { Input } from '@shadcn/ui/input';
// import { Button } from '@shadcn/ui/button';
// import { Text } from '@shadcn/ui/text';

export function Doctorslogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Icon or Image for visual context */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/path-to-doctor-icon.png"
                        alt="Doctor Icon"
                        className="h-12 w-12"
                    />
                </div>

                {/* Main heading */}
                <h2 className="text-2xl font-bold mb-2 text-center text-blue-600">Doctor's Login</h2>

                {/* Subheading or description */}
                <p className="text-sm text-center text-gray-600 mb-6">
                    Please enter your credentials to access your account.
                </p>

                <input
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={() => {
                        fetch("http://localhost:3088/doctorslogin", {
                            method: "POST",
                            body: JSON.stringify({
                                username: username,
                                password: password,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then(async (res) => {
                                if (!res.ok) {
                                    const errorData = await res.json();
                                    throw new Error(errorData.message || "Invalid User");
                                }

                                const data = await res.json();

                                if (data.token) {
                                    localStorage.setItem("token", data.token);
                                    navigate("/doctors-dashboard");
                                }
                            })
                            .catch((error) => {
                                console.error("Error occurred:", error);
                                alert("Invalid User");
                            });
                    }}
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Login
                </button>
            </div>
        </div>

    );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await fetch("http://localhost:3088/signin", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Invalid User");
            }

            const json = await response.json();
            if (json.token) {
                localStorage.setItem('token', json.token);
                navigate('/homepage');
            } else {
                alert("Bhai kuch to gadbad hai daya");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            alert("User not Found");
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleSignin}
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Sign In
                </button>
            </div>

            <p
                className="mt-4 text-blue-500 cursor-pointer hover:underline"
                onClick={() => {
                    navigate("/signup");
                }}
            >
                Don't have an account? Sign up here
            </p>
        </div>

    );
}

import { useState } from "react";

export function Interaction() {
    const [drugA, setDrugA] = useState("");
    const [drugB, setDrugB] = useState("");
    const [responseMessage, setResponseMessage] = useState(""); // To store the response message

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
                <h1 className="text-xl font-bold text-center text-black mb-4">
                    Drug Interaction Checker
                </h1>
                
                {/* Drug A input */}
                <div className="mb-2">
                    <label htmlFor="drugA" className="block text-base font-medium text-black">
                        Drug A
                    </label>
                    <input
                        type="text"
                        id="drugA"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Drug A"
                        onChange={(e) => setDrugA(e.target.value)}
                        value={drugA}
                    />
                </div>

                {/* Drug B input */}
                <div className="mb-4">
                    <label htmlFor="drugB" className="block text-base font-medium text-black">
                        Drug B
                    </label>
                    <input
                        type="text"
                        id="drugB"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter Drug B"
                        onChange={(e) => setDrugB(e.target.value)}
                        value={drugB}
                    />
                </div>

                {/* Submit button */}
                <button
                    className="w-full bg-[#bc8f8f] text-black py-2 rounded-lg font-semibold shadow-lg hover:bg-[#bc8f8f] transition-all duration-200"
                    onClick={async () => {
                        try {
                            const res = await fetch("http://localhost:3088/interaction", {
                                method: "POST",
                                body: JSON.stringify({
                                    drugA: drugA,
                                    drugB: drugB
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            });

                            if (!res.ok) {
                                const errorData = await res.json();
                                throw new Error(errorData.message || "Failed to fetch interaction.");
                            }

                            const data = await res.json();
                            setResponseMessage(data.interaction || "Interaction fetched successfully!");
                        } catch (error) {
                            setResponseMessage(error.message);
                        }
                    }}
                >
                    Check Interaction
                </button>
            </div>

            {/* Response text box */}
            <div className="mt-4 w-full max-w-md">
                <h2 className="text-base font-semibold text-black mb-2">Response</h2>
                <textarea
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                    value={responseMessage}
                    readOnly
                />
            </div>
        </div>
    );
}

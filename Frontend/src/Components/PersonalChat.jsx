import { useState } from 'react';

export function PersonalChat() {
    const [messages, setMessages] = useState([
        { sender: 'doctor', text: 'Hello, how can I assist you today?' },
        { sender: 'user', text: 'I have a question about my prescription.' },
        { sender: 'doctor', text: 'Sure, let me check that for you.' }
    ]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#feeee1] to-[#bc8f8f]">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
                {/* Chat Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/40" // Placeholder for doctor profile
                            alt="Doctor Profile"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <div>
                            <h2 className="font-bold text-lg text-[#bc8f8f]">Dr. John Doe</h2>
                            <p className="text-sm text-gray-600">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/40" // Placeholder for user profile
                            alt="User Profile"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <div>
                            <h2 className="font-bold text-lg text-gray-700">You</h2>
                        </div>
                    </div>
                </div>

                {/* Chat Body */}
                <div className="flex flex-col space-y-4 max-h-96 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                msg.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`${
                                    msg.sender === 'user'
                                        ? 'bg-[#bc8f8f] text-white'
                                        : 'bg-gray-100 text-gray-800'
                                } p-3 rounded-lg max-w-xs shadow`}
                            >
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="mt-4 flex">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#bc8f8f]"
                    />
                    <button className="bg-[#bc8f8f] text-white p-3 rounded-r-lg hover:bg-[#a97878]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export function Chatbox() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg transition-transform ${isOpen ? 'transform translate-y-0' : 'transform translate-y-full'} z-50`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-3 text-white bg-[#bc8f8f] rounded-t-lg hover:bg-[#a97878] focus:outline-none focus:ring-2 focus:ring-[#bc8f8f] transition">
                <span className="text-lg font-semibold">Chat</span>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {isOpen && (
                <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start">
                            <div className="bg-[#f0f0f0] text-gray-800 rounded-lg p-3 shadow-sm max-w-xs">
                                <p>Hello! How can I assist you today?</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="bg-[#bc8f8f] text-white rounded-lg p-3 shadow-sm max-w-xs">
                                <p>I have a question about my prescription.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#e0f7fa] text-gray-800 rounded-lg p-3 shadow-sm max-w-xs">
                                <p>Sure, let me check that for you.</p>
                            </div>
                        </div>
                        {/* Add more messages as needed */}
                    </div>

                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bc8f8f] transition"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

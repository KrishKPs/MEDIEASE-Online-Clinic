import { useState } from 'react';
import { FiChevronDown, FiBell } from 'react-icons/fi';
import { Interaction } from '../Components/Interaction';
import { Profilecard } from '../Components/Profilecard';
import { Chatbox } from '../Components/Chatbox'; // Import the Chatbox component
import { PersonalChat } from '../Components/PersonalChat';

export function Doctors_landing() {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);

    const openProfile = async () => {
        try {
            const res = await fetch('http://localhost:3088/doctorprofile', {
                headers: {
                    'Authorization': ` ${localStorage.getItem('token')}` // Send the token in header
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch doctor details');
            }

            const data = await res.json();
            setDoctorDetails(data); // Set the doctor details
            setProfileOpen(true); // Open the profile card
        } catch (error) {
            console.error(error.message);
        }
    };

    const closeProfile = () => {
        setProfileOpen(false);
    };

    return (
        <div className="bg-gradient-to-br from-[#feeee1] to-[#bc8f8f] min-h-screen relative">
            {/* Navbar */}
            <nav className="bg-[#feeee1] shadow-lg relative z-40">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-[#bc8f8f] text-3xl font-bold tracking-wide">
                        <a href="#" className="hover:text-[#bc8f8f] transition-colors">
                            Clinic<span className="text-gray-700">Dashboard</span>
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative text-gray-600 hover:text-[#bc8f8f] transition-colors">
                            <FiBell className="w-6 h-6" />
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                                className="flex items-center space-x-2 bg-[#bc8f8f] text-white py-2 px-4 rounded-full hover:bg-[#bc8f8f] transition relative z-40">
                                <span>Profile</span>
                                <FiChevronDown className="w-5 h-5" />
                            </button>

                            {profileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                    <button
                                        onClick={openProfile}
                                        className="block px-4 py-2 text-black hover:bg-gray-100 transition">
                                        View Profile
                                    </button>
                                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100 transition">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100 transition">Logout</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <div className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-8 relative z-30">
                {/* Pending Requests Section */}
                <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md transform transition duration-500 hover:scale-105 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-black mb-6 text-center">
                        Pending Requests
                    </h2>

                    <span className="text-lg font-semibold text-black mb-4 text-center">
                        3 New Patient Requests
                    </span>
                    <button className="bg-[#bc8f8f] text-black py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-[#bc8f8f] transition-all duration-300">
                        View Requests
                    </button>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg transform transition duration-500 hover:scale-105 relative z-10">
                    <Interaction />
                </div>
            </div>

            {/* Profile Card Modal */}
            {profileOpen && <Profilecard doctorDetails={doctorDetails} closeProfile={closeProfile} />}

            {/* Chatbox Component */}
            <PersonalChat />
        </div>
    );
}

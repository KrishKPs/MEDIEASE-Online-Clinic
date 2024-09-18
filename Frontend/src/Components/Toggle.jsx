import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Toggle() {
    const [open, setOpen] = useState(false);
    const [showRecord, setShowRecord] = useState(false);
    const navigate = useNavigate();

    function logout() {
        console.log("here");
        localStorage.removeItem('token');
        navigate("/");
    }

    function medicalRecord() {
        navigate("/medicaldata");
    }

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const handleShowRecord = async () => {
        // Fetch medical data here
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3088/getmedicaldata", {
            method: "GET",
            headers: {
                "Authorization": token
            }
        });

        const data = await response.json();
        if (response.ok) {
            setShowRecord(data.medicalRecord);
        } else {
            alert(data.msg || "Error fetching medical data");
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <h1 
                id="toddleh" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                style={{ cursor: 'pointer' }}
            >
                <p className="text-2xl text-bold">Profile</p>
            </h1>

            {open && (
                <div 
                    id="toggle" 
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        zIndex: 1,
                        width: '200px',
                        borderRadius: '5px',
                    }}  
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <p 
                        style={{ margin: 0, padding: '8px 0', cursor: 'pointer' }}
                        onClick={medicalRecord}
                    >
                        Medical Record
                    </p>
                    <p 
                        style={{ margin: 0, padding: '8px 0', cursor: 'pointer' }}
                        onClick={handleShowRecord}
                    >
                        Show Record
                    </p>
                    <p 
                        style={{ margin: 0, padding: '8px 0', cursor: 'pointer' }} 
                        onClick={logout}
                    >
                        LogOut
                    </p>
                </div>
            )}

            {showRecord && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50" 
                    onClick={() => setShowRecord(null)}
                >
                    <div 
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Record</h2>
                        <p><strong>Name:</strong> {showRecord.name}</p>
                        <p><strong>Sex:</strong> {showRecord.sex}</p>
                        <p><strong>Address:</strong> {showRecord.address}</p>
                        <p><strong>Occupation:</strong> {showRecord.occupation}</p>
                        <p><strong>Blood Group:</strong> {showRecord.bloodgroup}</p>
                        <p><strong>Height:</strong> {showRecord.height}</p>
                        <p><strong>Weight:</strong> {showRecord.weight}</p>
                        <button 
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                            onClick={() => setShowRecord(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

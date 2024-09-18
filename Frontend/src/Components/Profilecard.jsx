export function Profilecard({ doctorDetails, closeProfile }) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    onClick={closeProfile}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Doctor Profile</h2>
                <p className="text-lg">
                    <strong>Username:</strong> {doctorDetails.username}
                </p>
                <p className="text-lg">
                    <strong>Email:</strong> {doctorDetails.email}
                </p>
                <p className="text-lg">
                    <strong>Experience:</strong> {doctorDetails.experience} years
                </p>
            </div>
        </div>
    );
}

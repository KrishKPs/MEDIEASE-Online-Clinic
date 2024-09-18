import { useState } from "react";

export function Medicaldata() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [bg, setBg] = useState("");
  const [add, setAdd] = useState("");
  const [oc, setOc] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="mt-50 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Medical Data</h1>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sex"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setSex(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setAdd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Occupation"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setOc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Blood Group"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setBg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Height"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Weight"
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button
        onClick={async () => {
          const token = localStorage.getItem("token");
          fetch("http://localhost:3088/medicaldata", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              sex: sex,
              address: add,
              occupation: oc,
              height: height,
              weight: weight,
              bloodgroup: bg,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Success");
            });
        }}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
    </div>
  );
}

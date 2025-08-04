import React from "react";
function Card({msg}){
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Welcome to Tailwind + Vite + React
      </h1>
      <p className="text-lg text-gray-700">
        Your Tailwind CSS setup is working perfectly!
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        {msg}
      </button>
    </div>
    )
}
export default Card
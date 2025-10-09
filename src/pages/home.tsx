import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-gradient-to-b from-blue-900 to-black text-white">
      <h1 className="text-4xl font-bold">Welcome to EchoFind</h1>

      <p className="mt-4 text-lg">An AI-Powered Audio & Video Search Engine</p>

      <div className="mt-6">
        <button onClick={() => navigate("/upload")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition">
          Get Started
        </button>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        &copy; 2024 EchoFind. All rights reserved.
      </footer>
    </div>
  )
}

export default Home;
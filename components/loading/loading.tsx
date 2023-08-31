import React, { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen transition-opacity ${
        loading ? "opacity-100" : "opacity-0"
      }
      bg-slate-900
      text-white
      `}
    >
      <div className="text-4xl font-bold mb-8">Loading</div>
      <div className="flex space-x-4">
        <div
          className={`w-4 h-4 rounded-full bg-gray-600 animate-pulse ${
            loading ? "animate-delay-1" : ""
          }`}
        />
        <div
          className={`w-4 h-4 rounded-full bg-gray-600 animate-pulse ${
            loading ? "animate-delay-2" : ""
          }`}
        />
        <div
          className={`w-4 h-4 rounded-full bg-gray-600 animate-pulse ${
            loading ? "animate-delay-3" : ""
          }`}
        />
      </div>
    </div>
  );
}

import React from "react";

interface Item {
  name: string;
  country: string;
  place: number;
}

export default function BoardItem({ name, country, place }: Item) {
  const placing = {
    1: "#FFD700",
    2: "#C0C0C0",
    3: "#CD7F32",
  };
  return (
    <div className="flex justify-between align-center border-2 border-black p-4">
      <p
        className={`text-2xl font-bold bg-[#FFD700] w-12 h-12 flex justify-center items-center`}
      >
        {place}
      </p>
      <p className="text-2xl">{country}</p>
      <h3 className="text-2xl font-bold">{name}</h3>
    </div>
  );
}

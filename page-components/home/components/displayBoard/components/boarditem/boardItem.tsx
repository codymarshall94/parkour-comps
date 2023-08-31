import React from "react";

interface Item {
  name: string;
  country: string;
  place: number;
}

export default function BoardItem({ name, country, place }: Item) {
  const isOdd = place % 2 === 1;

  return (
    <div
      className={`flex justify-between align-center p-4 even:bg-white odd:bg-[#e2e3df]`}
    >
      <div className="flex items-center">
        <div
          className={`text-lg text-white bg-[#BD2A47] w-12 h-12 rounded flex justify-center items-center`}
        >
          {place}
        </div>
      </div>
      <div className="flex items-center">
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <div className="flex items-center">
        <p className="text-lg">{country}</p>
      </div>
    </div>
  );
}

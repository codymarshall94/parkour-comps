import React from "react";

export default function EventInfo({ shownEvent }: any) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Year:</span>
        <h3>{shownEvent.year}</h3>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Location:</span>
        <h3>{shownEvent.location}</h3>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Date:</span>
        <h3>{shownEvent.date}</h3>
      </div>
    </div>
  );
}

import React from "react";

interface EventInfoProps {
  shownEvent: any;
  eventName: string | undefined;
  host: string | undefined;
}

export default function EventInfo({
  shownEvent,
  eventName,
  host,
}: EventInfoProps) {
  return (
    <div className="flex flex-col justify-center bg-white rounded-lg p-8 mb-8 lg:w-1/2">
      <h2 className="text-4xl font-bold text-center text-black">{eventName}</h2>
      <h4 className="text-2xl font-bold text-center text-gray-600 mb-8">
        {host}
      </h4>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-700">{shownEvent.alias}</h3>
        <p className="text-gray-500">{shownEvent.year}</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-700">Year:</span>
          <h3 className="text-gray-500">{shownEvent.year}</h3>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-700">Location:</span>
          <h3 className="text-gray-500">{shownEvent.location}</h3>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-700">Date:</span>
          <h3 className="text-gray-500">{shownEvent.date}</h3>
        </div>
      </div>
    </div>
  );
}

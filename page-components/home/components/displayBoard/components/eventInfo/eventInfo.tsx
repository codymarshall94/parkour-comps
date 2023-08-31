import React from "react";

interface EventInfoProps {
  shownEvents: any;
  eventName: string | undefined;
  host: string | undefined;
}

export default function EventInfo({
  shownEvents,
  eventName,
  host,
}: EventInfoProps) {
  console.log(shownEvents);
  const { year, location, date } = shownEvents;



  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col justify-center bg-white rounded-lg p-4 md:p-8 mb-8 w-full lg:w-1/2">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
        {eventName}
      </h2>
      <h4 className="text-xl md:text-2xl font-bold text-center text-gray-600 mb-4 md:mb-8">
        {host}
      </h4>
      <div className="text-center mb-4 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-700">
          {shownEvents.alias}
        </h3>
      </div>
      <div className="flex md:flex-row justify-between">
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-xl md:text-2xl font-bold text-gray-700">
            Year:
          </span>
          <h3 className="text-gray-500">{year}</h3>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-xl md:text-2xl font-bold text-gray-700">
            Location:
          </span>
          <h3 className="text-gray-500">{location}</h3>
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-gray-700">
            Date:
          </span>
          <h3 className="text-gray-500">{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
}

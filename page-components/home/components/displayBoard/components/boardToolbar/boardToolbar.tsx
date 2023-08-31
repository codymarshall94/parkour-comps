import Select from "@/components/select";
import React from "react";

export default function BoardToolbar({
  gender,
  event,
  setGender,
  setEvent,
  shownEvents,
  selectedEventIndex,
  setSelectedEventIndex,
  eventDates,
}: {
  gender: string;
  event: string;
  setGender: any;
  setEvent: any;
  selectedEventIndex: number;
  setSelectedEventIndex: React.Dispatch<React.SetStateAction<number>>;
  eventDates: string[];
  shownEvents: any[];
}) {
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <Select
        options={["Men, Women"]}
        value={gender}
        onChange={(value) => setGender(value)}
      />
      <Select
        options={["Style", "Speed", "Skill"]}
        value={event}
        onChange={(value) => setEvent(value)}
      />

      {shownEvents.length > 1 && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Event Date
          </label>
          <select
            value={selectedEventIndex}
            onChange={(e) => setSelectedEventIndex(parseInt(e.target.value))}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {eventDates.map((date, index) => (
              <option key={index} value={index}>
                {formatDate(date)}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

import Select from "@/components/select";
import { useOptions } from "@/hooks/useOptions";
import React from "react";

type Event = "style" | "speed" | "skill";
type Gender = "Men" | "Women";

interface BoardToolbarProps {
  shownEvents: any[];
  gender: Gender;
  event: Event;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setEvent: React.Dispatch<React.SetStateAction<string>>;
  selectedEventIndex: number;
  setSelectedEventIndex: React.Dispatch<React.SetStateAction<number>>;
  eventDates: string[];
}

export default function BoardToolbar({
  shownEvents,
  gender,
  event,
  setGender,
  setEvent,
  selectedEventIndex,
  setSelectedEventIndex,
  eventDates,
}: BoardToolbarProps) {
  const { eventOptions, genderOptions } = useOptions(shownEvents);

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
        options={genderOptions}
        value={gender}
        onChange={(value) => setGender(value as Gender)}
      />
      <Select
        options={eventOptions}
        value={event}
        onChange={(value) => setEvent(value as Event)}
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

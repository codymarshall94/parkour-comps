import React, { useState } from "react";
import BoardItem from "./components/boarditem";
import EventInfo from "./components/eventInfo";
import BoardHeader from "./components/boardHeader";
import BoardToolbar from "./components/boardToolbar";

interface Item {
  name: string;
  country: string;
  place: number;
}

type CompetitionDashBoardProps = {
  shownEvents: any[];
  eventName: string | undefined;
  host: string | undefined;
  selectedEventIndex: number;
  setSelectedEventIndex: React.Dispatch<React.SetStateAction<number>>;
};

type Event = "style" | "speed" | "skill";
type Gender = "Men" | "Women";

export default function CompetitionDashBoard({
  shownEvents,
  eventName,
  host,
  selectedEventIndex,
  setSelectedEventIndex,
}: CompetitionDashBoardProps) {
  const [gender, setGender] = useState<Gender>("Men");
  const [event, setEvent] = useState<Event>("style");

  if (!shownEvents || shownEvents.length === 0) {
    return <p>Loading...</p>;
  }

  const eventDates = shownEvents.map((event) => event.date);
  const selectedEvent = shownEvents[selectedEventIndex];
  const eventConfig =
    shownEvents.length === 1
      ? shownEvents[0].events[event]
      : selectedEvent.events[event];

  const renderBoardItems = (items: Item[]) => {
    return items.map((item: Item) => (
      <BoardItem
        key={item.name}
        name={item.name}
        country={item.country}
        place={item.place}
      />
    ));
  };

  return (
    <>
      <EventInfo
        shownEvents={selectedEvent}
        eventName={eventName}
        host={host}
      />
      <div className="bg-[#e2e3df] w-full p-2 lg:p-8 rounded-lg lg:w-1/2">
        <BoardToolbar
          eventDates={eventDates}
          shownEvents={shownEvents}
          selectedEventIndex={selectedEventIndex}
          setSelectedEventIndex={setSelectedEventIndex}
          gender={gender}
          event={event}
          setGender={setGender}
          setEvent={setEvent}
        />

        <div className="flex flex-col justify-between align-center shadow-lg">
          <BoardHeader />
          {eventConfig ? (
            gender === "Men" && renderBoardItems(eventConfig.men || [])
          ) : (
            <p>No Events For this Category</p>
          )}
          {eventConfig ? (
            gender === "Women" && renderBoardItems(eventConfig.women || [])
          ) : (
            <p>No Events For this Category</p>
          )}
        </div>
      </div>
    </>
  );
}

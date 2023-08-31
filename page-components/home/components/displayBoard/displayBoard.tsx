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

type DisplayBoardProps = {
  shownEvent: any;
  eventName: string | undefined;
  host: string | undefined;
};

type Event = "style" | "speed" | "skill";
type Gender = "Men" | "Women";

export default function DisplayBoard({
  shownEvent,
  eventName,
  host,
}: DisplayBoardProps) {
  const [gender, setGender] = useState<Gender>("Men");
  const [event, setEvent] = useState<Event>("style" as any);

  if (!shownEvent) {
    return <p>Loading...</p>;
  }

  const eventConfig = shownEvent.events[event];

  return (
    <>
      <EventInfo shownEvent={shownEvent} eventName={eventName} host={host} />
      <div className="bg-[#e2e3df] w-full p-2 lg:p-8 rounded-lg lg:w-1/2">
        <BoardToolbar setGender={setGender} setEvent={setEvent} />
        {eventConfig ? (
          <div className="flex flex-col justify-between align-center shadow-lg">
            <BoardHeader />
            {gender === "Men" && eventConfig.men?.map((item: Item) => (
              <BoardItem
                key={item.name}
                name={item.name}
                country={item.country}
                place={item.place}
              />
            ))}
            {gender === "Women" && eventConfig.women?.map((item: Item) => (
              <BoardItem
                key={item.name}
                name={item.name}
                country={item.country}
                place={item.place}
              />
            ))}
          </div>
        ) : (
          <p>No Events For this Category</p>
        )}
      </div>
    </>
  );
}

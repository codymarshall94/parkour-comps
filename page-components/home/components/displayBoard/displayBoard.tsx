import React from "react";
import BoardItem from "./components/boarditem";
import EventInfo from "./components/eventInfo";
import BoardHeader from "./components/boardHeader";

interface Item {
  name: string;
  country: string;
  place: number;
}

export default function DisplayBoard(shownEvent: any, event: string) {
  console.log(shownEvent, "shownEvent");
  return (
    <>
      <EventInfo shownEvent={shownEvent.shownEvent} />
      <BoardHeader />
      {shownEvent.shownEvent.events.style.men.map((item: Item) => (
        <BoardItem
          key={item.name}
          name={item.name}
          country={item.country}
          place={item.place}
        />
      ))}
      {shownEvent.shownEvent.events.style.women && (
        <>
          {shownEvent.shownEvent.events.style.women.map((item: Item) => (
            <BoardItem
              key={item.name}
              name={item.name}
              country={item.country}
              place={item.place}
            />
          ))}
        </>
      )}
    </>
  );
}

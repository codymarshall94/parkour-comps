"use client";

import { useState } from "react";
import { AOM_COMPETITIONS } from "@/data/aom";
import YearInput from "./components/yearInput/yearInput";
import DisplayBoard from "./components/displayBoard/displayBoard";

type Event = "Style" | "Speed" | "Skill";

export default function Home() {
  const [year, setYear] = useState<number>(2021);
  const [competition, setCompetition] = useState<string>("AOM");
  const [event, setEvent] = useState<Event>("Style");
  let shownEvent = AOM_COMPETITIONS.years.find(
    (eventYear) => eventYear.year === year
  );

  return (
    <main className="flex flex-col justify-between p-24">
      <h1 className="text-4xl font-bold">Parkour Competitions</h1>
      <h2 className="text-2xl font-bold">{AOM_COMPETITIONS.name}</h2>
      <YearInput year={year} setYear={setYear} />
      {shownEvent && <DisplayBoard shownEvent={shownEvent} event={event} />}
    </main>
  );
}

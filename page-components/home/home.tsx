"use client";

import { useEffect, useState } from "react";
import CompetitionSelect from "./components/competitionSelect/competitionSelect";
import DisplayBoard from "./components/displayBoard/displayBoard";
import Image from "next/image";
import { useCompetitionInfo } from "@/hooks/useCompetitionInfo";
import HomeSvg from "@/public/images/home.svg";

interface YearEvent {
  year: number;
  date: string;
  location: string;
  events: {
    style: {
      men: {
        name: string;
        country: string;
        place: number;
      }[];
      women?: {
        name: string;
        country: string;
        place: number;
      }[];
    };
  };
}

export default function Home() {
  const [year, setYear] = useState<number>(2022);
  const [competition, setCompetition] = useState<string>("AOM");
  const [shownEvent, setShownEvent] = useState<YearEvent | undefined>();
  const { loading, competitionInfo } = useCompetitionInfo(competition);

  useEffect(() => {
    if (!competitionInfo) return;

    const firstYear = competitionInfo.years[0]?.year;

    const selectedEvent = competitionInfo.years.find(
      (event: YearEvent) => event.year === year
    );

    if (selectedEvent) {
      setShownEvent(selectedEvent);
    } else {
      setYear(firstYear);
    }
  }, [year, competitionInfo, shownEvent]);

  if (loading && !competitionInfo) {
    return <p>Loading</p>;
  }

  return (
    <main className="flex flex-col justify-center bg-black min-h-screen relative">
      <Image
        className="relative lg:absolute top-0 left-0 z-[1] grayscale opacity-50"
        src={competitionInfo?.background || "/images/background.jpg"}
        alt="background"
        style={{ objectFit: "cover" }}
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVQ4T2NkoBAwUqifw"
      />
      <div className="p-2 lg:p-24 z-[2]">
        <div className="text-lg lg:text-4xl font-bold text-white text-center absolute top-20 lg:top-0 left-0 w-full">
          <Image src={HomeSvg} alt="home" width={700} height={700} />
        </div>

        <CompetitionSelect
          year={year}
          setYear={setYear}
          competition={competition}
          setCompetition={setCompetition}
        />
        {shownEvent && (
          <DisplayBoard
            shownEvent={shownEvent}
            eventName={competitionInfo?.name}
            host={competitionInfo?.host}
          />
        )}
      </div>
    </main>
  );
}

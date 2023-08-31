"use client";

import { useEffect, useState } from "react";

// Components
import CompetitionSelect from "./components/competitionSelect/competitionSelect";
import CompetitionDashBoard from "./components/displayBoard/competitionDashboard";
import Image from "next/image";

// Hooks
import { useCompetitionInfo } from "@/hooks/useCompetitionInfo";
import { useEventSelection } from "@/hooks/useEventSelection";

// Assets
import HomeSvg from "@/public/images/home.svg";
import Loading from "@/components/loading";

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

type Event = "style" | "speed" | "skill";
type Gender = "Men" | "Women";

export default function Home() {
  const [year, setYear] = useState<number>(2022);
  const [competition, setCompetition] = useState<string>("AOM");
  const [shownEvents, setShownEvents] = useState<YearEvent[] | undefined>();
  const [gender, setGender] = useState<Gender>("Men");
  const [event, setEvent] = useState<Event>("style");
  const { selectedEventIndex, setSelectedEventIndex } = useEventSelection();
  const { loading, competitionInfo } = useCompetitionInfo(competition);
  const { name: eventName, host } = competitionInfo || {};

  const handleYearChange = (newYear: number) => {
    if (!competitionInfo) return;

    const firstYear = competitionInfo.years[0]?.year;

    const selectedEvents = competitionInfo.years.filter(
      (event: YearEvent) => event.year === newYear
    );

    if (selectedEvents.length > 0) {
      setShownEvents(selectedEvents);
      setSelectedEventIndex(0);
    } else {
      setYear(firstYear);
    }
  };

  useEffect(() => {
    if (competitionInfo) {
      const latestYear =
        competitionInfo.years[competitionInfo.years.length - 1]?.year;
      if (latestYear) {
        setYear(latestYear);
      }
    }
    setGender("Men");
    setEvent("style");
  }, [competitionInfo]);

  useEffect(() => {
    handleYearChange(year);
  }, [year, competitionInfo]);

  if (loading && !competitionInfo) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col justify-center bg-black min-h-screen relative">
      <Image
        className="relative lg:absolute top-0 left-0 z-[1] grayscale opacity-50 lg:h-[50%] w-full lg:object-cover"
        src={competitionInfo?.background || "/images/background.jpg"}
        alt="background"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArElEQVQ4T2NkoBAwUqifw"
        loading="lazy"
        layout="responsive"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      <div className="p-2 lg:p-24 z-[2]">
        <div className="text-lg lg:text-4xl font-bold text-white text-center absolute top-20 lg:top-0 left-0 w-full">
          <Image src={HomeSvg} alt="home" width={700} height={700} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <CompetitionSelect
            year={year}
            setYear={setYear}
            competition={competition}
            setCompetition={setCompetition}
          />
          {shownEvents && (
            <CompetitionDashBoard
              gender={gender}
              setGender={
                setGender as React.Dispatch<React.SetStateAction<string>>
              }
              event={event}
              setEvent={
                setEvent as React.Dispatch<React.SetStateAction<string>>
              }
              shownEvents={shownEvents}
              eventName={eventName}
              host={host}
              selectedEventIndex={selectedEventIndex}
              setSelectedEventIndex={setSelectedEventIndex}
            />
          )}
        </div>
      </div>
    </main>
  );
}

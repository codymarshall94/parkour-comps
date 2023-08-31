import { useEffect, useState } from "react";

interface YearEvent {
  events: {
    [key: string]: {
      men?: any[];
      women?: any[];
    };
  };
}

export function useOptions(competitionInfo?: YearEvent[]) {
  const [eventOptions, setEventOptions] = useState<string[]>([]);
  const [genderOptions, setGenderOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!competitionInfo) {
      return;
    }

    const allEventOptions: string[] = [];
    const allGenderOptions: string[] = [];

    competitionInfo.forEach(year => {
      if (year.events) {
        const yearEventKeys = Object.keys(year.events);
        allEventOptions.push(...yearEventKeys);

        yearEventKeys.forEach(eventKey => {
          const eventInfo = year.events[eventKey];
          if (eventInfo.men) {
            allGenderOptions.push("Men");
          }
          if (eventInfo.women) {
            allGenderOptions.push("Women");
          }
        });
      }
    });

    setEventOptions(Array.from(new Set(allEventOptions)));
    setGenderOptions(Array.from(new Set(allGenderOptions)));
  }, [competitionInfo]);

  return { eventOptions, genderOptions };
}

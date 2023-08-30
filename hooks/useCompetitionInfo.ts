import { AOM_COMPETITIONS } from "@/data/aom";
import { PARKOUR_WORLD_CUP } from "@/data/fig";
import { KOTC_COMPETITIONS } from "@/data/kotc";
import { SPL_COMPETITIONS } from "@/data/spl";
import { useEffect, useState } from "react";

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

type InitialCompetitionInfo = {
  name: string;
  background: string;
  host: string;
  years: Array<YearEvent>;
};

export const useCompetitionInfo = (competitionName = "AOM") => {
  const [competitionInfo, setCompetitionInfo] =
    useState<InitialCompetitionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    switch (competitionName) {
      case "AOM":
        setCompetitionInfo(AOM_COMPETITIONS);
        break;
      case "PWC":
        setCompetitionInfo(PARKOUR_WORLD_CUP);
        break;
      case "SPL":
        setCompetitionInfo(SPL_COMPETITIONS);
        break;
      case "KOTC":
        setCompetitionInfo(KOTC_COMPETITIONS);
        break;
      default:
        setCompetitionInfo(null);
        break;
    }
    setLoading(false);
  }, [competitionName]);

  return {
    competitionInfo,
    loading,
  };
};

import { AOM_COMPETITIONS } from "@/data/aom";
import { PARKOUR_WORLD_CUP } from "@/data/fig";
import { SPL_COMPETITIONS } from "@/data/spl";
import { KOTC_COMPETITIONS } from "@/data/kotc";

const competitions = ["AOM", "PWC", "SPL", "KOTC"];

export default function CompetitionSelect({
  competition,
  setCompetition,
  year,
  setYear,
}: {
  year: number;
  setYear: any;
  setCompetition: any;
  competition: string;
}) {
  let yearsDropdown: any = [];

  switch (competition) {
    case "AOM":
      yearsDropdown = AOM_COMPETITIONS;
      break;
    case "PWC":
      yearsDropdown = PARKOUR_WORLD_CUP;
      break;
    case "SPL":
      yearsDropdown = SPL_COMPETITIONS;
      break;
    case "KOTC":
      yearsDropdown = KOTC_COMPETITIONS;
      break;
    default:
      yearsDropdown = AOM_COMPETITIONS;
      break;
  }

  const uniqueYears = Array.from(
    new Set(yearsDropdown.years.map((yearObj: any) => yearObj.year))
  );

  yearsDropdown = uniqueYears;

  return (
    <div className="flex flex-col justify-center items-center bg-[#BD2A47] rounded my-4 p-4 w-full lg:w-1/2">
      <h2 className="text-lg font-bold text-center text-white mb-8">
        Choose a Competition
      </h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label className="text-lg font-bold text-white" htmlFor="competition">
            Select Competition
          </label>
          <select
            value={competition}
            id="competition"
            className="text-lg font-bold bg-white rounded p-4 mb-4"
            onChange={(e) => setCompetition(e.target.value)}
          >
            {competitions.map((comp, index) => (
              <option key={index} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col ml-4">
          <label className="text-lg font-bold text-white" htmlFor="year">
            Select Year
          </label>
          <select
            value={year}
            id="year"
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="text-lg font-bold bg-white rounded p-4 mb-4"
          >
            {yearsDropdown.map((eventYear: string, index: number) => (
              <option key={index} value={eventYear}>
                {eventYear}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

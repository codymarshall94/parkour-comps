import { AOM_COMPETITIONS } from "@/data/aom";
import { Fragment } from "react";

export default function YearInput({
  year,
  setYear,
}: {
  year: number;
  setYear: any;
}) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black p-4">
      <h3 className="text-2xl font-bold">Choose a year:</h3>
      <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
        {AOM_COMPETITIONS.years.map((eventYear, index) => (
          <Fragment key={index}>
            <option value={eventYear.year}>{eventYear.year}</option>
          </Fragment>
        ))}
      </select>
    </div>
  );
}

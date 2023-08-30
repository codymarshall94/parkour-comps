import React from "react";

export default function BoardToolbar({
  setGender,
  setEvent,
}: {
  setGender: any;
  setEvent: any;
}) {
  return (
    <>
      <select
        className="text-lg font-bold bg-white rounded p-4 mb-4"
        onChange={(e) => setGender(e.target.value as any)}
      >
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>
      <select
        className="text-lg font-bold bg-white rounded p-4 mb-4 mx-4"
        onChange={(e) => setEvent(e.target.value as any)}
      >
        <option value="style">Style</option>
        <option value="speed">Speed</option>
        <option value="skill">Skill</option>
      </select>
    </>
  );
}

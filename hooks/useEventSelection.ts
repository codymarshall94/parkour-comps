import { useEffect, useState } from "react";

export function useEventSelection(defaultSelectedIndex = 0) {
  const [selectedEventIndex, setSelectedEventIndex] =
    useState(defaultSelectedIndex);

  useEffect(() => {
    setSelectedEventIndex(0);
  }, [defaultSelectedIndex]);

  return {
    selectedEventIndex,
    setSelectedEventIndex,
  };
}

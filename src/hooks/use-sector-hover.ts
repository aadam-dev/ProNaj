"use client";

import { useState, useCallback } from "react";
import { Sector } from "@/types";

export function useSectorHover() {
  const [activeSector, setActiveSector] = useState<Sector | null>(null);

  const handleSectorEnter = useCallback((sector: Sector) => {
    setActiveSector(sector);
  }, []);

  const handleSectorLeave = useCallback(() => {
    setActiveSector(null);
  }, []);

  const isSectorActive = useCallback(
    (sector: Sector) => activeSector === sector,
    [activeSector]
  );

  const isSectorCompressed = useCallback(
    (sector: Sector) => activeSector !== null && activeSector !== sector,
    [activeSector]
  );

  return {
    activeSector,
    handleSectorEnter,
    handleSectorLeave,
    isSectorActive,
    isSectorCompressed,
  };
}

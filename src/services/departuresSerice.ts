import { API_BASE_URL, STOPS } from "../constants";
import type { DeparturesResponse, StopData } from "../types";

export const fetchDepartures = async (stopId: number) => {
  const res = await fetch(`${API_BASE_URL}/departures?stopId=${stopId}`);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Failed to fetch departures for stopId ${stopId}: ${errorText}`,
    );
  }

  return (await res.json()) as DeparturesResponse;
};

export const fetchStopsData = async () => {
  const promises = STOPS.map(async (stop) => {
    const departuresResponse = await fetchDepartures(stop.stopId);
    return {
      ...stop,
      departures: departuresResponse.departures,
      lastUpdate: departuresResponse.lastUpdate,
    } as StopData;
  });

  const res = await Promise.all(promises);

  return res;
};

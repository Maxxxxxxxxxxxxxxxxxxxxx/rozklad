import { API_BASE_URL } from "../constants";
import type { DeparturesResponse, StopData, StopInfo } from "../types";
import mockDepartures from "@/mock/mockDepartures.json";

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

export const fetchStopsData = async (stops: StopInfo[]) => {
  if (stops.length === 0) {
    console.warn(
      "No stops provided to fetchStopsData. Set stops in admin panel",
    );
    return [];
  }
  const promises = stops.map(async (stop) => {
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

export const fetchMockData = async () => mockDepartures as StopData[];

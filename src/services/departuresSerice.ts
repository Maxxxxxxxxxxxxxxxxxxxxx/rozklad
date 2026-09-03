import { API_BASE_URL } from "../constants";
import type { DeparturesResponse, StopData, StopMetadata } from "../types";
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

export const fetchAllDeparturesByStopInfo = async (
  stopsMetadatas: StopMetadata[],
) => {
  if (stopsMetadatas.length === 0) {
    console.warn(
      "No stops provided to fetchAllDeparturesByStopInfo. Set stops in admin panel",
    );
    return [];
  }
  const promises = stopsMetadatas.map(async (stop) => {
    const departuresResponse = await fetchDepartures(stop.stopId);
    console.log(
      `fetchAllDeparturesByStopInfo --> ${stop.stopId}:`,
      departuresResponse,
    );
    return {
      ...stop,
      departures: departuresResponse.departures,
      lastUpdate: departuresResponse.lastUpdate,
    } as StopData;
  });

  const res = await Promise.all(promises);
  console.log("Fetched departures for stops:", res);
  return res as StopData[];
};

export const fetchMockData = async () => mockDepartures as StopData[];

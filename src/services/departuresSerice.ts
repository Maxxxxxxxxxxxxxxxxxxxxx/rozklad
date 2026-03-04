import { API_BASE_URL } from "../constants";
import type { DeparturesResponse } from "../types";

export const fetchDepartures = async (stopId: number) => {
    const res = await fetch(`${API_BASE_URL}/departures?stopId=${stopId}`);
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch departures for stopId ${stopId}: ${errorText}`);
    }

    return await res.json() as DeparturesResponse;
 }
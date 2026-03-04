export interface DepartureData {
  id: string;
  delayInSeconds: number;
  estimatedTime: string;
  headsign: string;
  routeId: number;
  routeShortName: string;
  scheduledTripStartTime: string;
  tripId: number;
  status: string;
  theoreticalTime: string;
  timestamp: string;
  trip: number;
  vehicleCode: number;
  vehicleId: number;
  vehicleService: string;
}

    // {
    //   "id": "T311R12",
    //   "delayInSeconds": 18,
    //   "estimatedTime": "2026-03-04T13:19:18Z",
    //   "headsign": "Zaspa",
    //   "routeId": 12,
    //   "routeShortName": "12",
    //   "scheduledTripStartTime": "2026-03-04T12:27:00Z",
    //   "tripId": 311,
    //   "status": "REALTIME",
    //   "theoreticalTime": "2026-03-04T13:19:00Z",
    //   "timestamp": "2026-03-04T13:15:31Z",
    //   "trip": 20437205,
    //   "vehicleCode": 1039,
    //   "vehicleId": 446,
    //   "vehicleService": "012-05"
    // }

export interface DeparturesResponse {
  lastUpdate: string;
  departures: DepartureData[];
}

export interface StopInfo {
  id: number;
  name: string;
}

export interface StopData extends StopInfo {
  departures: DepartureData[];
  lastUpdate: string | null;
  error?: string;
}

export interface MockDepartures {
  lastUpdate: string;
  departures: DepartureData[];
}

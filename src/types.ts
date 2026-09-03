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

export interface DeparturesResponse {
  lastUpdate: string;
  departures: DepartureData[];
}

export interface StopMetadata {
  stopId: number;
  stopCode: string;
  name: string;
}

export interface StopData extends StopMetadata {
  departures: DepartureData[];
  lastUpdate: string | null;
  error?: string;
}

export interface MockDepartures {
  lastUpdate: string;
  departures: DepartureData[];
}

export interface AppContext {
  isAdminPanelOpen: boolean;
  stopData: StopData[];
  stopsInUse: StopMetadata[];
  toggleAdminPanel: () => void;
  updateStopData: (newStopData: StopData[]) => void;
  setStopsInUse: (stops: StopMetadata[]) => void;
  setCurrentStopsInUse: (stops: StopMetadata[]) => Promise<void>;
  parametersLastSaveTime: string | null;
}

import { createContext } from "react";
import type { StopData } from "../types";

export const DeparturesContext = createContext([] as StopData[]);

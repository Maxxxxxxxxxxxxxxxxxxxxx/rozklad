import { createContext } from "react";
import type { AppContextProps } from "@/types";

const AppContext = createContext({} as AppContextProps);

export default AppContext;

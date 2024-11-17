"use client";

import { createContext, ReactNode, useContext } from "react";
import { TeamItem } from "src/entities/teams/teams";

interface TeamsContextProps {
  data: TeamItem[];
}

interface TeamsClientProviderProps extends TeamsContextProps {
  children: ReactNode;
}

const TeamsContext = createContext<TeamsContextProps>({
  data: [],
});

function TeamsClientProvider({ data, children }: TeamsClientProviderProps) {
  return (
    <TeamsContext.Provider value={{ data }}>{children}</TeamsContext.Provider>
  );
}

const useTeams = () => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error("useTeams must be used within a TeamsClientProvider");
  }

  return context;
};

export { TeamsClientProvider, useTeams };

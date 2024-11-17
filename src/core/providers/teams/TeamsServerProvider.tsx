import { ReactNode } from "react";
import { teamsService } from "src/entities/teams/teams.service";
import { TeamsClientProvider } from "./TeamsClientProvider";

async function TeamsServerProvider({ children }: { children: ReactNode }) {
  const teams = await teamsService.getTeams();

  return <TeamsClientProvider data={teams}>{children}</TeamsClientProvider>;
}

export default TeamsServerProvider;

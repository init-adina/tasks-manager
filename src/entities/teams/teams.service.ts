import axios from "axios";
import { TeamItem } from "./teams";

class TeamsService {
  async getTeams(): Promise<TeamItem[]> {
    try {
      const res = await axios.get<TeamItem[]>(
        "http://localhost:8000/api/v1/team"
      );

      return res.data;
    } catch (e) {
      console.log(e);
      throw new Error("Unresolved to get teams");
    }
  }
}

export const teamsService = new TeamsService();

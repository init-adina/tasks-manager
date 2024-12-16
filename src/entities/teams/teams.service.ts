import { TeamItem } from "./teams";
import { api } from "@shared/api";

class TeamsService {
  async getTeams() {
    try {
      const res = await api.get<TeamItem[]>("/team");

      return res.data;
    } catch (e) {
      // console.log(e);
    }
  }
}

export const teamsService = new TeamsService();

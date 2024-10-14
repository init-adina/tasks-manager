export interface ITeamItem {
  personInfo: {
    imageUrl: string;
    name: string;
  }[];
  taskTitle: string;
  status: string;
  priority: string;
  lastUpdate: string;
}

export interface IProjectItem {
  title: string;
  project: string;
  progress: number;
  createdDay: string;
  leftTime: string;
  team: { personImage: string; anotherPersonImage: string }[];
}

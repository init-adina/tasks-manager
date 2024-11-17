export interface TasksItem {
  id: number;
  createdDay: string;
  name: string;
  appType: string;
  progress: number;
  people: PeopleItem[];
  leftDay: number;
}

export interface PeopleItem {
  id: number;
  name: string;
  image: string;
}

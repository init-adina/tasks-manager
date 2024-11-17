import { Pivot, Timestamps } from "@shared/api/types";

export interface ProjectItem extends Timestamps {
  id: number;
  name: string;
  description: null;
  manager_id: number;
  type: null;
  start_date: string;
  deadline: string;
  progress: number;
  status: string;
  tasks: TaskItem[];
  users: UsersItem[];
  manager: ManagerItem;
}

interface TaskItem extends Timestamps {
  id: number;
  title: string;
  description: null;
  project_id: number;
  assidned_to: number;
  progress: number;
  status: string;
  due_date: string;
}

interface UsersItem extends Timestamps, Pivot {
  id: number;
  name: string;
  email: string;
  phone: null;
  birth_data_at: null;
  email_verified_at: null;
  avatar: string | null;
  gender: string;
  position_id: number;
  address: null;
}

interface ManagerItem extends Timestamps {
  id: number;
  name: string;
  email: string;
  phone: null;
  birth_data_at: null;
  email_verified_at: null;
  avatar: string | null;
  gender: string;
  position_id: number;
  address: null;
}

export interface ProjectsResponse {
  data: ProjectItem[];
  links: Links;
  meta: Meta;
}

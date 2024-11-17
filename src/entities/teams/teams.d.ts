import { Pivot, Timestamps } from "@shared/api/types";

export interface TeamItem extends Timestamps {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  birth_date_at: null;
  email_verified_at: string;
  avatar: string | null;
  gender: string;
  position_id: number;
  address: string | null;
  position: PositionItem;
  projects: ProjectItem[];
}

export interface PositionItem extends Timestamps {
  id: number;
  name: string;
  description: string;
  slug: string;
}

export interface ProjectItem extends Timestamps, Pivot {
  id: string;
  name: string;
  description: string | null;
  manager_id: number;
  type: null;
  start_date: string;
  deadline: string;
  progress: number;
  status: string;
}

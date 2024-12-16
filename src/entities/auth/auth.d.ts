import { Timestamps } from "@shared/api/types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface Position extends Timestamps {
  id: number;
  name: string;
  description: string | null;
  slug: string;
}

export interface Project extends Timestamps, Pivot {
  id: number;
  name: string;
  description: string | null;
  manager_id: number;
  type: string | null;
  start_date: string;
  deadline: string;
  progress: number;
  status: string;
}

export interface User extends Timestamps {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  birth_date_at: string | null;
  email_verified_at: string;
  avatar: string | null;
  gender: string;
  is_admin: number;
  position_id: number;
  address: string | null;
  projects_count: number;
  position: Position;
  projects: Project[];
}

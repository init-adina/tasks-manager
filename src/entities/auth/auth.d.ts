export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface Position {
  id: number;
  name: string;
  description: string | null;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  birth_date_at: string | null;
  email_verified_at: string;
  avatar: string | null;
  gender: string;
  position_id: number;
  address: string | null;
  created_at: string;
  updated_at: string;
  projects_count: number;
  position: Position;
  projects: any[];
}

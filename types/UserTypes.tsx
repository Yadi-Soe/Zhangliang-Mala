
export type User = {
  id: number;
  name: string;
  email: string;
  photo: string | null;
  email_verified_at: string | null;
  dateOfBirth?: string; // ISO string or yyyy-mm-dd
  phone?: string;
  gender?: string;
  created_at: string;
  updated_at: string;
  address: string;
};



export type ApplicationStatus = 
  | 'Pending' 
  | 'Reviewing' 
  | 'Shortlisted' 
  | 'Interview Scheduled' 
  | 'Approved' 
  | 'Rejected' 
  | 'Joined' 
  | 'Withdrawn';

export interface Applicant {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  college: string;
  degree: string;
  branch: string;
  graduationYear: number;
  skills: string[];
  experience: string;
  projects: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  resumeUrl: string;
  status: ApplicationStatus;
  adminNotes?: string;
  appliedPosition: string;
  appliedDate: string;
  lastUpdated: string;
}

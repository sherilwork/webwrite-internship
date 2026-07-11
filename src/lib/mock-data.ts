
export type ApplicationStatus = 
  | 'Pending' 
  | 'Reviewing' 
  | 'Shortlisted' 
  | 'Interview Scheduled' 
  | 'Approved' 
  | 'Rejected' 
  | 'Offer Sent' 
  | 'Joined' 
  | 'Withdrawn';

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  role: string;
  appliedDate: string;
  status: ApplicationStatus;
  avatar?: string;
}

export const MOCK_APPLICANTS: Applicant[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    college: "IIT Bombay",
    role: "Frontend Developer Intern",
    appliedDate: "2024-03-15",
    status: "Pending",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.p@example.com",
    phone: "+91 98765 43211",
    college: "BITS Pilani",
    role: "UI/UX Design Intern",
    appliedDate: "2024-03-14",
    status: "Shortlisted",
  },
  {
    id: "3",
    name: "Rahul Verma",
    email: "rahul.v@example.com",
    phone: "+91 98765 43212",
    college: "DTU Delhi",
    role: "Backend Developer Intern",
    appliedDate: "2024-03-14",
    status: "Interview Scheduled",
  },
  {
    id: "4",
    name: "Ananya Iyer",
    email: "ananya.i@example.com",
    phone: "+91 98765 43213",
    college: "NIT Trichy",
    role: "Data Science Intern",
    appliedDate: "2024-03-13",
    status: "Approved",
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.s@example.com",
    phone: "+91 98765 43214",
    college: "VIT Vellore",
    role: "Full Stack Developer Intern",
    appliedDate: "2024-03-12",
    status: "Rejected",
  },
  {
    id: "6",
    name: "Sanya Gupta",
    email: "sanya.g@example.com",
    phone: "+91 98765 43215",
    college: "SRM University",
    role: "Marketing Intern",
    appliedDate: "2024-03-11",
    status: "Pending",
  }
];

export const STATS = {
  total: 245,
  pending: 31,
  approved: 112,
  rejected: 102,
  today: 8
};

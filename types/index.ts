export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
export interface Toast {
  show: boolean;
  message: string;
  type: "success" | "warning" | "info" | "";
}

export interface RSVPFormData {
  name: string;
  phone: string;
  attending: boolean | null;
  guests: number;
  wishes: string;
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CoupleInfo {
  name: string;
  family: string;
  image: string;
}

export interface WeddingProgram {
  time: string;
  event: string;
  icon: string;
}

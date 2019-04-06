export interface Instructor {
    id: string;
    name: string;
    surname?: string;
    companyName?: string;
    rating?: number;
    reviews?: number;
    deliviries?: number;
    startRate?: number;
    dailyRate?: number;
    country?: string;
    languages?: string[];
    skills?: string[];
    img_url?: string;
}

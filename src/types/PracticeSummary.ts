export type PracticeSummary = {
    id: string;
    name: string;
    city: string;
    country: string;
    image?: string;
    newPatientsThisMonth: number;
    appointmentRequests: number;
    conversionRate: number;
    monthlyTrend: number[];
}
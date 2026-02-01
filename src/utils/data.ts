import type PracticeSummary from '../types';
const DEFAULT_PRACTICE_IMAGE =
	'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400';

export const nigerianPractices: PracticeSummary[] = [
	{
		id: 'NG-001',
		name: 'Ikeja Dental Center',
		city: 'Lagos',
		country: 'Nigeria',
		newPatientsThisMonth: 145,
		appointmentRequests: 320,
		conversionRate: 52.3,
		monthlyTrend: [120, 135, 128, 142, 145],
		image: DEFAULT_PRACTICE_IMAGE,
	},
	{
		id: 'NG-002',
		name: 'Hillspring Dental Care',
		city: 'Abuja',
		country: 'Nigeria',
		newPatientsThisMonth: 89,
		appointmentRequests: 150,
		conversionRate: 69.3,
		monthlyTrend: [80, 82, 95, 88, 89],
		image: DEFAULT_PRACTICE_IMAGE,
	},
	{
		id: 'NG-003',
		name: 'CM Dental Clinic',
		city: 'Port Harcourt',
		country: 'Nigeria',
		newPatientsThisMonth: 62,
		appointmentRequests: 98,
		conversionRate: 83.2,
		monthlyTrend: [45, 50, 55, 60, 62],
		image: DEFAULT_PRACTICE_IMAGE,
	},
	{
		id: 'NG-004',
		name: 'Kanu Okoro',
		city: 'Enugu',
		country: 'Nigeria',
		newPatientsThisMonth: 12,
		appointmentRequests: 140,
		conversionRate: 8.5,
		monthlyTrend: [25, 20, 18, 15, 12],
		image: DEFAULT_PRACTICE_IMAGE,
	},
];

import type PracticeSummary from '../types';
import type { MetricProps } from '../types';

const Metric = ({ label, value, subValue }: MetricProps) => (
	<div className='flex flex-col'>
		<span className='text-xs font-medium text-slate-500 uppercase tracking-wider'>
			{label}
		</span>
		<div className='flex items-baseline gap-1 mt-0.5'>
			<span className='text-xl font-bold text-slate-900'>{value}</span>
			{subValue && <span className='text-xs text-slate-400'>{subValue}</span>}
		</div>
	</div>
);

const TrendLine = ({ data }: { data: number[] }) => {
	const max = Math.max(...data, 1);
	return (
		<div className='flex items-end gap-1 h-8 w-full'>
			{data.map((val, i) => (
				<div
					key={i}
					className='bg-indigo-100 rounded-t-sm w-full transition-all duration-300 hover:bg-indigo-300'
					style={{ height: `${(val / max) * 100}%` }}
				/>
			))}
		</div>
	);
};

const StatusBadge = ({ conversionRate }: { conversionRate: number }) => {
	let config = { label: 'Stable', classes: 'bg-slate-100 text-slate-700' };

	if (conversionRate >= 70) {
		config = {
			label: 'High Performer',
			classes: 'text-gray-50 bg-emerald-700 ',
		};
	} else if (conversionRate < 50) {
		config = {
			label: 'At Risk',
			classes: 'text-gray-200 bg-rose-700 border-rose-100',
		};
	} else if (conversionRate < 70) {
		config = {
			label: 'Stable',
			classes: 'bg-slate-50 text-slate-700',
        };
    
	}

	return (
		<span
			className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${config.classes}`}
		>
			{config.label}
		</span>
	);
};

export const PracticeSummaryCard = ({
	dentist,
}: {
	dentist: PracticeSummary;
}) => {
	return (
		<div className='group bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-indigo-200'>
			<div className='flex justify-between items-start mb-6'>
				<div>
					<h3 className='text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors'>
						{dentist.name}
					</h3>
					<p className='text-sm text-slate-500 font-medium'>
						{dentist.city}, {dentist.country}
					</p>
				</div>
				<StatusBadge conversionRate={dentist.conversionRate} />
			</div>

			<div className='grid grid-cols-2 gap-x-4 gap-y-6 mb-8'>
				<Metric
					label='New Patients'
					value={dentist.newPatientsThisMonth}
					subValue='this mo'
				/>
				<Metric
					label='Appt. Requests'
					value={dentist.appointmentRequests}
				/>
				<Metric
					label='Conv. Rate'
					value={`${dentist.conversionRate}%`}
				/>
				<div className='flex flex-col'>
					<span className='text-xs font-medium text-slate-500 uppercase tracking-wider mb-2'>
						Trend (6mo)
					</span>
					<TrendLine data={dentist.monthlyTrend} />
				</div>
			</div>

			<div className='border-t border-slate-100 pt-5'>
				<h4 className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-3'>
					Recommendations
				</h4>
				<ul className='space-y-2'>
					<li className='flex items-start gap-2 text-sm text-slate-600'>
						<span className='text-indigo-500 mt-1'>•</span>
						{dentist.conversionRate > 50
							? 'Excellent efficiency. Consider increasing ad spend.'
							: 'Review follow-up process to improve conversion.'}
					</li>
					<li className='flex items-start gap-2 text-sm text-slate-600'>
						<span className='text-indigo-500 mt-1'>•</span>
						Optimize patient onboarding for {dentist.city} area.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PracticeSummaryCard;

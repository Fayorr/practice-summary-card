import { PracticeSummaryCard } from './components/PracticeSummaryCard';
import { nigerianPractices } from './utils/data';

function App() {
	return (
		<div className='min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-12 text-center'>
					<h1 className='text-3xl font-extrabold text-slate-900 sm:text-4xl'>
						Practice Performance
					</h1>
					<p className='mt-4 text-xl text-slate-500'>
						Overview of Dental Practices in Nigeria
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{nigerianPractices.map((dentist) => (
						<PracticeSummaryCard
							key={dentist.id}
							dentist={dentist}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

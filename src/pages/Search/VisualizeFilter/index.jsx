import { BiCloudDownload } from 'react-icons/bi';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function VisualizeFilter() {
	return (
		<div className='container m-auto'>
			<div className='flex justify-center py-5'>
				<div
					className={`animate-fadeOut w-[200px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-white text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
				>
					<BiCloudDownload className={'text-3xl'} />
					<span className='text-sm'>{'Download CSV'}</span>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{/* First Column */}
				<div className='m-auto'>
					<div>
						<div
							className={`animate-fadeOut w-[250px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-[#3C455D] text-white shadow-md px-5 py-4 rounded-full hover:cursor-pointer`}
						>
							<span className='text-sm'>{'Select a column'}</span>
						</div>
					</div>
					<ul className='ms-14 mt-5'>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='emotion'
									type='radio'
									value='emotion'
									name='column'
								/>
								<label
									htmlFor='emotion'
									className='w-full py-5'
								>
									Emotion
								</label>
							</div>
						</li>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='sentiment'
									type='radio'
									value='sentiment'
									name='column'
								/>
								<label
									htmlFor='sentiment'
									className='w-full py-5'
								>
									Sentiment
								</label>
							</div>
						</li>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='topics'
									type='radio'
									value='topics'
									name='column'
								/>
								<label
									htmlFor='topics'
									className='w-full py-5 '
								>
									Topics
								</label>
							</div>
						</li>
					</ul>
				</div>
				{/* Second Column */}
				<div className='m-auto'>
					<div>
						<div
							className={`animate-fadeOut w-[250px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-[#3C455D] text-white shadow-md px-5 py-4 rounded-full hover:cursor-pointer`}
						>
							<span className='text-sm'>{'Select a period'}</span>
						</div>
					</div>
					<ul className='ms-14 mt-5'>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='daily'
									type='radio'
									value='daily'
									name='period'
								/>
								<label htmlFor='daily' className='w-full py-5'>
									Daily
								</label>
							</div>
						</li>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='weekly'
									type='radio'
									value='weekly'
									name='period'
								/>
								<label htmlFor='weekly' className='w-full py-5'>
									Weekly
								</label>
							</div>
						</li>
						<li className='w-full'>
							<div className='flex items-center gap-5'>
								<input
									id='monthly'
									type='radio'
									value='monthly'
									name='period'
								/>
								<label
									htmlFor='monthly'
									className='w-full py-5 '
								>
									Monthly
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

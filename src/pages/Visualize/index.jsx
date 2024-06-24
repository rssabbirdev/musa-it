import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import { findIFrameUrl } from '../../utils/findIFrameUrl';

export default function Visualize() {
	const [params] = useSearchParams();
	const [iFrameUrl, setIFrameUrl] = useState('');

	useEffect(() => {
		fetch('iframeData.json')
			.then((res) => res.json())
			.then((data) => {
				const url = findIFrameUrl(data, params);
				setIFrameUrl(url);
			});
	}, [params]);
	return (
		<div className='container sm:m-auto pl-5'>
			<div className='mt-3 flex items-center gap-5'>
				<div className='flex justify-center'>
					<span
						className={`text-xs sm:text-sm border border-black text-black py-[2px] px-3 rounded-full uppercase`}
					>
						<IoClose className='inline-block bg-black rounded-full m-1 text-white transition' />
						{params.get('category')}
					</span>
				</div>
				<div className='flex justify-center'>
					<span
						className={`text-xs sm:text-sm border border-black text-black py-[2px] px-3 rounded-full uppercase`}
					>
						<IoClose className='inline-block bg-black rounded-full m-1 text-white transition' />
						{params.get('column')}
					</span>
				</div>
				<div className='flex justify-center'>
					<span
						className={`text-xs sm:text-sm border border-black text-black py-[2px] px-3 rounded-full uppercase`}
					>
						<IoClose className='inline-block bg-black rounded-full m-1 text-white transition' />
						{params.get('period')}
					</span>
				</div>
			</div>
			<div className='flex flex-col gap-5 mt-36 mb-20'>
				<h1>Visualization</h1>
				<iframe
					src={iFrameUrl}
					title='Emotion Percentage'
					className='w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]'
					style={{ border: 'none' }}
				></iframe>
			</div>
		</div>
	);
}

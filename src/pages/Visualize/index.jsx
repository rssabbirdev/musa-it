import { IoClose } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

export default function Visualize() {
	const [params] = useSearchParams();
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
			<div>
				<iframe
					src={`/src/assets/files/emotion_percentage.html`}
					title='Emotion Percentage'
					width='100%'
					height='600px'
					style={{ border: 'none' }}
				></iframe>
			</div>
		</div>
	);
}

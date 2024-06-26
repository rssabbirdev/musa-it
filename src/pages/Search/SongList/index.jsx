/* eslint-disable react/prop-types */
import { CgSmile, CgSmileSad } from 'react-icons/cg';
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io';
import { PiMusicNoteLight } from 'react-icons/pi';

export default function SongList({ selectedCategory = {} }) {
	return (
		<div className='animate-fadeOut'>
			<div className='container m-auto'>
				<div>
					<div>
						<div className='md:flex justify-between items-start px-6 py-0 rounded-lg my-4 hidden'>
							<div className='w-2/3 border-r-2 py-2'>
								<p>Title</p>
							</div>
							<div className='w-1/3 flex justify-between py-2'>
								<div className='flex flex-col justify-center items-center w-1/3'>
									<span>Topic</span>
								</div>
								<div className='flex flex-col justify-center items-center w-1/3'>
									<span>Sentiment</span>
								</div>
								<div className='flex flex-col justify-center items-center w-1/3'>
									<span>Emotion</span>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-10 md:mt-0 mx-4 md:mx-0'>
						{selectedCategory?.data?.map((item, index) => (
							<SongItem key={index} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const SongItem = ({ item }) => {
	return (
		<div className='block lg:flex justify-between items-start bg-slate-950 p-6 rounded-lg my-4 hover:cursor-pointer'>
			<div className='w-full lg:w-2/3 pb-5 lg:pb-0'>
				<p>{item?.title}</p>
			</div>
			<div className='w-full lg:w-1/3 flex justify-between'>
				<div className='flex flex-col justify-center items-center w-1/3'>
					<PiMusicNoteLight className='text-3xl' />
					<span>{textFormat(item?.topics)}</span>
				</div>
				<div className='flex flex-col justify-center items-center w-1/3'>
					{item?.sentiment == 'negative' ? (
						<IoIosTrendingDown className='text-3xl' />
					) : (
						<IoIosTrendingUp className='text-3xl' />
					)}
					<span>{textFormat(item?.sentiment)}</span>
				</div>
				<div className='flex flex-col justify-center items-center w-1/3'>
					{item?.emotion == 'sadness' ? (
						<CgSmileSad className='text-3xl' />
					) : (
						<CgSmile className='text-3xl' />
					)}
					<span>{textFormat(item?.emotion)}</span>
				</div>
			</div>
		</div>
	);
};

const textFormat = (text) => {
	const textArray = text.split('_');
	const nextFormat = textArray?.map(
		(n) => n.charAt(0).toUpperCase() + n.slice(1)
	);
	const newText = nextFormat.join(' ');
	return newText;
};

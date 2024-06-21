import { useEffect, useState } from 'react';

export default function SearchDataDisplay() {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const subredditList = [
		{ name: 'All', count: 200 },
		{ name: 'Music', count: 20 },
		{ name: 'Spotify', count: 32 },
		{ name: 'Youtube', count: 40 },
		{ name: 'Twitter', count: 50 },
		{ name: 'Facebook', count: 10 },
		{ name: 'Google', count: 10 },
		{ name: 'Whatsapp', count: 40 },
		{ name: 'Github', count: 20 },
		{ name: 'Instagram', count: 80 },
	];
	const [visibleResults, setVisibleResults] = useState([]);

	useEffect(() => {
		if (subredditList.length > 0) {
			const interval = setInterval(() => {
				setVisibleResults((prev) => {
					const nextIndex = prev.length;
					if (nextIndex < subredditList.length) {
						return [...prev, subredditList[nextIndex]];
					} else {
						clearInterval(interval);
						return prev;
					}
				});
			}, 500); // Adjust the interval time as needed
		}
	}, [subredditList]);
	return (
		<div className='container m-auto'>
			<div>
				<h3 className='text-2xl mb-3'>Select Subreddit</h3>
				<div className='flex gap-5 flex-wrap items-center justify-evenly'>
					{visibleResults?.map((item, index) => {
						return (
							<SubredditItem
								key={index}
								itemName={item.name}
								itemCount={item.count}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
function SubredditItem({ itemName, itemCount }) {
	return (
		<div
			style={{
				background:
					'linear-gradient(41.34deg, #FFFFFF 16.03%, rgba(223, 223, 223, 0.814) 104.99%, rgba(153, 153, 153, 0.4) 105%)',
			}}
			className={`animate-fadeOut hover:opacity-50 flex flex-col justify-between items-center w-[150px] text-black font-semibold rounded-md p-2`}
		>
			<span>{itemName}</span>
			<span>({itemCount})</span>
		</div>
	);
}

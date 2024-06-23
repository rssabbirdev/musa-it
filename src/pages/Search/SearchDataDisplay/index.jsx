/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function SearchDataDisplay({
	setSelectedCategory,
	searchResult = [],
}) {
	// eslint-disable-next-line react-hooks/exhaustive-deps

	const [visibleResults, setVisibleResults] = useState([]);

	useEffect(() => {
		if (searchResult.length > 0) {
			const interval = setInterval(() => {
				setVisibleResults((prev) => {
					const nextIndex = prev.length;
					if (nextIndex < searchResult.length) {
						return [...prev, searchResult[nextIndex]];
					} else {
						clearInterval(interval);
						return prev;
					}
				});
			}, 200); // Adjust the interval time as needed
		}
	}, [searchResult]);
	return (
		<div className='container px-4 m-auto'>
			<div>
				<h3 className='text-2xl mb-3'>Select Subreddit</h3>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
					{visibleResults?.map((item, index) => {
						return (
							<SubredditItem
								key={index}
								item={item}
								setSelectedCategory={setSelectedCategory}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
function SubredditItem({ item, setSelectedCategory }) {
	return (
		<div
			onClick={() => setSelectedCategory(item)}
			style={{
				background:
					'linear-gradient(41.34deg, #FFFFFF 16.03%, rgba(223, 223, 223, 0.814) 104.99%, rgba(153, 153, 153, 0.4) 105%)',
			}}
			className={`animate-fadeOut m-2 transition hover:cursor-pointer hover:opacity-50 hover:-translate-y-2 flex flex-col justify-between items-center text-black font-semibold rounded-md p-2`}
		>
			<span>{item?.subreddit}</span>
			<span>({item?.count})</span>
		</div>
	);
}

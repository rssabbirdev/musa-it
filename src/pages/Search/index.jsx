import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';

import './index.css';
import { useRef, useState } from 'react';
import SearchDataDisplay from './SearchDataDisplay';
import SongList from './SongList';
import { mergeDataBySubreddit } from '../../utils/mergeDataBySubreddit';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import VisualizeFilter from './VisualizeFilter';
import { searchInArray } from '../../utils/searchInArray';

export default function Search() {
	const inputRef = useRef(null);
	const [active, setActive] = useState(false);
	const [inputText, setInputText] = useState('');
	const [selectedCategory, setSelectedCategory] = useState({});
	const [searchResult, setSearchResult] = useState([]);
	const [error, setError] = useState('');
	const [isVisualize, setIsVisualize] = useState(false);
	const navigate = useNavigate();

	const handleSubmitFilter = (e) => {
		setError('');
		e.preventDefault();
		if (e.nativeEvent.submitter) {
			const column = e.target.column.value;
			const period = e.target.period.value;
			const query = e.target.search.value;
			const category = `${selectedCategory.subreddit} (${selectedCategory.count})`;
			// const filter = { column, period, query };
			if (column && period && query) {
				navigate(
					`/visualize?column=${column}&period=${period}&query=${query}&category=${category}`
				);
			} else {
				setError('Please Select Option First');
			}
		}
	};

	const handleSubmit = (e) => {
		if (!e.nativeEvent?.submitter) {
			if (inputText.length >= 3) {
				if (e.keyCode === 13 || e.which === 13) {
					setError('');
					setIsVisualize(false);
					setSelectedCategory({});
					setSearchResult([]);
					enterSearch(inputText);
					// Example: Close the mobile keyboard
					if (inputRef.current) {
						inputRef.current.blur(); // Blur the input to close the keyboard
					}
				}
				if (e === 'clickSearch') {
					setError('');
					setIsVisualize(false);
					setSelectedCategory({});
					setSearchResult([]);
					enterSearch(inputText);
				}
			}
		}
	};

	const enterSearch = (searchQuery) => {
		setError('');
		try {
			fetch('metadata.json')
				.then((res) => res.json())
				.then((data) => {
					// const filteredSearchResult = data.filter((item) =>
					// 	item?.body
					// 		?.toLowerCase()
					// 		?.includes(searchQuery.toLowerCase())
					// );
					const filteredSearchResult = searchInArray(
						data,
						searchQuery
					);
					const mergedBySubreddit =
						mergeDataBySubreddit(filteredSearchResult);
					setSearchResult(mergedBySubreddit);
					if (mergedBySubreddit.length === 0) {
						setError('Search Result Not Found!');
					}
				});
		} catch (e) {
			setError('Something went wrong with your search');
		}
	};
	return (
		<form onSubmit={handleSubmitFilter} className=''>
			<div
				className={`flex flex-col gap-3 justify-center items-center h-[40vh] transition-all ${
					selectedCategory?.subreddit && 'h-[15vh]'
				}`}
			>
				<div
					className={`search-box ${
						active &&
						'active w-[250px] sm:w-[350px] -translate-x-5 sm:-translate-x-0'
					}`}
				>
					<div
						onClick={() => {
							setActive('true');
						}}
					>
						<CiSearch
							style={{
								backgroundColor: `${
									inputText.length >= 3 ? '#C0CFF5' : 'white'
								}`,
								color: `${
									inputText.length >= 3 ? 'white' : 'black'
								}`,
							}}
							onClick={() =>
								active && handleSubmit('clickSearch')
							}
							className={`search-icon ${active && 'active'} ${
								inputText.length >= 3 && 'hover:!bg-black '
							}`}
						/>
					</div>
					<input
						value={inputText}
						onChange={(e) => {
							setInputText(e.target.value);
						}}
						className={`${active && 'active'}`}
						type='text'
						placeholder='Type to search..'
						onKeyUp={(e) => handleSubmit(e)}
						ref={inputRef}
						name='search'
					/>
					<div
						onClick={() => {
							setActive('true');
						}}
					>
						{/* {!inputText?.length && ( */}
						<IoIosArrowRoundForward
							onClick={() =>
								active && handleSubmit('clickSearch')
							}
							className={`arrow-icon transition-all ${
								!!inputText.length && ''
							} ${active && 'active'}`}
						/>
						{/* )} */}
						{/* {!!inputText?.length && (
							<IoClose
								onClick={() => {
									setInputText('');
									setSearchResult([]);
									setError('');
									setSelectedCategory({});
									setIsVisualize(false);
								}}
								className={`arrow-icon transition-all !mr-2 !w-[25px] !h-[25px] !p-1 !bg-black !text-white ${
									active && 'active'
								}`}
							/>
						)} */}
					</div>
					<div
						onClick={() => {
							setActive(false);
						}}
					>
						<IoClose
							className={`cancel-icon ${active && 'active'}`}
							onClick={() => {
								setInputText('');
								setSearchResult([]);
								setError('');
								setSelectedCategory({});
								setIsVisualize(false);
							}}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<span
						className={`${
							selectedCategory.subreddit ? 'visible' : 'invisible'
						} bg-[#C0CFF5] text-black py-[2px] px-3 rounded-full`}
					>
						<IoClose
							onClick={() => {
								setSelectedCategory({});
								setIsVisualize(false);
							}}
							className='inline-block bg-white rounded-full m-1 text-black hover:cursor-pointer hover:bg-black hover:text-white transition'
						/>
						{selectedCategory?.subreddit} ({selectedCategory.count})
					</span>
				</div>
			</div>

			<div className={`${isVisualize && 'hidden'}`}>
				{inputText?.length <= 0 && !searchResult?.length && (
					<p className='animate-fadeOut text-center font-light font-mono text-lg'>
						Enter your Search Query
					</p>
				)}
				{error && (
					<p className='animate-fadeOut text-center font-light font-mono text-lg'>
						{error}
					</p>
				)}
				{!!searchResult?.length && !selectedCategory?.subreddit && (
					<SearchDataDisplay
						setSelectedCategory={setSelectedCategory}
						searchResult={searchResult}
					/>
				)}
				{selectedCategory?.subreddit && (
					<SongList selectedCategory={selectedCategory} />
				)}
			</div>
			{/* Visualize Filter */}
			{/* <form onSubmit={handleSubmitFilter}> */}
			<div className={`animate-fadeOut ${!isVisualize && 'hidden'}`}>
				{error && (
					<p className='animate-fadeOut text-center font-light font-mono text-lg'>
						{error}
					</p>
				)}
				<VisualizeFilter />
			</div>
			{selectedCategory?.subreddit && (
				<div className='sticky bottom-8 flex justify-center'>
					<div
						onClick={() => setIsVisualize(true)}
						className={`${
							isVisualize && 'hidden'
						} animate-fadeOut w-[200px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-white text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
					>
						<MdOutlineRemoveRedEye className={'text-3xl'} />
						<span className='text-sm'>{'Visualize Data'}</span>
					</div>
					<div className={`flex gap-5 ${!isVisualize && 'hidden'}`}>
						<div
							onClick={() => {
								setIsVisualize(false);
								setError('');
							}}
							className={`animate-fadeOut w-[100px] sm:w-[200px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-red-300 text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
						>
							<IoClose className={'text-3xl'} />
							<span className='text-sm hidden sm:block'>
								{'Cancel'}
							</span>
						</div>
						<button
							type='submit'
							className={`animate-fadeOut w-[100px] sm:w-[200px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-white text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
						>
							<IoIosArrowRoundForward className={'text-3xl'} />
							<span className='text-sm hidden sm:block'>
								{'Continue'}
							</span>
						</button>
					</div>
				</div>
			)}
			{/* </form> */}
		</form>
	);
}

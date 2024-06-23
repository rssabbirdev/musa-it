import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';

import './index.css';
import { useRef, useState } from 'react';
import SearchDataDisplay from './SearchDataDisplay';
import SongList from './SongList';
import { mergeDataBySubreddit } from '../../utils/mergeDataBySubreddit';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function Search() {
	const inputRef = useRef(null);
	const [active, setActive] = useState(false);
	const [inputText, setInputText] = useState('');
	const [selectedCategory, setSelectedCategory] = useState({});
	const [searchResult, setSearchResult] = useState([]);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		if (inputText.length >= 3) {
			if (e.keyCode === 13 || e.which === 13) {
				setError('');
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
				setSelectedCategory({});
				setSearchResult([]);
				enterSearch(inputText);
			}
		}
	};

	const enterSearch = (searchQuery) => {
		fetch('/src/assets/files/metadata.json')
			.then((res) => res.json())
			.then((data) => {
				const filteredSearchResult = data.filter((item) =>
					item.body.includes(searchQuery)
				);
				const mergedBySubreddit =
					mergeDataBySubreddit(filteredSearchResult);
				setSearchResult(mergedBySubreddit);
				if (mergedBySubreddit.length === 0) {
					setError('Search Result Not Found!');
				}
			});
	};
	return (
		<div className=''>
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
					/>
					<div
						onClick={() => {
							setActive('true');
						}}
					>
						{!inputText?.length && (
							<IoIosArrowRoundForward
								className={`arrow-icon ${active && 'active'}`}
							/>
						)}
						{!!inputText?.length && (
							<IoClose
								onClick={() => {
									setInputText('');
									setSearchResult([]);
									setError('');
									setSelectedCategory({});
								}}
								className={`arrow-icon ${active && 'active'}`}
							/>
						)}
					</div>
					<div
						onClick={() => {
							setActive(false);
						}}
					>
						<IoClose
							className={`cancel-icon ${active && 'active'}`}
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
							onClick={() => setSelectedCategory({})}
							className='inline-block bg-white rounded-full m-1 text-black hover:cursor-pointer hover:bg-black hover:text-white transition'
						/>
						{selectedCategory?.subreddit} ({selectedCategory.count})
					</span>
				</div>
			</div>

			<div>
				{!searchResult?.length && (
					<p className='animate-fadeOut text-center font-light font-mono text-lg'>
						{inputText.length < 3 &&
							`Minimum type ${
								3 - Number(inputText.length)
							} letter for search...`}
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
			{selectedCategory?.subreddit && (
				<div className='sticky bottom-8 flex justify-center animate-fadeOut'>
					<Link to={'#'}>
						<div
							className={`w-[200px] mt-10 md:mt-0 flex justify-center items-center gap-1 bg-white text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
						>
							<MdOutlineRemoveRedEye className={'text-3xl'} />
							<span className='text-sm'>{'Visualize Data'}</span>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}

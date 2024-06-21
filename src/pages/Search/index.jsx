import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import './index.css';
import { useState } from 'react';

export default function Search() {
	const [active, setActive] = useState(false);
	return (
		<div className='flex justify-center items-center h-[50vh]'>
			{/* <div className='bg-white w-[300px] text-black flex justify-between items-center px-4 py-3 rounded-full'> */}
			{/* <CiSearch className='text-3xl w-2/12 pointer-events-auto' />
				<input
					type='text'
					placeholder='Search On Reddit'
					className='bg-transparent outline-none w-10/12 px-2 py-1'
				/> */}
			<div className={`search-box ${active && 'active w-[250px] sm:w-[350px]'}`}>
				<input
					className={`${active && 'active'}`}
					type='text'
					placeholder='Type to search..'
				/>
				<div
					onClick={() => {
						setActive('true');
					}}
				>
					<CiSearch className={`search-icon ${active && 'active'}`} />
				</div>
				<div
					onClick={() => {
						setActive(false);
					}}
				>
					<IoClose className={`cancel-icon ${active && 'active'}`} />
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

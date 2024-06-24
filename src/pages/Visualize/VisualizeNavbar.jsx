import { Link, useSearchParams } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { BiSearch } from 'react-icons/bi';
// eslint-disable-next-line react/prop-types
export default function VisualizeNavbar() {
	const [params] = useSearchParams();
	return (
		<div className='flex justify-between items-center py-2 select-none px-3 sm:px-0'>
			<div>
				<ul className='flex gap-5'>
					<li className='flex justify-center items-center gap-8 uppercase text-2xl text-black'>
						<BiSearch className='text-3xl' />
						<span>{params.get('query')}</span>
					</li>
				</ul>
				
			</div>
			<div>
				<Link to='/'>
					<img
						className='w-14 sm:w-[90px]'
						src={logo}
						height={40}
						alt='Logo'
					/>
				</Link>
			</div>
		</div>
	);
}

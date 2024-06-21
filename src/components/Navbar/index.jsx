import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
// eslint-disable-next-line react/prop-types
export default function Navbar({ navMenuData = [] }) {
	return (
		<div className='flex justify-between items-center py-2 select-none px-3 sm:px-0'>
			<div>
				<ul className='flex gap-5'>
					{navMenuData?.map((item, index) => (
						<li
							className='sm:list-none md:list-disc list-inside first:list-none'
							key={index}
						>
							{item?.name}
						</li>
					))}
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

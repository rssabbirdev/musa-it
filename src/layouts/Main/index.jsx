import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useState } from 'react';

export default function Main() {
	// eslint-disable-next-line no-unused-vars
	const [navMenuData, setMenuData] = useState(
		[
			{
				name: 'Analyze',
				path: '#',
				isLink: false,
			},
			{
				name: 'Visualize',
				path: '#',
				isLink: false,
			},
			{
				name: 'Download',
				path: '#',
				isLink: false,
			},
		] || []
	);
	return (
		<div className=''>
			<div className='container m-auto'>
				<Navbar navMenuData={navMenuData} />
			</div>
			<Outlet />
		</div>
	);
}

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useState } from 'react';
import Footer from '../../components/Footer';

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
		<>
			<div className='flex justify-between flex-col animate-fadeOut'>
				<div className='container m-auto'>
					<Navbar navMenuData={navMenuData} />
				</div>
				<div className='flex justify-between flex-col'>
					<div>
						<Outlet />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

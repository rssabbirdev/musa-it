import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useState } from 'react';

export default function SearchLayout() {
	// eslint-disable-next-line no-unused-vars
	const [navMenuData, setMenuData] = useState([]);

	return (
		<div className='animate-fadeOut'>
			<div className='container m-auto'>
				<Navbar navMenuData={navMenuData} />
			</div>
			<Outlet />
		</div>
	);
}

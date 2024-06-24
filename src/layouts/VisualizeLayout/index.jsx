import { Outlet } from 'react-router-dom';
import VisualizeNavbar from '../../pages/Visualize/VisualizeNavbar';

export default function VisualizeLayout() {
	return (
		<div className="animate-fadeOut bg-[url('/src/assets/navbar.svg')] h-[230px]">
			<div className='container m-auto'>
				<VisualizeNavbar />
			</div>
			<Outlet />
		</div>
	);
}

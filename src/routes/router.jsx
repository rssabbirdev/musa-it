import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../pages/Search';
import Visualize from './../pages/Visualize/index';
import VisualizeLayout from '../layouts/VisualizeLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/search',
		element: <SearchLayout />,
		children: [
			{
				path: '/search',
				element: <Search />,
			},
		],
	},
	{
		path: '/visualize',
		element: <VisualizeLayout />,
		children: [
			{
				path: '/visualize',
				element: <Visualize />,
			},
		],
	},
]);

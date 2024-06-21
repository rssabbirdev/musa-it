import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../pages/Search';

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
]);

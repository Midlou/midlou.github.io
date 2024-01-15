import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Pages
import PageHome from './pages/home.jsx';
import PageProjects from './pages/projects.jsx';
import ErrorPage from './error-page.jsx';
import PageMiceblocks from './pages/projects/miceblocks.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageHome />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/projects",
		element: <PageProjects />,
	},
	{
		path: "/projects/miceblocks",
		element: <PageMiceblocks />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

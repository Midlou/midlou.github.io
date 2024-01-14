import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Pages
import PageHome from './pages/home.jsx';
import PageProjects from './pages/projects.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageHome />,
	},
	{
		path: "/projects",
		element: <PageProjects />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

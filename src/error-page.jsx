import * as React from "react"
import { Link, useRouteError } from "react-router-dom";

// components
import MainLayout from './components/layouts/main-layout';

// icons
import MidIconLight from "./assets/icons/mid-icon-light-1.svg";

const PageContent = () => {
	const error = useRouteError();
	console.error(error);

	return <div className="grid container mx-auto py-3">
		<Link to="/">
			<div className="flex justify-center">
				<div className="flex justify-center container mx-auto py-3">
					<img src={MidIconLight} className="block w-1/4" alt="Midlou logo" />
				</div>
			</div>
		</Link>
		<div className="flex justify-center container mx-auto py-3">
			<div className="p-3 rounded-lg shadow-lg justify-center bg-red-800 ">
				<p>
					<span className="font-bold text-2xl text-white">Page not found</span>
				</p>
			</div>
		</div>

		<div className="flex justify-center container mx-auto py-3">
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>

	</div>
}

const ErrorPage = () => <MainLayout title={"Page Not Found"} Component={<PageContent />} />;
export default ErrorPage;


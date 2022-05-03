import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import ContainerGrid from "../components/containers/container-grid";
import MainLayout from '../components/layouts/main';
import Panel from "../components/panels/panel";

const PageContent = () => {
	return <ContainerGrid>
		<Link to={"/"}>
			<div className="flex justify-center">
				<StaticImage
					className="block w-1/5"
					placeholder="none"
					alt="Midlou logo"
					loading="eager"
					src="../images/mid-icon-light-64x64-a1.svg"
				/>
			</div>
			<div className="flex justify-center container mx-auto py-3">
				<Panel className="flex items-center justify-center bg-red-800 ">
					<p>
						<span className="font-bold text-2xl text-white">404 - Not Found</span>
					</p>
				</Panel>
			</div>
		</Link>
	</ContainerGrid>
}

const Layout = () => <MainLayout title={"404 - Not found"} Component={<PageContent />} />;
export default Layout;

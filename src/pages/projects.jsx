import * as React from "react"
import MainLayout from '@components/layouts/main';
import ContainerFlex from "@components/containers/container-flex";
import Panel from "@components/panels/panel";

const PageContent = () => {
	return <ContainerFlex>
		<Panel className="bg-gray-800 w-full">
			List of projects go here
		</Panel>
	</ContainerFlex>;
}

const Layout = () => <MainLayout title={"Projects"} Component={<PageContent />} />;
export default Layout;

import * as React from "react";

import MainLayout from '@components/layouts/main';
import ResponsiveText from "@components/text/responsive-text";
import ContainerFlex from "@components/containers/container-flex";

const PageContent = () => {
	return <ContainerFlex>
		<div className="py-5 text-justify md:max-w-3xl">
			<h1 className="sm:text-xl md:text-2xl leading-10 tracking-tight">
				<span className="font-bold">Yo! I make stuff! ...</span> <small className="text-base text-gray-300">I can't find a better definition</small>
			</h1>
			<ResponsiveText>
				I mean, "by definition" I am a programmer;
				3D Modeler (includes 3D printing);
				level designer; audio, video image creator/editor;
				And "<a href="https://www.urbandictionary.com/define.php?term=Gambiarra" className="stylized-link" target={"_blank"} rel={"noreferrer"}><i>gambiarra</i></a>" professional.
				I speak Brazilian Portuguese and English.
			</ResponsiveText>
		</div>
	</ContainerFlex>
}

const Layout = () => <MainLayout title={"About"} Component={<PageContent />} />;
export default Layout;

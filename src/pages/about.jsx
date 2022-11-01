import * as React from "react";

import MainLayout from '@components/layouts/main';
import ResponsiveText from "@components/text/responsive-text";
import ContainerFlex from "@components/containers/container-flex";
import DefaultList from "@components/lists/default-list";
import { PROFILE_ITEMS } from "@constants/profiles";

const PageContent = () => {

	return <ContainerFlex>
		<div className="px-4 flex-col mx-auto lg:w-3/4 md:max-w-4xl">
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
			<DefaultList items={PROFILE_ITEMS}/>
		</div>
	</ContainerFlex>
}

const Layout = () => <MainLayout title={"About"} Component={<PageContent />} />;
export default Layout;

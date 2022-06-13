import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import MainLayout from '@components/layouts/main';
import ResponsiveText from "@components/text/responsive-text";
import ContainerFlex from "@components/containers/container-flex";

const PageContent = () => {
	return <ContainerFlex>
		<div className="px-5 text-justify">
			<div className="flex justify-center container mx-auto py-3">
				<StaticImage
					className="block w-1/4"
					placeholder="none"
					alt="Midlou logo"
					loading="eager"
					src="../images/mid-icon-light-64x64-a1.svg"
				/>
			</div>
			<h1 className="sm:text-2xl md:text-4xl leading-10 tracking-tight">
				<span className="font-bold">Yo! I make stuff! ...</span> <small className="text-base text-gray-300">I can't find a better definition</small>
			</h1>
			<ResponsiveText>
				I mean, "by definition" I am a programmer;
				3D Modeler (includes 3D printing);
				level designer; audio, video image creator/editor;
				And "<a href="https://www.urbandictionary.com/define.php?term=Gambiarra" className="stylized-link" target={"_blank"} rel={"noreferrer"}><i>gambiarra</i></a>" professional.
				I speak Brazilian Portuguese and English.
			</ResponsiveText>
			<ResponsiveText>
				First of all, this website is not a <i className="text-inherit">"look my web skills"</i> or <i className="text-inherit">"this is the best design I can make"</i>.
				I like to think of it as a hub where you can access my entire trajectory on the internet.
			</ResponsiveText>
			<ResponsiveText>
				<i><a className="stylized-link" href={"https://midlou.github.io/"} target={"_blank"} rel={"noreferrer"}>https://midlou.github.io/</a></i> is more like a repository or storehouse with all my public projects.
				These days even I have a hard time finding all the things I've made.
			</ResponsiveText>
		</div>
	</ContainerFlex>
}

const Layout = () => <MainLayout title={"Home"} Component={<PageContent />} />;
export default Layout;

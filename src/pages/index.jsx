import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import MainLayout from '@components/layouts/main';
import ResponsiveText from "@components/text/responsive-text";
import ContainerFlex from "@components/containers/container-flex";
import { PROFILE_ITEMS } from "@constants/profiles";
import Panel from "@components/panels/panel";
import { navigatePageBlank } from "@shared/helpers";

const PageContent = () => {
	return <ContainerFlex>
	<div className="px-5 text-justify md:max-w-3xl">
		<div className="flex justify-center container mx-auto py-3">
			<StaticImage
				className="block w-1/4"
				placeholder="none"
				alt="Midlou logo"
				loading="eager"
				src="../images/mid-icon-light-64x64-a1.svg"
			/>
		</div>
		<ResponsiveText className="text-justify">
			Programmer;
			3D modeler and 3D printing;
			level designer; audio, video and image creator/editor;
			"<a href="https://www.urbandictionary.com/define.php?term=Gambiarra" className="stylized-link" target={"_blank"} rel={"noreferrer"}><i>Gambiarra</i></a>" professional.
			I speak Brazilian Portuguese and English.
		</ResponsiveText>
		<Panel className="bg-gray-800 overflow-x-auto">
			<ul className="rounded-lg border border-zinc-800">
				{
					PROFILE_ITEMS.map((item, index) => {
						return <li key={item?.value || index} onClick={(e) => navigatePageBlank(e, item.link)} tabIndex={0}
							className={`text-lg px-6 py-2 w-full border-l-4 cursor-pointer default-focus-light hover:bg-slate-700 hover:border-blue-500 border-zinc-600`}>
							<a href className="stylized-link" link={item.link}>
								{item.label}
							</a>
						</li>
					})
				}
			</ul>
		</Panel>
	</div>
</ContainerFlex>
}

const Layout = () => <MainLayout title={"Home"} Component={<PageContent />} />;
export default Layout;

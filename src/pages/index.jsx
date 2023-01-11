import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import MainLayout from '@components/layouts/main';
import ContainerFlex from "@components/containers/container-flex";
import { PROFILE_ITEMS } from "@constants/profiles";
import Panel from "@components/panels/panel";

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
			<p className="text-justify mb-6 mt-3 md:mt-5 text-base sm:text-lg md:text-xl">
				Programmer;
				3D modeler and 3D printing;
				level designer; audio, video and image creator/editor;
				"<a href="https://www.urbandictionary.com/define.php?term=Gambiarra" className="stylized-link" target={"_blank"} rel={"noreferrer"}><i>Gambiarra</i></a>" professional.
				I speak Brazilian Portuguese and English.
			</p>
			<Panel className="bg-gray-800 overflow-x-auto text-lg">
				{
					PROFILE_ITEMS.map((item, index) => {
						return <a href={item.link} key={item?.value || index} target={"_blank"} rel={"noreferrer"} tabIndex={0}>
							<div className="stylized-link px-6 py-2 w-full border-l-4 cursor-pointer default-focus-light hover:bg-slate-700 hover:border-blue-500 border-zinc-600" >
								{item.label}
							</div>
						</a>
					})
				}
			</Panel>
		</div>
	</ContainerFlex>
}

const Layout = () => <MainLayout title={"Home"} Component={<PageContent />} />;
export default Layout;

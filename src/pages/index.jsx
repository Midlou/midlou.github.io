import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import MainLayout from '@components/layouts/main';
import ResponsiveText from "@components/text/responsive-text";
import ContainerFlex from "@components/containers/container-flex";
import { MENU_ITEMS } from "@constants/menu";
import { navigatePage } from "@shared/helpers";
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
			<ResponsiveText>
				Welcome. Here you will find a lot of random stuff like prototypes or hobbies.
				I like to think of this website as a hub where you can check my trajectory on the internet.
			</ResponsiveText>
			<ResponsiveText>
				<i><a className="stylized-link" href={"https://midlou.github.io/"} target={"_blank"} rel={"noreferrer"}>https://midlou.github.io/</a></i> is more like a repository or storehouse with all my public projects.
				These days even I have a hard time finding all the things I have made.
			</ResponsiveText>

			<Panel className="bg-gray-800 overflow-x-auto">
				<ul className="rounded-lg border border-zinc-800">
					{
						MENU_ITEMS.map((page, index) => {
							return <li key={page?.value || index} onClick={(e) => navigatePage(e, page.link)} tabIndex={0}
								className={`
							${'Home' === page.label ? " bg-slate-700 border-blue-500 " : " hover:bg-slate-700 hover:border-blue-500 border-zinc-600 "}
							px-6 py-2 w-full border-l-4 cursor-pointer default-focus-light
						`}>

								{page.label}
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

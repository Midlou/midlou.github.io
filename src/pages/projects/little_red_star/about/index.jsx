import React from "react";

import MainLayout from "@components/layouts/main";

import { LITTLE_RED_STAR_RELEASES } from "@constants/little-red-star-releases";
import HyperLink from "@components/links/hyper-link";
import ContainerFlex from "@components/containers/container-flex";
import Panel from "@components/panels/panel";
import ResponsiveText from "@components/text/responsive-text";
import DividerLabel from "@components/dividers/divider-label";

const PageContent = () => {
	return <ContainerFlex className="px-4 flex-col mx-auto lg:w-3/4 md:max-w-4xl">
		<DividerLabel label="Little Red Star" />
		<div>
			<ResponsiveText>
				Little Red Star is a map I made for the competition
				<HyperLink link={"https://lambdabuilds.lambdageneration.com/escape-from-black-mesa"}> LambdaBuilds: Escape From Black Mesa</HyperLink>. It won <b className="text-[#a58573]">3rd place</b>.
				Here you will find the patch notes and file releases of the map. <b>You can download the VMF file of the release b1.</b>
			</ResponsiveText>
		</div>
		<DividerLabel label="File releases" />
		<Panel className="bg-gray-800 overflow-x-auto">
			<table className="default-table">
				<thead>
					<tr>
						<th className="text-left w-[25%]">Name</th>
						<th className="text-left">Description</th>
						<th className="text-left">Files</th>
					</tr>
				</thead>
				<tbody>
					{
						LITTLE_RED_STAR_RELEASES.map((release, index) => {
							return <tr key={index}>
								<td>{release.name}</td>
								<td>{release.description}</td>
								<td>
									{
										release.link
											? <HyperLink link={release.link} label="Download" />
											: "-"
									}
								</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</Panel>
		<DividerLabel label="Patch notes" />
		{
			LITTLE_RED_STAR_RELEASES.map((release, index) => {
				return <div key={index} className="mb-4">
					<b>{release.name}</b>
					<div className="flex">
						<ul className="rounded-lg w-96 list-disc list-inside">
							{
								release.patch_items.map((item, index) => {
									return <li key={index} className="px-4 w-full">
										{
											item
										}
									</li>
								})
							}
						</ul>
					</div>
				</div>;
			})
		}
	</ContainerFlex>;
}

const Layout = () => <MainLayout title={"Little Red Star"} Component={<PageContent />} />;
export default Layout;

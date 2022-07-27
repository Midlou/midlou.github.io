import * as React from "react"

import Panel from "@components/panels/panel";
import Button from "@components/buttons/button";
import MainLayout from '@components/layouts/main';
import { navigatePageBlank } from '@shared/helpers';
import ContainerFlex from "@components/containers/container-flex";

const PageContent = () => {

	const data = require('@content/projects-content.json');

	return <ContainerFlex>
		<Panel className="bg-gray-800 lg:w-3/4 md:w-full overflow-x-auto">
			<table className="default-table">
				<thead>
					<tr>
						<th className="text-left">Project</th>
						<th className="text-left">Description</th>
						<th className="text-center">Link</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map(project => {
							return <tr onClick={(e) => navigatePageBlank(e, project.pageLink)} key={project.name} 
								className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
								<td>{project.label}</td>
								<td>{project.description}</td>
								<td>
									<Button
										label={"About"}
										toggle={true}
										onClick={(e) => navigatePageBlank(e, project.aboutPath)}
										className={'w-full'}
									/>
								</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</Panel>
	</ContainerFlex>;
}

const Layout = () => <MainLayout title={"Projects"} Component={<PageContent />} />;
export default Layout;

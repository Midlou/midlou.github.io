import { useState } from 'react'

import _ from "lodash";

import { Link } from 'react-router-dom';

// components
import MainLayout from '../components/layouts/main';

// constants
import { PROJECT_ITEMS } from '../constants/projects'
import { get_image_url } from '../shared/helpers';

function PageContent() {
	let projects = _.orderBy(PROJECT_ITEMS, (project) => {
		let release_date = project.release_date;
		if (!release_date) return 0;

		let date = new Date(release_date);

		return date.getTime();
	}, 'desc');

	return <div className="grid container mx-auto py-3 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
		{
			projects.map(project => {
				return <div key={project.name} className="w-full">
					<div className="flex flex-col gap-2 justify-center container mx-auto">
						{
							project.thumbnail_path
								? (
									<div>
										<Link to={project.page_link}>
											<div className="min-w-fit rounded-md">
												<img src={get_image_url(project.thumbnail_path)} alt={project.description || ''} />
											</div>
										</Link>
									</div>
								) : (null)
						}
						<div>
							<Link to={project.page_link} className="stylized-link text-2xl">
								<b>{project.label}</b>
							</Link>
						</div>
						<div>
							<span className="text-justify">
								{project.description}
							</span>
						</div>

					</div>
				</div>
			})
		}
	</div>;
}

const PageProjects = () => <MainLayout title={"Projects"} Component={<PageContent />} />;

export default PageProjects

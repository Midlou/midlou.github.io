import _ from "lodash";

// constants
import { PROJECT_ITEMS } from '../constants/projects'

function ProjectsContent() {
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
										<a href={project.page_link}>
											<div className="min-w-fit rounded-md">
												<img src={project.thumbnail_path} alt={project.description || ''} />
											</div>
										</a>
									</div>
								) : (null)
						}
						<div>
							<a href={project.page_link} className="stylized-link text-2xl">
								<b>{project.label}</b>
							</a>
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

export default ProjectsContent

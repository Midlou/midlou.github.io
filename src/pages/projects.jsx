import * as React from "react"
import _ from "lodash";

import { graphql, Link } from 'gatsby'
import MainLayout from '@components/layouts/main';
import { getImageFromQueryData } from '@shared/helpers';
import ContainerGrid from "@components/containers/container-grid";
import { GatsbyImage } from "gatsby-plugin-image";
import If from "@components/conditionals/if";

const PageContent = ({ data }) => {
	const projects = _.reverse(require('@content/projects.json'));

	let imageData = data.allFile.edges;

	return <ContainerGrid className="px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
		{
			projects.map(project => {
				// return <Panel className="bg-gray-800 lg:w-3/4 md:w-full overflow-x-auto">

				// </Panel>
				return <div key={project.name} className="w-full">
					<div className="flex flex-col gap-2 justify-center container mx-auto">
						<If render={project.thumbnailFileName}
							body={() => {
								return <div>
									<Link to={project.pageLink}>
										<GatsbyImage className="min-w-fit rounded-md"
											image={getImageFromQueryData(imageData, project.thumbnailFileName)}
											alt={project.description || ''} />
									</Link>
								</div>
							}}
						/>
						<div>
							<Link to={project.pageLink} className="stylized-link text-2xl">
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
	</ContainerGrid>;
}

export const query = graphql`
  query ($id: String) {
	allFile(filter: {relativeDirectory: {eq: $id}, extension: {ne: "svg"}}) {
		edges {
		  node {
			childImageSharp {
			  gatsbyImageData(layout: FULL_WIDTH placeholder: BLURRED)
			  parent {
				... on File {
				  name
				}
			  }
			}
		  }
		}
	  }
  }
`

const Layout = (props) => <MainLayout title={"Projects"} Component={<PageContent {...props} />} />;
export default Layout;

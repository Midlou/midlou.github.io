const path = require('path');
const data = require('./src/content/projects-content.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	const template = path.resolve('./src/components/templates/generic-project-page.jsx');

	data.forEach(project => {
		let path = `projects/${project.pagePath || project.name}`;

		createPage({
			path,
			component: template,
			context: project
		});
	});
}
const path = require('path');
const data = require('./src/content/projects-content.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	const template = path.resolve('./src/components/templates/generic-project-page.jsx');

	data.forEach(project => {
		if (!project.textContent?.length) return;

		let path = `${project.aboutPath || project.name}`;

		createPage({
			path,
			component: template,
			context: project
		});
	});
}

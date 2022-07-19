import React from "react";
import _ from "lodash";

import TextImageRow from "@components/page-rows/text-image-row";

var imageData = [];

function GenericProjectPage({ data, pageContext }) {
	imageData = data.allFile.edges;

	let rowElements = getRowElements(pageContext);
	let links = pageContext.links;

	return {
		links,
		imageData,
		rowElements
	};
}

function getRowElements(pageContext) {
	let pageContent = _.concat(pageContext.textContent, pageContext.imageContent);

	let groupedContent = getGroupedContent(pageContent);

	let orderedContent = getOrderedContent(groupedContent.withOrder);
	let unorderedContent = [];

	return _.concat(orderedContent, unorderedContent);
}

function getGroupedContent(items) {
	let withOrder = {};
	let withoutOrder = [];

	_.each(items, (item) => {
		if (!item) return;

		if (!item.order) return withoutOrder.push(item);

		if (!withOrder[item.order]) withOrder[item.order] = [];
		return withOrder[item.order].push(item);
	});

	return { withOrder, withoutOrder };
}


function getOrderedContent(orderedRow) {
	let preparedRows = [];
	_.each(orderedRow, (rowItems) => {
		let preparedRow = prepareRowContent(rowItems);

		preparedRows.push(preparedRow);
	});

	return preparedRows;
}

function prepareRowContent(rowItems, preparedRows = []) {
	let row = _.take(rowItems, 2);

	if (!row.length) return preparedRows;

	let rowImage = _.find(row, 'fileName');
	let rowText = _.find(row, 'text');

	if (!rowText) return preparedRows;

	let preparedRow = getRowElement(rowText, rowImage);
	preparedRows.push(preparedRow);

	let remainingItems = _.difference(rowItems, row);
	if (remainingItems) return prepareRowContent(remainingItems, preparedRows);

	return preparedRows;
}

function getRowElement(rowText, rowImage) {
	if (rowImage) {
		rowImage.image = getImageFromQueryData(rowImage);
	}

	return <TextImageRow key={rowText.order || rowImage.order}
		imageContent={rowImage} textContent={rowText} />
}


function getImageFromQueryData(rowImage) {
	let imageNode = _.find(imageData, {
		node: {
			childImageSharp: {
				parent: { name: rowImage.fileName }
			}
		}
	});

	return imageNode?.node.childImageSharp.gatsbyImageData;
}

export default GenericProjectPage;

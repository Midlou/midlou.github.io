import React from "react";
import _ from "lodash";

import ContainerGrid from "@components/containers/container-grid";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import If from "@components/conditionals/if";
import TextImageRow from "@components/page-rows/text-image-row";

const rowElementsQty = 2;
var imageData = [];

function getGroupedContent(items) {
	let withOrder = {};
	let withoutOrder = [];

	_.each(items, (item) => {
		if (!item.order) return withoutOrder.push(item);

		if (!withOrder[item.order]) withOrder[item.order] = [];
		return withOrder[item.order].push(item);
	});

	return { withOrder, withoutOrder };
}

function GenericProjectPage({ data, pageContext }) {
	imageData = data.allFile.edges;

	let pageContent = _.concat(pageContext.textContent, pageContext.imageContent);

	let groupedContent = getGroupedContent(pageContent);

	let orderedContent = getOrderedContent(groupedContent.withOrder);
	let unorderedContent = [];

	let rowsContent = _.concat(orderedContent, unorderedContent);

	return {
		rowsContent
	};
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
	// let row = _.take(rowItems, rowElementsQty);
	let row = _.take(rowItems, 2);

	if (!row.length) return preparedRows;

	let rowImage = _.find(row, 'fileName');
	let rowText = _.find(row, 'text');

	let preparedRow = getRowElement(rowText, rowImage);
	preparedRows.push(preparedRow);

	let remainingItems = _.difference(rowItems, row);
	if (remainingItems) return prepareRowContent(remainingItems, preparedRows);

	return preparedRows;
}

function getRowElement(rowText, rowImage) {
	rowImage.image = rowImage
		? getImageFromQueryData(rowImage)
		: null;

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

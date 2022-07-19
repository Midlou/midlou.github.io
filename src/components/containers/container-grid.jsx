import * as React from "react"

const ContainerGrid = ({ children, className = '' }) => <div className={`${className} grid container mx-auto py-3`}>
	{children}
</div>


export default ContainerGrid;

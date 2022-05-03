import * as React from "react"

const ContainerFlex = ({ children, className = '' }) => <div className={`${className} flex justify-center container mx-auto py-3`}>
	{children}
</div>

export default ContainerFlex;

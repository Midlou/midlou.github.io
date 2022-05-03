import React from "react";

const Panel = ({ children, className = '' }) => <div className={`${className} p-4 rounded-lg shadow-lg`}>
	{children}
</div>


export default Panel;

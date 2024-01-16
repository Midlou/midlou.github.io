import React from "react";

// components
import MiceblocksFooter from "../navbars/miceblocks-footer";

const MiceblocksLayout = ({ children }) => {
	return <>
		<div className="flex flex-col h-screen justify-between text-white">
			<main className="flex-grow">
				{children}
			</main>
			<footer>
				<MiceblocksFooter />
			</footer>
		</div>

	</>
}

export default MiceblocksLayout;

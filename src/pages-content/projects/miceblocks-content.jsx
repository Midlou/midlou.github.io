import React, { useEffect, useState } from "react";

import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

// images
import MiceblocksTextImage from "../../assets/projects/miceblocks/miceblocks-text-1024x256.png";

// styles
import '../../styles/glow-hover.css'
import { PARTICLE_OPTIONS } from "../../constants/miceblocks-particle-options";

const MiceblocksContent = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	return <div className="h-screen">
		<div>
			{
				init && <Particles
					id="tsparticles"
					options={PARTICLE_OPTIONS}
				/>
			}
		</div>

		<div className="grid container mx-auto py-3">
			<div className="flex justify-center container mx-auto py-3">
				<img src={MiceblocksTextImage.src} className="block" alt="Miceblocks title text" />
			</div>

			<div className="mt-10 flex justify-center">
				<button className={`glow-on-hover text-white text-center text-2xl focus:ring-4 focus:ring-green-400 rounded py-3 px-5 drop-shadow-lg`}>
					<a href="/files/Miceblocks-vA-12-2.zip">
						<b>Download</b>
					</a>
				</button>
			</div>
		</div>

	</div>;
}

export default MiceblocksContent;

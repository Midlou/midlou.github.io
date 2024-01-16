import React from "react";

import { get_current_year } from "../../shared/helpers";

// icon
import MidIconLight from "../../assets/icons/mid-icon-light-1.svg";

// constants
// import { EXTERNAL_LINKS } from "@constants/external-links";

const MiceblocksFooter = () => {
	return <div className="text-white text-center p-5 bg-gray-800">
{/* 
		<div className="mb-5">
			<a className="mx-3 stylized-link text-7xl" href={EXTERNAL_LINKS.midlouSteamAccount.link} title={EXTERNAL_LINKS.midlouSteamAccount.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faSteam} size="4x" />
			</a>

			<a className="mx-3 stylized-link text-7xl" href={EXTERNAL_LINKS.github.link} title={EXTERNAL_LINKS.github.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faGithub} size="4x" />
			</a>

			<a className="mx-3 stylized-link text-7xl" href={EXTERNAL_LINKS.playMinecraftMiceblocks.link} title={EXTERNAL_LINKS.playMinecraftMiceblocks.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faGlobeAmericas} size="4x" />
			</a>
		</div> */}

		<p className="mb-5">
			Miceblocks Resource Pack and Miceblocks website by Midlou.
		</p>

		<div className="mb-5 flex justify-center">
			<a href="/">
				<div className="flex justify-center container mx-auto py-3">
					<img src={MidIconLight.src} className="block w-40" alt="Midlou logo" />
				</div>
			</a>
		</div>
		<div>
			<small>
				<a className="stylized-link" href="https://www.minecraft.net/" target="_blank" rel="noreferrer">Minecraft</a> is copyright of <a className="stylized-link" href="https://www.mojang.com/" target="_blank" rel="noreferrer">Mojang AB</a> and is not afilliated with this project.
			</small>
			<p>Copyright © 2020 - {get_current_year()} Mice Blocks, all rights reserved.</p>
		</div>
	</div>
}

export default MiceblocksFooter;

import React from "react";
import { Link } from "gatsby";
import { getCurrentYear } from '@shared/helpers';
import { StaticImage } from "gatsby-plugin-image";
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faSteam, faGithub } from '@fortawesome/free-brands-svg-icons'

import Icon from '@components/icons/icon';
import ExternalLinks from "@content/external-links.json";

const MiceblocksFooter = () => {
	return <div className="text-white text-center p-5 bg-gray-800">

		<div className="mb-5">
			<a className="mx-3 stylized-link text-7xl" href={ExternalLinks.midlouSteamAccount.link} title={ExternalLinks.midlouSteamAccount.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faSteam} size="4x" />
			</a>

			<a className="mx-3 stylized-link text-7xl" href={ExternalLinks.github.link} title={ExternalLinks.github.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faGithub} size="4x" />
			</a>

			<a className="mx-3 stylized-link text-7xl" href={ExternalLinks.playMinecraftMiceblocks.link} title={ExternalLinks.playMinecraftMiceblocks.label}
				rel="noreferrer" target="_blank">
				<Icon icon={faGlobeAmericas} size="4x" />
			</a>
		</div>


		{/* <ul className="mb-5">
			{
				ExternalLinks.miceblocks.map((value, key) => {
					return <li>
						<a key={key} href={value.link} className="stylized-link text-lg" rel="noreferrer" target="_blank">{value.label}</a>
					</li>
				})
			}
		</ul> */}

		<p className="mb-5">
			Miceblocks Resource Pack and Miceblocks website by Midlou.
		</p>

		<div className="mb-5 flex justify-center">
			<Link to={"/"}>
				<StaticImage
					className="block w-40 animate-pulse"
					placeholder="none"
					alt="Midlou logo"
					loading="eager"
					src="../../images/mid-icon-light-64x64-a1.svg"
				/>
			</Link>
		</div>
		<div>
			<small>
				<a className="stylized-link" href="https://www.minecraft.net/" target="_blank" rel="noreferrer">Minecraft</a> is copyright of <a className="stylized-link" href="https://www.mojang.com/" target="_blank" rel="noreferrer">Mojang AB</a> and is not afilliated with this project.
			</small>
			<p>Copyright © 2020 - {getCurrentYear()} Mice Blocks, all rights reserved.</p>
		</div>
	</div>
}

export default MiceblocksFooter;

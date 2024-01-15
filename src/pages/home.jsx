import { useState } from 'react'

import MidIconLight from "../assets/icons/mid-icon-light-1.svg";

// components
import MainLayout from '../components/layouts/main-layout';

// constants
import { PROFILE_ITEMS } from '../constants/profiles';

function PageContent() {
	return <div className={`flex justify-center container mx-auto py-3`}>
		<div className="px-5 text-justify md:max-w-3xl">

			<div className="flex justify-center container mx-auto py-3">
				<img src={MidIconLight} className="block w-1/4" alt="Midlou logo" />
			</div>

			<p className="text-justify mb-6 mt-3 md:mt-5 text-base sm:text-lg md:text-xl">
				Software engineer; Programmer <small>(naturally)</small>;
				3D modeler and 3D printing;
				level designer; audio, video and image creator/editor;
				"<a href="https://www.urbandictionary.com/define.php?term=Gambiarra" className="stylized-link" target={"_blank"} rel={"noreferrer"}><i>Gambiarra</i></a>" professional.
				I speak Brazilian Portuguese and English.
			</p>
			
			{
				PROFILE_ITEMS.map((item, index) => {
					return <a href={item.link} key={item?.value || index} target={"_blank"} rel={"noreferrer"} tabIndex={0}>
						<div className="sm:text-lg md:text-xl stylized-link px-6 py-2 w-full border-l-4 cursor-pointer default-focus-light hover:bg-slate-700 hover:border-blue-500 border-gray-700" >
							{item.label}
						</div>
					</a>
				})
			}
		</div>
	</div>
}

const PageHome = () => <MainLayout title={"Home"} Component={<PageContent />} />;

export default PageHome

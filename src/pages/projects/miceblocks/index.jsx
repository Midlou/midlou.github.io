import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import If from "@components/conditionals/if";
import Modal from "@components/modals/modal";
import DonateButton from "@components/buttons/donateButton";
import ContainerGrid from "@components/containers/container-grid";

import MiceblocksLayout from "@miceblocksComponents/layouts/miceblocks-main";
import MiceblocksDownloadBtn from "@miceblocksComponents/buttons/miceblocks-download-btn";

const PageContent = () => {
	let [isDownloadModalOpen, setDownloadModalOpen] = useState(false);
	let [downloadModalCountdown, setDownloadModalCountdown] = useState(5);

	useEffect(() => {
		if (isDownloadModalOpen) {
			downloadModalCountdown > 0 && setTimeout(() => setDownloadModalCountdown(downloadModalCountdown - 1), 1000);
		}
	}, [isDownloadModalOpen, downloadModalCountdown]);

	return <ContainerGrid>
		<Modal isOpen={isDownloadModalOpen} setIsOpen={setDownloadModalOpen} title={"Hope you enjoy!"}>
			<p className="text-2xl">
				Consider supporting my work. <b>One dollar</b> helps a lot. Thank you!
			</p>
			<div className="mt-10 flex justify-center">
				<DonateButton large={true} />
			</div>

			<If render={downloadModalCountdown !== 0} body={() => {
				return <div className="mt-10 flex justify-center">
					<span className="text-6xl animate-pulse drop-shadow-lg">{downloadModalCountdown}</span>
				</div>;
			}} />

			<If render={downloadModalCountdown === 0} body={() => {
				return <div className="mt-10">
					<MiceblocksDownloadBtn
						label={"Download"}
						hyperlink={"/downloads/Miceblocks-vA-12-2.zip"}
						className="w-full" />
				</div>
			}} />
		</Modal>

		<div className="flex justify-center container mx-auto py-3">
			<StaticImage
				className="block"
				placeholder="none"
				alt="Miceblocks text logo"
				loading="eager"
				src="./images/mice-text-1024x256.png"
			/>
		</div>

		<div className="mt-10 flex justify-center">
			<MiceblocksDownloadBtn
				label={"Download last version"}
				onClick={() => setDownloadModalOpen(true)}
				className="md:w-full lg:w-2/5"
			/>
		</div>
	</ContainerGrid>;
}

const Layout = () => <MiceblocksLayout title={"Miceblocks"} Component={<PageContent />} />;
export default Layout;

import * as React from "react"

import MainLayout from '@components/layouts/main';
import DoomFire from '@components/misc/doom-fire';
import ContainerFlex from "@components/containers/container-flex";

const PageContent = () => <ContainerFlex>
	<DoomFire />
</ContainerFlex>

const Layout = () => <MainLayout title={"Doom"} Component={<PageContent />} />;
export default Layout;

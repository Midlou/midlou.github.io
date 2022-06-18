import * as React from "react"

import Input from '@components/inputs/input';
import Panel from '@components/panels/panel';
import Button from '@components/buttons/button';
import DividerLabel from '@components/dividers/divider-label';

import MainLayout from '@components/layouts/main';
import ContainerFlex from "@components/containers/container-flex";
import DoomFireController from "@controllers/doom-fire/doom-fire.controller";

import ExternalLinks from "@content/external-links.json";

const PageContent = () => {
	const {
		canvasRef,
		updateRate,
		fireWidth,
		fireHeight,
		windRandomness,
		decayRandomness,
		scaleMultiplier,
		incandescentAir,
		selectedUpdateRate,
		FIRE_COLORS_PALETTE,
		selectedFireSourceIntensity,
		setFireWidth,
		setFireHeight,
		toggleInterval,
		setWindRandomness,
		setScaleMultiplier,
		setDecayRandomness,
		setIncandescentAir,
		setSelectedUpdateRate,
		setSelectedFireSourceIntensity,
	} = DoomFireController();

	return <ContainerFlex>
		<Panel className="bg-gray-800">
			<div>
				<DividerLabel label="Options" />

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<Button
						label={"Toggle"}
						onClick={() => toggleInterval()}
						toggle={updateRate !== 0}
						className={'w-full'}
					/>
					<Button
						label={"Incandescent air"}
						onClick={() => setIncandescentAir(!incandescentAir)}
						toggle={incandescentAir}
						className={'w-full'}
					/>
				</div>

			</div>

			<div>
				<DividerLabel label="Doom fire" />

				<div className="flex items-center justify-center">
					<canvas ref={canvasRef} width={fireWidth * scaleMultiplier} height={fireHeight * scaleMultiplier} className="canvas-crisp-pixels w-full" />
				</div>
			</div>

			<div>

				<div className="col-span-1">
					<DividerLabel label="Parameters" />
				</div>

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<div>
						<Input
							setState={setSelectedFireSourceIntensity}
							value={selectedFireSourceIntensity}
							type='range'
							placeholder='Fire source intensity'
							label={'Fire source intensity: ' + selectedFireSourceIntensity}
							min={0}
							max={FIRE_COLORS_PALETTE.length - 1}
						/>
					</div>
					<div>
						<Input
							setState={setScaleMultiplier}
							value={scaleMultiplier}
							type='number'
							placeholder='Scale Multiplier'
							label='Scale Multiplier'
						/>
					</div>
					<div>
						<Input
							setState={setFireWidth}
							value={fireWidth}
							type='number'
							placeholder='Width'
							label='Width'
						/>
					</div>
					<div>
						<Input
							setState={setFireHeight}
							value={fireHeight}
							type='number'
							placeholder='Height'
							label='Height'
						/>
					</div>
					<div>
						<Input
							setState={setSelectedUpdateRate}
							value={selectedUpdateRate}
							type='number'
							placeholder='Update rate'
							label='Update rate'
						/>
					</div>
					<div>
						<Input
							setState={setDecayRandomness}
							value={decayRandomness}
							type='number'
							placeholder='Decay'
							label='Decay'
						/>
					</div>
					<div>
						<Input
							setState={setWindRandomness}
							value={windRandomness}
							type='number'
							placeholder='Wind randomness'
							label='Wind randomness'
						/>
					</div>
				</div>

			</div>

			<div>
				<DividerLabel label="Info" />
				<b>Inspired by:</b>
				{
					ExternalLinks.doomInspirations.map((value, key) => {
						return <div key={key}>
							<a className="stylized-link" href={value.link} rel="noreferrer" target="_blank">{value.label}</a>
						</div>
					})
				}
			</div>

		</Panel>
	</ContainerFlex>
}

const Layout = () => <MainLayout title={"Doom"} Component={<PageContent />} />;
export default Layout;

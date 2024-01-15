export const PARTICLE_OPTIONS = {
	fullScreen: {
		enable: true,
		zIndex: -10
	},
	background: {
		image: "url('/miceblocks-background-1920x1080.png')",
		position: 'top',
		size: 'cover',
		repeat: 'no-repeat'
	},
	fpsLimit: 30,
	particles: {
		number: { value: 120, density: { enable: true, valueArea: 800 } },
		color: { value: "#fff" },
		shape: {
			type: "edge",
		},
		opacity: {
			animation: {
				enable: true,
				minimumValue: 0.05,
				speed: 0.25,
				sync: false
			},
			random: {
				enable: true,
				minimumValue: 0.05
			},
			value: { min: 0.25, max: 1 }
		},
		size: {
			value: { min: 1, max: 5 }
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: "none",
			random: true,
			straight: false,
			outMode: "out",
			bounce: false,
		}
	},
	interactivity: {
		detectOn: "canvas",
		events: {
			onClick: { enable: false, mode: "repulse" },
		},
	},
	retinaDetect: true
}

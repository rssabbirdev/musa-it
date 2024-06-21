import Particles, { initParticlesEngine } from '@tsparticles/react';
import manImage from '../../assets/man-hold-a-phone.png';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import LogoSpinner from '../../components/LogoSpinner';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import HomeIcons from './HomeIcons';

export default function Home() {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};
	const options = useMemo(
		() => ({
			autoPlay: true,
			background: {
				color: {
					value: '#000000',
				},
				image: '',
				position: '',
				repeat: '',
				size: '',
				opacity: 0,
			},
			backgroundMask: {
				composite: 'destination-out',
				cover: {
					color: {
						value: '#fff',
					},
					opacity: 1,
				},
				enable: false,
			},
			clear: true,
			defaultThemes: {},
			delay: 0.5,
			fullScreen: {
				enable: true,
				zIndex: 0,
			},
			detectRetina: true,
			duration: 0,
			fpsLimit: 120,
			interactivity: {
				detectsOn: 'window',
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onDiv: {
						selectors: {},
						enable: false,
						mode: {},
						type: 'circle',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
						parallax: {
							enable: true,
							force: 4,
							smooth: 10,
						},
					},
					resize: {
						delay: 0.5,
						enable: true,
					},
				},
				modes: {
					trail: {
						delay: 1,
						pauseOnStop: false,
						quantity: 1,
					},
					attract: {
						distance: 200,
						duration: 0.4,
						easing: 'ease-out-quad',
						factor: 1,
						maxSpeed: 50,
						speed: 1,
					},
					bounce: {
						distance: 200,
					},
					bubble: {
						distance: 200,
						duration: 0.4,
						mix: false,
						divs: {
							distance: 200,
							duration: 0.4,
							mix: false,
							selectors: {},
						},
					},
					connect: {
						distance: 80,
						links: {
							opacity: 0.5,
						},
						radius: 60,
					},
					grab: {
						distance: 100,
						links: {
							blink: false,
							consent: false,
							opacity: 1,
						},
					},
					push: {
						default: true,
						groups: [],
						quantity: 4,
					},
					remove: {
						quantity: 2,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: 'ease-out-quad',
						divs: {
							distance: 200,
							duration: 0.4,
							factor: 100,
							speed: 1,
							maxSpeed: 50,
							easing: 'ease-out-quad',
							selectors: {},
						},
					},
					slow: {
						factor: 3,
						radius: 200,
					},
					light: {
						area: {
							gradient: {
								start: {
									value: '#ffffff',
								},
								stop: {
									value: '#000000',
								},
							},
							radius: 1000,
						},
						shadow: {
							color: {
								value: '#000000',
							},
							length: 2000,
						},
					},
				},
			},
			manualParticles: [],
			particles: {
				bounce: {
					horizontal: {
						value: 1,
					},
					vertical: {
						value: 1,
					},
				},
				collisions: {
					absorb: {
						speed: 2,
					},
					bounce: {
						horizontal: {
							value: 1,
						},
						vertical: {
							value: 1,
						},
					},
					enable: false,
					maxSpeed: 50,
					mode: 'bounce',
					overlap: {
						enable: true,
						retries: 0,
					},
				},
				color: {
					value: '#ff0000',
					animation: {
						h: {
							count: 0,
							enable: true,
							speed: 20,
							decay: 0,
							delay: 0,
							sync: true,
							offset: 0,
						},
						s: {
							count: 0,
							enable: false,
							speed: 1,
							decay: 0,
							delay: 0,
							sync: true,
							offset: 0,
						},
						l: {
							count: 0,
							enable: false,
							speed: 1,
							decay: 0,
							delay: 0,
							sync: true,
							offset: 0,
						},
					},
				},
				effect: {
					close: true,
					fill: true,
					options: {},
					type: {},
				},
				groups: [],
				move: {
					angle: {
						offset: 0,
						value: 90,
					},
					attract: {
						distance: 200,
						enable: false,
						rotate: {
							x: 3000,
							y: 3000,
						},
					},
					center: {
						x: 50,
						y: 50,
						mode: 'percent',
						radius: 0,
					},
					decay: 0,
					distance: {},
					direction: 'none',
					drift: 0,
					enable: true,
					gravity: {
						acceleration: 9.81,
						enable: false,
						inverse: false,
						maxSpeed: 50,
					},
					path: {
						clamp: true,
						delay: {
							value: 0,
						},
						enable: false,
						options: {},
					},
					outModes: {
						default: 'out',
						bottom: 'out',
						left: 'out',
						right: 'out',
						top: 'out',
					},
					random: false,
					size: false,
					speed: 3,
					spin: {
						acceleration: 0,
						enable: false,
					},
					straight: false,
					trail: {
						enable: false,
						length: 10,
						fill: {},
					},
					vibrate: false,
					warp: false,
				},
				number: {
					density: {
						enable: true,
						width: 1920,
						height: 1080,
					},
					limit: {
						mode: 'delete',
						value: 0,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
					animation: {
						count: 0,
						enable: false,
						speed: 2,
						decay: 0,
						delay: 0,
						sync: false,
						mode: 'auto',
						startValue: 'random',
						destroy: 'none',
					},
				},
				reduceDuplicates: false,
				shadow: {
					blur: 0,
					color: {
						value: '#000',
					},
					enable: false,
					offset: {
						x: 0,
						y: 0,
					},
				},
				shape: {
					close: true,
					fill: true,
					options: {},
					type: 'circle',
				},
				size: {
					value: {
						min: 1,
						max: 3,
					},
					animation: {
						count: 0,
						enable: false,
						speed: 5,
						decay: 0,
						delay: 0,
						sync: false,
						mode: 'auto',
						startValue: 'random',
						destroy: 'none',
					},
				},
				stroke: {
					width: 0,
				},
				zIndex: {
					value: 0,
					opacityRate: 1,
					sizeRate: 1,
					velocityRate: 1,
				},
				destroy: {
					bounds: {},
					mode: 'none',
					split: {
						count: 1,
						factor: {
							value: 3,
						},
						rate: {
							value: {
								min: 4,
								max: 9,
							},
						},
						sizeOffset: true,
						particles: {},
					},
				},
				roll: {
					darken: {
						enable: false,
						value: 0,
					},
					enable: false,
					enlighten: {
						enable: false,
						value: 0,
					},
					mode: 'vertical',
					speed: 25,
				},
				tilt: {
					value: 0,
					animation: {
						enable: false,
						speed: 0,
						decay: 0,
						sync: false,
					},
					direction: 'clockwise',
					enable: false,
				},
				twinkle: {
					lines: {
						enable: false,
						frequency: 0.05,
						opacity: 1,
					},
					particles: {
						enable: false,
						frequency: 0.05,
						opacity: 1,
					},
				},
				wobble: {
					distance: 5,
					enable: false,
					speed: {
						angle: 50,
						move: 10,
					},
				},
				life: {
					count: 0,
					delay: {
						value: 0,
						sync: false,
					},
					duration: {
						value: 0,
						sync: false,
					},
				},
				rotate: {
					value: 0,
					animation: {
						enable: false,
						speed: 0,
						decay: 0,
						sync: false,
					},
					direction: 'clockwise',
					path: false,
				},
				orbit: {
					animation: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: false,
					},
					enable: false,
					opacity: 1,
					rotation: {
						value: 45,
					},
					width: 1,
				},
				links: {
					blink: false,
					color: {
						value: '#ffffff',
					},
					consent: false,
					distance: 150,
					enable: true,
					frequency: 1,
					opacity: 0.4,
					shadow: {
						blur: 5,
						color: {
							value: '#000',
						},
						enable: false,
					},
					triangles: {
						enable: false,
						frequency: 1,
					},
					width: 1,
					warp: false,
				},
				repulse: {
					value: 0,
					enabled: false,
					distance: 1,
					duration: 1,
					factor: 1,
					speed: 1,
				},
			},
			pauseOnBlur: true,
			pauseOnOutsideViewport: true,
			responsive: [],
			smooth: false,
			style: {},
			themes: [],
			zLayers: 100,
			name: 'Basic',
			motion: {
				disable: false,
				reduce: {
					factor: 4,
					value: true,
				},
			},
		}),
		[]
	);

	if (!init) {
		return <LogoSpinner />;
	}
	return (
		<div className='border-none pb-36 md:pb-8'>
			<Particles
				id='tsparticles'
				particlesLoaded={particlesLoaded}
				options={options}
			/>
			<div className='flex justify-between ml-0 p-5 md:ml-7 select-none flex-col md:flex-row'>
				<div className='w-full md:w-1/2 mt-32 leading-7 flex flex-col gap-5'>
					<h1 className='text-7xl'>MUSE-IT</h1>
					<p className='text-justify'>
						Welcome to Muse-it, your gateway to exploring and
						visualizing your Reddit music data. Dive into insightful
						analyses and seamlessly download CSV files for research
						purposes.
					</p>
				</div>
				<div className=''>
					<div className='absolute hidden md:block'>
						<HomeIcons />
					</div>
					<div className='relative -bottom-[100px] md:left-5 hidden md:block'>
						<img
							src={manImage}
							width={283}
							alt='Man Holding a Phone'
						/>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center static md:relative bottom-20'>
				{/* <div className='bg-white w-[300px] text-black flex justify-between items-center ml-20 px-4 py-3 rounded-full'>
					<CiSearch className='text-3xl w-2/12' />
					<input
						type='text'
						placeholder='Search On Reddit'
						className='bg-transparent outline-none w-10/12 px-2 py-1'
					/>
				</div> */}
				<Link to={'/search'}>
					<div
						className={`mt-10 md:mt-0 flex justify-center items-center gap-1 bg-white text-black px-5 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#546082] hover:cursor-pointer`}
					>
						<CiSearch className={'text-3xl'} />
						<span className='text-sm'>{'Search Reddit'}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

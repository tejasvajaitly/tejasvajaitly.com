import Link from "next/link";
import Image from "next/image";

const mocha = {
	name: "Mocha",
	description:
		"Find your most listened songs and artists on Spotify. I built this project to familiarise myself with Next.js 13 and React Server components and their different rendering strategies. Built using Next.js 13 and deployed on Vercel.",
	imagePath: "/mocha.png",
	liveLink: "https://mocha-seven.vercel.app/",
	github: "https://github.com/tejasvajaitly/mocha",
};

const hazelnut = {
	name: "Hazelnut",
	description:
		"Never lose your favorite Spotify playlists again! Clone any playlist with Hazelnut and enjoy the music you love on your terms. Don't let modifications or deletions by the original owner affect your experience. Start cloning now!",
	imagePath: "/hazelnut.png",
	liveLink: "https://hazelnut-pi.vercel.app/",
	github: "https://github.com/tejasvajaitly/hazelnut",
};

const crwnClothing = {
	name: "Crwn Clothing",
	description:
		"It's a clothing store. I built this while learning redux toolkit, redux sagas and typescript. It uses Firestore NoSQL as the backend and Firebase for authentication. Deployed on Netlify",
	imagePath: "/crwnClothing.png",
	liveLink: "https://darling-kitten-1251aa.netlify.app/",
	github: "https://github.com/tejasvajaitly/crwn-clothing",
};

const chirp = {
	name: "Chirp",
	description:
		"It's a twitter clone but with a twist, you can only tweet in emoji's. It uses create t3 app, PlanetScale SQL, prisma for the database schema, React and typescript on the frontend and Node for the backend.",
	imagePath: "/chirp.png",
	liveLink: "https://chirp-six-flame.vercel.app/",
	github: "https://github.com/tejasvajaitly/chirp",
};

const phoneBook = {
	name: "Phone Book",
	description:
		"It's a web based phone book. I built this while learning the new React Router DOM V6. Uses Vite to bootstrap the React project and deployed on github pages.",
	imagePath: "/phoneBook.png",
	liveLink: "https://tejasvajaitly.github.io/react-router/contacts/5zkc0nn",
	github: "https://github.com/tejasvajaitly/react-router",
};

const Projects = () => {
	return (
		<div className='flex flex-col gap-28'>
			<section>
				<h1 className='text-5xl font-semibold text-primary dark:text-primaryDark'>
					Personal Projects
				</h1>
				<p className='mt-10 text-xl leading-loose text-text dark:text-textDark'>
					I&apos;ve been working on some personal projects to explore different
					libraries and browser APIs. I enjoy experimenting with the latest
					tools and publishing my creations on{" "}
					<Link
						target='_blank'
						href='https://github.com/tejasvajaitly'
						className='text-[#47a3f3] hover:underline'
					>
						my GitHub account
					</Link>
					. It serves as a personal record and helps others looking for
					examples.
				</p>
			</section>
			<section className='grid  grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] place-items-center gap-8'>
				<ProjectCard projectInfo={mocha} />
				<ProjectCard projectInfo={hazelnut} />
				<ProjectCard projectInfo={crwnClothing} />
				<ProjectCard projectInfo={chirp} />
				<ProjectCard projectInfo={phoneBook} />
			</section>
		</div>
	);
};

export default Projects;

type ProjectCardProps = {
	projectInfo: {
		name: string;
		description: string;
		imagePath: string;
		liveLink: string;
		github: string;
	};
};

const ProjectCard = ({ projectInfo }: ProjectCardProps) => {
	return (
		<div className='max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
			<Link target='_blank' href={projectInfo.liveLink}>
				<Image
					className='rounded-t-lg'
					src={projectInfo.imagePath}
					alt=''
					priority={true}
					width={450}
					height={450}
				/>
			</Link>
			<div className='p-5'>
				<Link target='_blank' href={projectInfo.liveLink}>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{projectInfo.name}
					</h5>
				</Link>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{projectInfo.description}
				</p>
				<div className='flex flex-row gap-4'>
					<Link
						target='_blank'
						href={projectInfo.liveLink}
						className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Live link
					</Link>
					<Link
						target='_blank'
						href={projectInfo.github}
						className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						GitHub link
					</Link>
				</div>
			</div>
		</div>
	);
};

import Link from "next/link";
import Hr from "@/app/components/Hr";

export default function Home() {
	return (
		<main className='flex flex-col gap-36'>
			<section>
				<h1 className='text-6xl font-semibold text-primary dark:text-primaryDark'>
					Tejasva Jaitly
				</h1>
				<h2 className='mt-10 text-3xl font-semibold text-primary dark:text-primaryDark'>
					Crafting web experiences, all{" "}
					<Link
						target='_blank'
						href='https://nodejs.org/en'
						className='cursor-pointer text-[#84ba64] hover:underline dark:text-[#1e2f2c]'
					>
						Node
					</Link>{" "}
					&{" "}
					<Link
						target='_blank'
						href='https://react.dev/'
						className='cursor-pointer text-[#149eca] hover:underline'
					>
						React
					</Link>
					.
				</h2>
			</section>
			<LatestProjects />
		</main>
	);
}

const projects = [
	{
		github: "https://github.com/tejasvajaitly/mocha",
		liveLink: "https://mocha-seven.vercel.app/",
		name: "Mocha",
	},
	{
		github: "https://github.com/tejasvajaitly/hazelnut",
		liveLink: "https://hazelnut-pi.vercel.app/",
		name: "Hazelnut",
	},
	{
		github: "https://github.com/tejasvajaitly/crwn-clothing",
		liveLink: "https://darling-kitten-1251aa.netlify.app/",
		name: "Crwn Clothing",
	},
	{
		github: "https://github.com/tejasvajaitly/chirp",
		liveLink: "https://chirp-six-flame.vercel.app/",
		name: "Chirp",
	},
];

const LatestProjects = () => {
	return (
		<section>
			<div className='flex flex-row items-center justify-between'>
				<h1 className='font-primary text-3xl text-primary dark:text-primaryDark'>
					Latest Projects
				</h1>
				<Link
					href='/projects'
					className='cursor-pointer text-xs font-extralight text-secondary transition ease-in-out hover:text-primary hover:underline dark:text-secondaryDark dark:hover:text-primaryDark sm:text-sm'
				>
					See all projects
				</Link>
			</div>
			<Hr />
			<div>
				{projects.map((project, idx) => (
					<div
						key={idx}
						className='my-10 flex flex-row items-center justify-start gap-4 text-2xl'
					>
						<Link
							className='text-text hover:underline dark:text-textDark'
							target='_blank'
							href={project.liveLink}
						>
							{project.name}
						</Link>
						<Link
							target='_blank'
							href={project.github}
							className='text-sm text-secondary hover:underline dark:text-secondaryDark'
						>
							(source code)
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default function Home() {
	return (
		<main>
			<div className='mt-36 mb-40'>
				<h1 className='text-black dark:text-white text-6xl font-semibold'>
					Tejasva Jaitly
				</h1>
				<h2 className='text-black dark:text-white text-3xl font-semibold mt-10'>
					Crafting web experiences, all{" "}
					<a
						target='_blank'
						href='https://nodejs.org/en'
						className='text-[#84ba64] dark:text-[#1e2f2c] hover:underline cursor-pointer'
					>
						Node
					</a>{" "}
					&{" "}
					<a
						target='_blank'
						href='https://react.dev/'
						className='text-[#149eca] hover:underline cursor-pointer'
					>
						React
					</a>
					.
				</h2>
			</div>
		</main>
	);
}

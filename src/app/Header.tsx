import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
	return (
		<header className='flex flex-col justify-between mb-4'>
			<div className='flex flex-row justify-between items-center'>
				<Link href='/' className='text-3xl cursor-pointer'>
					Home
				</Link>
				<ThemeSwitch />
			</div>
			<div className='flex flex-col justify-center items-start sm:flex-row sm:justify-between sm:items-center mt-10'>
				<nav>
					<Ul>
						<Li>
							<Link href='/about'>About</Link>
						</Li>
						<Li>
							<Link href='/projects'>Projects</Link>
						</Li>
					</Ul>
				</nav>
				<div>
					<Ul>
						<Li>
							<Link
								target='_blank'
								href='https://www.Linkedin.com/in/tejasvajaitly/'
							>
								LinkedIn
							</Link>
						</Li>
						<Li>
							<Link target='_blank' href='https://github.com/tejasvajaitly'>
								GitHub
							</Link>
						</Li>
						<Li>
							<Link target='_blank' href='https://twitter.com/neiljaitly7963'>
								Twittter
							</Link>
						</Li>
						<Li>
							<Link
								target='_blank'
								href='https://drive.google.com/file/d/1UuDqu46JtxungUqWYH64wIxKDrFXAzfn/view?usp=sharing'
							>
								Resume
							</Link>
						</Li>
					</Ul>
				</div>
			</div>
		</header>
	);
};

export default Header;

const Ul = ({ children }: { children: React.ReactNode }) => (
	<ul className='flex flex-row justify-evenly items-center gap-5'>
		{children}
	</ul>
);

const Li = ({ children }: { children: React.ReactNode }) => (
	<li className='cursor-pointer text-gray-500 font-Light hover:underLine hover:text-black dark:hover:text-white text-base sm:text-lg'>
		{children}
	</li>
);

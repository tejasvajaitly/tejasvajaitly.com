import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
	return (
		<header className='flex flex-col justify-between'>
			<div className='flex flex-row items-center justify-between'>
				<Link
					href='/'
					className='cursor-pointer text-3xl text-primary dark:text-primaryDark'
				>
					Home
				</Link>
				<ThemeSwitch />
			</div>
			<div className='mt-10 flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-between'>
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
								Twitter
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
	<ul className='flex flex-row items-center justify-evenly gap-5'>
		{children}
	</ul>
);

const Li = ({ children }: { children: React.ReactNode }) => (
	<li className='font-Light cursor-pointer text-base text-secondary transition ease-in-out hover:text-primary hover:underline dark:text-secondaryDark dark:hover:text-primaryDark sm:text-lg'>
		{children}
	</li>
);

import Link from "next/link";

const Footer = () => {
	return (
		<footer className='flex flex-row items-center justify-between'>
			<span className='text-secondary dark:text-secondaryDark'>
				{`© ${new Date().getFullYear()} by Tejasva. All rights reserved.`}
			</span>
			<Link
				target='_blank'
				href='https://github.com/tejasvajaitly/portfolio'
				className='text-secondary hover:underline dark:text-secondaryDark'
			>
				Source on Github
			</Link>
		</footer>
	);
};

export default Footer;

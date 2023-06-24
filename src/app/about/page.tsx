import Link from "next/link";
import Image from "next/image";
import Hr from "@/app/components/Hr";

const About = () => {
	return (
		<div className='flex flex-col gap-28'>
			<section>
				<h1 className='text-5xl font-semibold text-primary dark:text-primaryDark'>
					Hi!
				</h1>
				<p className='mt-10 text-xl leading-loose text-text dark:text-textDark'>
					Welcome to my personal website! I&apos;m Tejasva, but you can call me
					Neil. I have a deep passion for web development and love staying on
					the cutting edge of technology. Currently, I am immersed in learning
					React Server Components and Next.js 13, exploring their potential to
					enhance web experiences.
				</p>
			</section>
			<Experiences />
		</div>
	);
};

export default About;

const AxisBankPoint = [
	"Working for Digital Banking and Transformation (Axis Bank), building powerful technological solutions and platforms, including neo and digital products for millennials and Gen Z",
];

const HelpNowPoint = [
	"Built the application suite for India's largest & most reliable Ambulance network service. The application ecosystem cover's the call Center module, Admin Console, Driver Mobile app, & Ambulance Audit app.",
];

const Experiences = () => {
	return (
		<section>
			<div>
				<h1 className='text-2xl text-primary dark:text-primaryDark'>
					Experiences
				</h1>
			</div>
			<Hr />
			<ExperincePoint
				companyName='Axis Bank'
				position='Software Engineer'
				bulletPoints={AxisBankPoint}
				logoPath='/axis.svg'
			/>
			<ExperincePoint
				companyName='HelpNow, YC 20'
				position='Founding Engineer'
				bulletPoints={HelpNowPoint}
				logoPath='/yc.svg'
			/>
		</section>
	);
};

type ExperincePointProps = {
	companyName: string;
	position: string;
	bulletPoints: string[];
	logoPath: string;
};

const ExperincePoint = ({
	companyName,
	position,
	bulletPoints,
	logoPath,
}: ExperincePointProps) => {
	return (
		<div className='my-10'>
			<div className='flex flex-row items-center justify-start gap-4'>
				<div className='flex h-14 w-14 items-center justify-center rounded-lg bg-[#F9F1F0]'>
					<Image src={logoPath} alt='' priority={true} height={30} width={30} />
				</div>
				<div className='flex flex-col items-start justify-center'>
					<h3>{companyName}</h3>
					<h4 className='text-sm font-medium'>{position}</h4>
				</div>
			</div>

			<ul className='ml-20 mt-4 list-disc'>
				{bulletPoints.map((bullet, idx) => (
					<li key={idx}>{bullet}</li>
				))}
			</ul>
		</div>
	);
};

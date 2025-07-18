import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';
import image from '../images/matt-profile.jpg';

const HeroSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
		elements?.forEach((el) => observer.observe(el));

		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section
			id="home"
			ref={sectionRef}
			className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20"
		>
			<div
				className="absolute inset-0 opacity-30 dark:opacity-20"
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
				}}
			></div>
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="grid md:grid-cols-5 gap-8 items-center">
					<div className="md:col-span-3">
						<p className="text-blue-600 font-semibold mb-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100">
							Hello, I'm
						</p>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
							Matt Vogelsang
						</h1>
						<h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
							Full-Stack Engineer
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
							I'm a South-Floridian Full-Stack engineer thats specializes in
							React, JavaScript, and Node.js to build clean, high-performance
							web applications.
						</p>
						<div className="flex gap-4 mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-500">
							<a
								href="#projects"
								className="md:px-6 px-3 md:py-3 py-1 md:text-base text-sm flex justify-center items-center bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
							>
								View My Work
							</a>
							<a
								href="#contact"
								className="md:px-6 px-3 md:py-3 py-1 md:text-base border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
							>
								Contact Me
							</a>
						</div>
						<div className="flex gap-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
							<a
								href="https://github.com/MattVogelsang"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
								aria-label="GitHub"
							>
								<Github size={24} />
							</a>
							<a
								href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
					<div className="md:col-span-2 md:pb-0 pb-10 order-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						<div className="relative md:max-w-none max-w-xs mx-auto">
							<div className="absolute inset-0 bg-blue-600 rounded-full transform translate-x-4 translate-y-4 opacity-20"></div>
							<img
								src={image}
								alt="Matt Vogelsang - Full-Stack Engineer"
								className="rounded-full w-full h-auto shadow-2xl border-4 border-white dark:border-gray-800 relative z-10"
							/>
						</div>
					</div>
				</div>
			</div>
			<a
				href="#about"
				className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors animate-bounce"
				aria-label="Scroll down"
			>
				<ArrowDownCircle size={36} />
			</a>
		</section>
	);
};

export default HeroSection;

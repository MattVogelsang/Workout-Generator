import React, { useEffect, useRef } from 'react';
import { Code, Github, Globe, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
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
			id="about"
			ref={sectionRef}
			className="py-20 bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="md:text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						About Me
					</h2>
					<div className="w-20 h-1 bg-blue-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
						I'm a passionate Full-Stack engineer that specializes in React to
						create exceptional digital experiences that combine beautiful design
						with clean, efficient code.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
						<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
							My journey in web development began when I discovered my passion
							for creating interactive interfaces that solve real-world
							problems.
						</p>
						<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
							I specialize in modern JavaScript frameworks, particularly React,
							and have expertise in state management, Full-Stack architecture,
							and performance optimization. I'm constantly exploring new
							technologies and techniques to enhance my skills and deliver
							better solutions.
						</p>
						<p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
							With a background in aviation mechanics and hands-on training from
							the University of Miami’s full-stack coding bootcamp, I bring a
							unique blend of technical precision and real-world problem-solving
							to software development.
						</p>
						<a
							href="#contact"
							className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
						>
							Let's Connect
						</a>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:transform hover:-translate-y-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
							<div className="bg-blue-600/10 p-4 rounded-full inline-block mb-4">
								<Code
									className="text-blue-600"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Clean Code
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								I write maintainable, well-documented code that follows best
								practices and industry standards.
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:transform hover:-translate-y-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-500">
							<div className="bg-blue-600/10 p-4 rounded-full inline-block mb-4">
								<Zap
									className="text-blue-600"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Performance
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								I optimize applications for speed and efficiency, ensuring
								smooth user experiences.
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:transform hover:-translate-y-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
							<div className="bg-blue-600/10 p-4 rounded-full inline-block mb-4">
								<Globe
									className="text-blue-600"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Responsive Design
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								I create interfaces that look and work great on all devices,
								from mobile to desktop.
							</p>
						</div>

						<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:transform hover:-translate-y-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-700">
							<div className="bg-blue-600/10 p-4 rounded-full inline-block mb-4">
								<Github
									className="text-blue-600"
									size={28}
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Collaboration
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								I work effectively in teams, using version control and agile
								methodologies for efficient delivery.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

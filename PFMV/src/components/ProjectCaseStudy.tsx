import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyProps {
	project: Project;
	onBack: () => void;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
	project,
	onBack
}) => {
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
		<div
			ref={sectionRef}
			className="min-h-screen bg-white dark:bg-gray-900 pt-20"
		>
			<div className="container mx-auto px-4 max-w-6xl py-12">
				<button
					onClick={onBack}
					className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700"
				>
					<ArrowLeft
						size={20}
						className="mr-2"
					/>
					Back to Projects
				</button>

				<div className="grid lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
							{project.title}
						</h1>

						<div className="mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100">
							<img
								src={project.imageUrl}
								alt={project.title}
								className="w-full h-[400px] object-cover rounded-lg shadow-lg"
							/>
						</div>

						<div className="flex flex-wrap gap-3 mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="prose dark:prose-invert max-w-none mb-12">
							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									Project Overview
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
									{project.description}
								</p>
							</div>

							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									The Challenge
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
									{project.challenge}
								</p>
							</div>

							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-500">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									The Solution
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
									{project.solution}
								</p>
							</div>

							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									Project Goals
								</h2>
								<ul className="list-none space-y-3">
									{project.goals.map((goal, index) => (
										<li
											key={index}
											className="flex items-center text-gray-600 dark:text-gray-400"
										>
											<span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
											{goal}
										</li>
									))}
								</ul>
							</div>

							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-700">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									Development Process
								</h2>
								<div className="space-y-6">
									{project.process.map((step, index) => (
										<div
											key={index}
											className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
										>
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
												{step.title}
											</h3>
											<p className="text-gray-600 dark:text-gray-400">
												{step.description}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="mb-12 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-800">
								<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
									The Outcome
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-6">
									{project.outcome}
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-span-1">
						<div className="sticky top-24 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
								Project Details
							</h3>

							<div className="space-y-6">
								<div>
									<h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
										Category
									</h4>
									<p className="text-gray-900 dark:text-white capitalize">
										{project.category}
									</p>
								</div>

								<div>
									<h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
										Technologies Used
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="space-y-3">
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
									>
										<ExternalLink
											size={18}
											className="mr-2"
										/>
										View Live Demo
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCaseStudy;

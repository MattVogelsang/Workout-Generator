import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCaseStudy from './ProjectCaseStudy';
import { Project } from '../types';

const ProjectsSection: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
		elements?.forEach((el) => {
			el.classList.remove('animate-fade-in');
			el.classList.add('opacity-0', 'translate-y-4');
			observer.observe(el);
		});

		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, [selectedProject]);

	if (selectedProject) {
		return (
			<ProjectCaseStudy
				project={selectedProject}
				onBack={() => setSelectedProject(null)}
			/>
		);
	}

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="py-20 bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="md:text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-blue-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
						Here are some of my recent projects that showcase my skills and
						expertise in Full-Stack development.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className={`group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-300 delay-${
								(index + 4) * 100
							}`}
						>
							<div className="relative overflow-hidden h-56">
								<img
									src={project.imageUrl}
									alt={project.title}
									className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-blue-600 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
										aria-label="View live demo"
									>
										<ExternalLink size={20} />
									</a>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>
								<button
									onClick={() => setSelectedProject(project)}
									className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
								>
									View Case Study →
								</button>
							</div>
						</div>
					))}
				</div>

				{projects.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-600 dark:text-gray-400">
							No projects found in this category.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;

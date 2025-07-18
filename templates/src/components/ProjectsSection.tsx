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
			className="py-20 bg-gray-800 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
				}}
			></div>

			<div className="container mx-auto px-4 max-w-6xl relative z-10">
				<div className="md:text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
						Here are some of my recent projects that showcase my skills and
						expertise in Full-Stack development.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className={`group glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-2xl animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-500 delay-${
								(index + 4) * 100
							} hover:scale-105 hover:-translate-y-2`}
						>
							<div className="relative overflow-hidden h-56">
								<img
									src={project.imageUrl}
									alt={project.title}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								
								{/* Action Buttons */}
								<div className="absolute inset-0 bg-blue-600 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
										aria-label="View live demo"
									>
										<ExternalLink size={20} />
									</a>
								</div>
								
								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
										{project.category}
									</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-blue-100 mb-4 line-clamp-3 group-hover:text-blue-50 transition-colors duration-300">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm text-blue-200 text-xs rounded-full border border-blue-400/30"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>
								<button
									onClick={() => setSelectedProject(project)}
									className="text-blue-300 hover:text-white font-medium transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
								>
									View Case Study 
									<span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
								</button>
							</div>
						</div>
					))}
				</div>

				{projects.length === 0 && (
					<div className="text-center py-12">
						<p className="text-blue-100">
							No projects found in this category.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;

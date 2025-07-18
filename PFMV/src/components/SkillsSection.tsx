import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';

const SkillsSection: React.FC = () => {
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
			id="skills"
			ref={sectionRef}
			className="py-20 bg-gray-50 dark:bg-gray-800"
		>
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="md:text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						Technical Skills
					</h2>
					<div className="w-20 h-1 bg-blue-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
						I've developed expertise in a range of technologies and tools
						throughout my career and University of Miami's rigorous coding
						bootcamp. I have gained hands-on experience in full-stack
						development, mastering technologies such as JavaScript, Node.js,
						Express.js, Sequelize ORM, and PostgreSQL.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{skillCategories.map((category, index) => (
						<div
							key={category.id}
							className={`animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-${
								(index + 3) * 100
							}`}
						>
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
								{category.name}
							</h3>
							<div className="space-y-6">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between mb-2">
											<span className="text-gray-700 dark:text-gray-300">
												{skill.name}
											</span>
											<span className="text-gray-600 dark:text-gray-400">
												{skill.proficiency}%
											</span>
										</div>
										<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
											<div
												className="h-full bg-blue-600 rounded-full relative"
												style={{ width: `${skill.proficiency}%` }}
											>
												<div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;

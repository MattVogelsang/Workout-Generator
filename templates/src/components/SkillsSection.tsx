import React, { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/skills';

const SkillsSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in');
						
						// Trigger skill bar animations when skills section is visible
						if (entry.target.id === 'skills') {
							setTimeout(() => {
								skillCategories.forEach(category => {
									category.skills.forEach(skill => {
										setTimeout(() => {
											setAnimatedSkills(prev => new Set([...prev, skill.name]));
										}, Math.random() * 1000); // Random delay for staggered animation
									});
								});
							}, 500);
						}
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
			className="py-20 gradient-bg relative overflow-hidden"
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
						Technical Skills
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
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
							className={`glass-effect rounded-xl p-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-${
								(index + 3) * 100
							} hover:scale-105 hover:-translate-y-2`}
						>
							<h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
								<span className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold mr-3">
									{category.name.charAt(0)}
								</span>
								{category.name}
							</h3>
							<div className="space-y-6">
								{category.skills.map((skill) => (
									<div key={skill.name} className="group">
										<div className="flex justify-between mb-3">
											<span className="text-blue-100 font-medium group-hover:text-white transition-colors duration-300">
												{skill.name}
											</span>
											<span className="text-blue-200 font-semibold">
												{skill.proficiency}%
											</span>
										</div>
										<div className="h-3 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
											<div
												className={`h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full relative transition-all duration-1500 ease-out ${
													animatedSkills.has(skill.name) ? 'animate-pulse-slow' : ''
												}`}
												style={{ 
													width: animatedSkills.has(skill.name) ? `${skill.proficiency}%` : '0%'
												}}
											>
												<div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
												{/* Glow effect */}
												<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-sm opacity-50"></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Additional Skills Summary */}
				<div className="mt-16 text-center animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-800">
					<div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
						<h3 className="text-2xl font-semibold text-white mb-4">
							What I Bring to the Table
						</h3>
						<div className="grid md:grid-cols-3 gap-6 text-blue-100">
							<div className="text-center">
								<div className="text-3xl mb-2">🚀</div>
								<h4 className="font-semibold text-white mb-2">Performance</h4>
								<p className="text-sm">Optimized applications with fast loading times and smooth interactions</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">🎨</div>
								<h4 className="font-semibold text-white mb-2">Design</h4>
								<p className="text-sm">Clean, modern UI/UX with responsive design principles</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">🔧</div>
								<h4 className="font-semibold text-white mb-2">Problem Solving</h4>
								<p className="text-sm">Analytical approach to complex technical challenges</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;

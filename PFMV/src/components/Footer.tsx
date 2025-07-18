import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<a
							href="#home"
							className="text-2xl font-bold"
						>
							<span className="text-blue-500">Matt</span>Vogelsang
						</a>
						<p className="text-gray-400 mt-2 max-w-md">
							Creating beautiful, functional, and accessible web experiences
							that solve real-world problems.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row md:w-auto sm:w-96 w-full gap-8 md:gap-16">
						<div>
							<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#home"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#projects"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Connect</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="https://github.com/MattVogelsang"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										href="mailto:vogelsangmatt@gmail.com"
										className="text-gray-400 hover:text-blue-500 transition-colors"
									>
										Email
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} Matt Vogelsang. All rights
						reserved.
					</p>
					<p className="text-gray-500 text-sm mt-4 md:mt-0">
						Designed and built with React & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

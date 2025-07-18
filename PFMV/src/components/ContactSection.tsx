import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
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
			id="contact"
			ref={sectionRef}
			className="py-20 bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="md:text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						Get In Touch
					</h2>
					<div className="w-20 h-1 bg-blue-600 md:mx-auto rounded-full mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100"></div>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
						Have a project in mind or want to discuss an opportunity? I'd love
						to hear from you. Feel free to reach out using the form below.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12">
					<div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
						<div className="bg-gray-50 dark:bg-gray-800 md:p-8 rounded-lg shadow-md h-full sm:w-fit mx-auto md:px-12 p-5">
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
								Contact Information
							</h3>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full md:mr-4 mr-2">
										<Mail
											className="text-blue-600"
											size={20}
										/>
									</div>
									<div>
										<p className="text-gray-600 dark:text-gray-400 font-medium">
											Email
										</p>
										<a
											href="mailto:vogelsangmatt@gmail.com"
											className="text-blue-600 hover:underline"
										>
											vogelsangmatt@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full md:mr-4 mr-2">
										<Phone
											className="text-blue-600"
											size={20}
										/>
									</div>
									<div>
										<p className="text-gray-600 dark:text-gray-400 font-medium">
											Phone
										</p>
										<a
											href="tel:9546688674"
											className="text-blue-600 hover:underline"
										>
											(954) 668-8674
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full md:mr-4 mr-2">
										<MapPin
											className="text-blue-600"
											size={20}
										/>
									</div>
									<div>
										<p className="text-gray-600 dark:text-gray-400 font-medium">
											Location
										</p>
										<p className="text-gray-800 dark:text-gray-200">
											Miami, Florida
										</p>
									</div>
								</div>
							</div>

							<div className="mt-12">
								<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
									Follow Me
								</h4>
								<div className="flex space-x-4">
									<a
										href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
										target="_blank"
										className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
										aria-label="LinkedIn"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
											<rect
												x="2"
												y="9"
												width="4"
												height="12"
											></rect>
											<circle
												cx="4"
												cy="4"
												r="2"
											></circle>
										</svg>
									</a>
									<a
										href="https://github.com/MattVogelsang"
										target="_blank"
										className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
										aria-label="GitHub"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;

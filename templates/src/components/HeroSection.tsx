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
			className="min-h-screen flex items-center justify-center relative gradient-bg overflow-hidden"
		>
			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-30 animate-floating" style={{ animationDelay: '0s' }}></div>
				<div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-20 animate-floating" style={{ animationDelay: '1s' }}></div>
				<div className="absolute bottom-40 left-40 w-3 h-3 bg-white rounded-full opacity-40 animate-floating" style={{ animationDelay: '2s' }}></div>
				<div className="absolute top-1/2 right-1/4 w-5 h-5 bg-white rounded-full opacity-25 animate-floating" style={{ animationDelay: '1.5s' }}></div>
				<div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-35 animate-floating" style={{ animationDelay: '0.5s' }}></div>
			</div>

			{/* Subtle Pattern Overlay */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
				}}
			></div>

			<div className="container mx-auto px-4 max-w-6xl relative z-10">
				<div className="grid md:grid-cols-5 gap-8 items-center">
					<div className="md:col-span-3">
						<p className="text-blue-200 font-semibold mb-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100">
							Hello, I'm
						</p>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
							Matt Vogelsang
						</h1>
						<h2 className="text-2xl md:text-3xl text-blue-100 mb-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
							Full-Stack Engineer
						</h2>
						<p className="text-lg text-blue-50 mb-8 max-w-2xl animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
							I'm a South-Floridian Full-Stack engineer that specializes in
							React, JavaScript, and Node.js to build clean, high-performance
							web applications.
						</p>
						<div className="flex gap-4 mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-500">
							<a
								href="#projects"
								className="md:px-6 px-3 md:py-3 py-1 md:text-base text-sm flex justify-center items-center bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
							>
								View My Work
							</a>
							<a
								href="#contact"
								className="md:px-6 px-3 md:py-3 py-1 md:text-base border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
							>
								Contact Me
							</a>
						</div>
						<div className="flex gap-6 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
							<a
								href="https://github.com/MattVogelsang"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-100 hover:text-white transition-colors transform hover:scale-110 duration-300"
								aria-label="GitHub"
							>
								<Github size={24} />
							</a>
							<a
								href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-100 hover:text-white transition-colors transform hover:scale-110 duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
					<div className="md:col-span-2 md:pb-0 pb-10 order-2 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
						<div className="relative md:max-w-none max-w-xs mx-auto">
							{/* Floating Profile Image with Enhanced Effects */}
							<div className="relative">
								{/* Glow Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
								
								{/* Glass Effect Border */}
								<div className="absolute inset-0 rounded-full glass-effect border-4 border-white border-opacity-30"></div>
								
								{/* Main Image */}
								<img
									src={image}
									alt="Matt Vogelsang - Full-Stack Engineer"
									className="rounded-full w-full h-auto shadow-2xl relative z-10 animate-floating"
									style={{ animationDelay: '0.5s' }}
								/>
								
								{/* Floating Elements Around Image */}
								<div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-floating" style={{ animationDelay: '1s' }}></div>
								<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-floating" style={{ animationDelay: '1.5s' }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Enhanced Scroll Down Button */}
			<a
				href="#about"
				className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-colors animate-bounce glass-effect rounded-full p-3 hover:scale-110 duration-300"
				aria-label="Scroll down"
			>
				<ArrowDownCircle size={36} />
			</a>
		</section>
	);
};

export default HeroSection;

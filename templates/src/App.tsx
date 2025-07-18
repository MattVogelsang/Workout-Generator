import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WeatherWidget from './components/WeatherWidget';
import MusicControl from './components/MusicControl';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);

	useEffect(() => {
		// Check user preference
		const isDarkMode =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		setDarkMode(isDarkMode);

		// Listen for changes in color scheme
		const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

		if (darkModeListener.addEventListener) {
			darkModeListener.addEventListener('change', handleChange);
			return () => darkModeListener.removeEventListener('change', handleChange);
		}
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const toggleMusic = () => {
		setIsMusicPlaying(!isMusicPlaying);
	};

	useEffect(() => {
		// Update document title
		document.title = 'Matt Vogelsang | Full-Stack Engineer';

		// Update body dark mode class
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	// Add CSS for enhanced animations
	useEffect(() => {
		const style = document.createElement('style');
		style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-scale-in {
        animation: scaleIn 0.8s ease-out forwards;
      }
      
      @keyframes floating {
        0%, 100% { 
          transform: translateY(0px); 
        }
        50% { 
          transform: translateY(-20px); 
        }
      }
      
      .animate-floating {
        animation: floating 3s ease-in-out infinite;
      }
      
      @keyframes pulse-slow {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
      
      .glass-effect {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .dark .glass-effect {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      .dark .gradient-bg {
        background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
      }
      
      .parallax-bg {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	// Intersection Observer for scroll animations
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-fade-in');
				}
			});
		}, observerOptions);

		// Observe all sections
		const sections = document.querySelectorAll('section');
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden">
				{/* Background Music */}
				<audio 
					id="background-music" 
					loop 
					src="/relaxing-background.mp3"
					preload="auto"
				/>
				
				{/* Weather Widget */}
				<WeatherWidget />
				
				{/* Music Control */}
				<MusicControl 
					isPlaying={isMusicPlaying} 
					onToggle={toggleMusic} 
				/>
				
				<Header
					darkMode={darkMode}
					toggleDarkMode={toggleDarkMode}
				/>
				<main>
					<HeroSection />
					<AboutSection />
					<SkillsSection />
					<ProjectsSection />
					<ContactSection />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;

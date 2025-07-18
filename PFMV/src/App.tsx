import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
	const [darkMode, setDarkMode] = useState(false);

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

	// Add CSS for animations
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
    `;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
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

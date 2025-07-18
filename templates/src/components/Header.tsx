import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const navItems: NavItem[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' }
];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
					: 'bg-transparent'
			} ${darkMode ? 'dark' : ''}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<a
					href="#home"
					className="text-2xl font-bold text-gray-900 dark:text-white"
				>
					<span className="text-blue-600">Matt</span>Vogelsang
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium"
						>
							{item.label}
						</a>
					))}
					<button
						onClick={toggleDarkMode}
						className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						aria-label={
							darkMode ? 'Switch to light mode' : 'Switch to dark mode'
						}
					>
						{darkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</nav>

				{/* Mobile Navigation Button */}
				<div className="flex items-center md:hidden space-x-4">
					<button
						onClick={toggleDarkMode}
						className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						aria-label={
							darkMode ? 'Switch to light mode' : 'Switch to dark mode'
						}
					>
						{darkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<button
						onClick={toggleMenu}
						className="text-gray-800 dark:text-gray-200 focus:outline-none"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={closeMenu}
									className="py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;

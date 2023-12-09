import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export  const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false);

	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
		document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(prevMode => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
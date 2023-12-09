import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export  const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	const login = (user) => {
		setUser(user);
	};

	return (
		<AuthContext.Provider value={{ user, login }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
import { useState } from "react";

export const LoggedIn = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
	};
	const handleLogout = () => {
		setLoggedIn(false);
	};

	return (
		<div className="">
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<div className="">User is {isLoggedIn ? "logged in" : "logged out"}</div>
		</div>
	);
};

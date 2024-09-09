import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

export const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({ name: "Jonathan", email: "jonathan@gmail.com" });
	};

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div className="">
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<div className="">User name is {user?.name} </div>
			<div className="">User email is {user?.email} </div>
		</div>
	);
};

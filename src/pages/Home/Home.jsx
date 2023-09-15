import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/channels/@me", { replace: true });
	}, []);
	return <p>Home</p>;
};

export default Home;
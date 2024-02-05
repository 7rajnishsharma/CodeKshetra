import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./component.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			{/* <h3>LOGO</h3> */}
			<div className="logo">
				<img src="logo.png" alt="LOGO" />
			</div>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/">My work</a>
				<a href="/">Blog</a>
				<a href="/">About me</a>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

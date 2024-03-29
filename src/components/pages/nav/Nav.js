import { useRef } from "react";
import {Link } from "react-router-dom";
import { FaBars, FaTimes,FaArrowAltCircleRight } from "react-icons/fa";
import './Nav.css';
import palogo from './payAfrik_logo.png';

const Nav=()=> {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div className="navbar_container">
			<div className='logo'>
				<Link to="/">
                <img src={palogo} alt="PayAffrik logo"/>
				</Link>
				<p>Transparency in Energy management</p>
            </div>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/solution">Solution</Link>
				{/* <Link to="/about">About PayAfrik</Link> */}
				<Link to="/products">Products/Services</Link>
				<Link to="/merchants">Merchants</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/contact">Contacts</Link>
			<button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            <div className="pay_bills_btn">
                <button> <FaArrowAltCircleRight/> Pay Bills</button>
            </div>
		</div>
	);
}

export default Nav;
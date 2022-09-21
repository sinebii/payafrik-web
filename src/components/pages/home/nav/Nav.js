import { useRef } from "react";
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
                <img src={palogo} alt="PayAffrik logo"/>
            </div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Products</a>
				<a href="/#">Contact</a>
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
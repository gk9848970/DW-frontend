import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ColorData, Navlogo, Ndata } from '../../App2';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './Navbar.elements';

const Navbar4 = () => {
	const [show, setShow] = useState(false);
	const [background, setBackground] = useState(false);

	const closeMobileMenu = () => {
		setShow(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 80) {
				setBackground(true);
				return;
			}
			setBackground(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav background={background}>
				<NavbarContainer>
					<NavLogo to="/" onClick={scroll.scrollToTop}>
						<NavIcon src= {Navlogo} alt="nav logo" />
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes color={ColorData.secondary}/> : <FaBars color={ColorData.secondary}/>}
					</MobileIcon>

					<NavMenu onClick={() => setShow(!show)} show={show}>
						{Ndata.map((navItem, index) => (
							<NavItem key={index}>
								<NavLinks
									spy={true}
									duration={500}
									smooth={true}
									exact="true"
									offset={-80}
									to={navItem.text.toLowerCase()}
									onClick={closeMobileMenu}
								>
									<div onClick={() => window.location.href=`https://${navItem.linkURL}`}
									>{navItem.text}</div>
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar4;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {  } from '../../globalStyles';
import { ColorData, Navbuttom, Navlogo, Ndata } from '../../App2';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
	Input,
	Search,
	SearchWrap,
	Button
} from './Navbar.elements';

const Navbar3 = () => {
	const [show, setShow] = useState(false);
	const closeMobileMenu = () => {
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" onClick={scroll.scrollToTop}>
						<NavIcon src= {Navlogo} alt="nav logo	" />
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
						<NavItemBtn>
							<NavBtnLink to="/sign-up">
								<Button onClick={closeMobileMenu} fontBig primary>
								<div onClick={() => window.location.href=`https://${Navbuttom.btnURL}`}
									>{Navbuttom.text}</div>
								</Button>
							</NavBtnLink>
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar3;
				
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './Navbar.elements';
import { Ndata , Navlogo , ColorData } from '../../App2';

//console.log(Ndata);

const Navbar1 = () => {
	const [show, setShow] = useState(false);

//	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	

	const closeMobileMenu = (to, id) => {
	/*	if (id && location.pathname === '/') {
			scrollTo(id);
		} */
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: ColorData.primary }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src= {Navlogo} alt='logo' />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes color={ColorData.secondary}/> : <CgMenu color={ColorData.secondary} />}
					</MobileIcon>
					<NavMenu show={show}>
						{Ndata.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)} >
									<div onClick={() => window.location.href=`https://${el.linkURL}`}
									>{el.text}</div>
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar1;
import styled from 'styled-components';
import { ColorData } from '../../App2';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
	background: ${() => ColorData.primary};
	margin-bottom: 0px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 30px -20px,rgba(0, 0, 0, 0.3) 0px 20px 15px -30px;;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;

export const NavLogo = styled.div`
	color: blue;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 10rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		color: purple;
        display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.3s ease;
		background-color: ${() => ColorData.primary};
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
	color: ${() => ColorData.textLight};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: ${() => ColorData.textDark};
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		color: ${() => ColorData.textLight};
        text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: ${() => ColorData.textDark};
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Container } from '../../globalStyles';
import { ColorData } from '../../App2';
//import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: ${() => ColorData.primary};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
	transition: background-color 0.3s ease-in;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 30px -20px,rgba(0, 0, 0, 0.3) 0px 20px 15px -20px;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;

export const NavLogo = styled.div`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 100;
`;

export const NavIcon = styled.img`
	margin-right: 0.5rem;
	width: 8rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 100;
	@media screen and (max-width: 960px) {
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
	justify-self: flex-start;
	align-items: left;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		padding-top: 80px;
		top: ${({ show }) => (show ? 0 : '-100vh')};
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: ${() => ColorData.primary};
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	font-weight: 700;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	margin-left: auto;
	button {
		background-color: transparent;
		border-radius: 5px;
		border: 2px solid orange;
		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: ${() => ColorData.textLight};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		text-decoration: 2px solid pink;
	}
	@media screen and (max-width: 960px) {
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

export const Button = styled.div`
	margin-top: -4px;
	width: 110px;
	color: ${() => ColorData.textDark}; 
	cursor: pointer;
	height: 36px;
	font-size: 16px;
	box-sizing: border-box; 
	background: ${() => ColorData.secondary};
	text-align: center;
	line-height: 36px;
	border-radius: 21px;
`;

export const Search = styled.div`
	margin-top: 20px;
	right: 235px;
	position: absolute;
	@media screen and (max-width: 960px) {
		margin-top: 400px;
		display: flex;
		right: 0;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 240px;
	}
`;

export const SearchWrap = styled.div`
	width: 120px;
	height: 36px;
	position: relative;
	box-sizing: border-box; 
	background: rgba(179, 191, 201,0.15);
	line-height: 33px;
	padding-left: 15px;
	border-radius: 19px;
	@media screen and (max-width: 960px) {
		display: flex;
		right: 0;
		justify-content: center;
		align-items: center;
		width: 70%;
		height: 38px;
	}
`;

export const Input = styled.input`
	color: white;
	width: 160px;
	border: transparent;
	font-size: 12px;
	background: transparent; 
	outline: none;
	&::placeholder {
		color: #d1d8de;
	}
	@media screen and (max-width: 960px) {
		display: flex;
		right: 0;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 38px;
	}
`;
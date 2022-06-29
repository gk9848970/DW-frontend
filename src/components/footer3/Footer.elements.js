import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Column, Row ,TextWrapper } from '../../globalStyles';

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 10px 30px;
	color: #fff;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		align-items: center;
	}
`;

export const FooterColumn = styled(Column)`
	margin: 1rem 2rem;
	@media screen and (max-width: 720px) {
		display: flex;
		width: 30%;
		text-align: center;
	}
`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 100px;
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 20px;
`;

export const FooterForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FooterInput = styled.input`
	height: 40px;
	padding: 10px 20px;
	border-radius: 20px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;
	&::placeholder {
		color: #242424;
	}
	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 40px auto 0;
	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLogo = styled.div`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;
export const FooterLink = styled(TextWrapper)`
	color: #fff;
	text-decoration: none;
	margin-bottom: .3rem;
	cursor: pointer;
	&:hover {
		color: #6666ff;
		transition: 0.3s ease-out;
	}
	@media screen and (max-width: 966px){
		font-size: 20px;
		margin-bottom: .1rem;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 14px;
	font-size: 25px;
	@media screen and (max-width: 966px){
		font-size: 28px;
		margin-bottom: 6px;
	}
`;

export const Button = styled.button`
	margin-top: 0px;
	width: 130px;
	color: #ef4b6c; 
	cursor: pointer;
	height: 40px;
	font-size: 16px;
	box-sizing: border-box; 
	background: white;
	text-align: center;
	line-height: 36px;
	border-radius: 20px;
	border: none;
`;
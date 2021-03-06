import styled from 'styled-components';
import { ColorData } from '../../App2';
import { Column, Row } from '../../globalStyles';

export const FooterSection = styled.div`
	color: #fff;
	padding: 60px;
	background:  ${() => ColorData.tertiaryOne};;
	@media screen and (max-width: 720px) {
		padding: 20px;
	}
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 30px;
	color: #fff;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;
export const IconRow = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;
export const FooterColumn = styled(Column)`
	margin: 1rem 2rem;
	@media screen and (max-width: 720px) {
		text-align: center;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	margin-bottom: 1rem;
	color: white;
	padding-bottom: 3px;
	&:hover {
		color: white;
		border-bottom: 1px solid  ${() => ColorData.tertiaryTwo};;
		transition: border 0.5s ease-out;
	}
`;

export const FooterSocialIcon = styled.a`
	color:  ${() => ColorData.textLight};
	font-size: 20px;
	&:hover {
		color: ${() => ColorData.tertiaryTwo};
		transition: 0.3s ease-out;
	}
`;

export const WebsiteRights = styled.div`
	color: ${() => ColorData.textLight};;
	margin-bottom: 5px;
	margin-top: 20px;
	text-align: center;
`;
import styled from 'styled-components';
import { Row, Section } from '../../globalStyles';
import { ColorData } from '../../App2';

export const HeroSection = styled(Section)`
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	display: flex;
	@media screen and (max-width: 768px) {
		padding-top: 120px;
	}
`;

export const ButtonContainer = styled(Row)`
	justify-content: center;
	flex-flow: wrap;
	button {
		background-color: transparent;
		margin: 0 0.3rem;
	}
	button:nth-child(1) {
		color: ${() => ColorData.textLight};
		margin: 5px;
		border: 2px solid ${() => ColorData.tertiaryOne};
		&:hover {
			border: 2px solid transparent;
			background: ${() => ColorData.secondary};
		}
	}
	button:nth-child(2) {
		color: ${() => ColorData.textLight};
		margin: 5px;
		border: 2px solid ${() => ColorData.tertiaryTwo};
		&:hover {
			border: 2px solid transparent;
			background: ${() => ColorData.secondary};
		}
	}
`;
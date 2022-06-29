import styled from 'styled-components';
import { ColorData } from '../../App2';
import { Heading, TextWrapper } from '../../globalStyles';

export const PricingSection = styled.div`
	padding: 50px 0 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background:  ${() => ColorData.tertiaryTwo};
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingHeading = styled(Heading)`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin-bottom: 24px;
	color: black;
	@media screen and (max-width: 996px) {
		font-size: clamp(1.3rem, 13vw, 1.8rem);
		letter-spacing: 0.3rem;
	}
`;

export const PriceSubtitle = styled.h1`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	color: #fff;
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCardInfo = styled.div`
	background:  ${() => ColorData.secondary};
	box-shadow: 0 0 12px 4px #cfcfcf;
	width: 300px;
	text-decoration: none;
	border-radius: 8px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: 15px;
	> button {
		background-color: transparent;
		border: 2px solid pink;
		margin-top: auto;
		&:hover {
			border: none;
		}
	}
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		padding: 20px;
		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
	color: white;
	@media screen and (max-width: 996px) {
		font-size: 1.4rem;
	}
`;

export const PricingCardCost = styled(TextWrapper)`
	font-size: 1.2rem;
`;

export const PricingCardText = styled(TextWrapper)`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: white;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;	
`;
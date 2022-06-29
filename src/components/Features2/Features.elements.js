import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ColorData } from '../../App2';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 1rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: ${() => ColorData.secondary};
	padding: 15px;
	box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);;;
	border-radius: 10px;
`;

export const FeatureImageWrapper = styled.img`
	height: 80px;
	width: 80px;
	margin-bottom: 1rem;
	@media screen and (max-width: 996px){
		height: 50px;
		width: 50px;
	}
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
`;
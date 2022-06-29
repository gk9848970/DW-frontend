import styled from 'styled-components';
import { IoArrowForward, IoArrowBack} from 'react-icons/io5'

export const HeroSection = styled.section`
	margin-top: 0px;
	height: 100vh;
	max-height: 1100px;
	position: relative;
	overflow: hidden;
`;

export const HeroWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex; 
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
`;

export const HeroSlide = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
`;

export const HeroSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex; 
	align-items: center;
	justify-content: center;

	&::before {
	content: '';
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100vh;
	bottom: 0vh;
	left: 0;
	overflow: hidden;
	opacity: 0.4;
	background: linear-gradient (0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100% );
	}
`;

export const HeroImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`

export const HeroContent = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	width: calc(100% - 100px);
	color: #fff;

	h1 {
		font-size: clamp(1.3rem, 13vw, 3.1rem);
		line-height: 1.06;
		letter-spacing: 0.4rem;
		font-weight: 700;
		text-transform: uppercase;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
		text-align: left;
		margin-bottom: 0.8rem;
	}

	p {
		margin-bottom: 1.2rem;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
	}
`;

export const SliderButtons = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50px;
	display: flex; 
	z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
	width: 50px; 
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000d1a;
	border-radius: 50px; 
	padding: 10px;
	margin-right: 2em;
	user-select: none; 
	transition: 0.3s;

	&:hover {
		background:  #4a4eff;
		transform: scale(1.05);
	}
`;

export const NextArrow = styled(IoArrowForward)`
	width: 50px; 
	height: 50px;
	color: #fff;
	cursor: pointer;
	background: #000d1a;
	border-radius: 50px; 
	padding: 10px;
	margin-right: 1em;
	user-select: none; 
	transition: 0.3s;

	&:hover {
		background:  #4a4eff;
		transform: scale(1.05);
	}
`;

export const Button = styled.button`
	margin-top: -2px;
	width: 130px;
	color: #4a4eff; 
	cursor: pointer;
	height: 44px;
	font-size: 16px;
	box-sizing: border-box; 
	background: white;
	text-align: center;
	line-height: 36px;
	border-radius: 6px;
	border: none;
`;
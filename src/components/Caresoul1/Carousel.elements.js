import styled from 'styled-components';
import Slider from 'react-slick';
import { Row } from '../../globalStyles';
import { ColorData } from '../../App2';

export const CarouselImage = styled.img`
	width: 300px;
	padding-left: 10px;
	padding-right: 10px;
	height: 340px;
	border-radius: 10px;
	object-fit: fill;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	background: ${() => ColorData.textLight};
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	border: none;
	height: 430px;
	box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);;
	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;


import styled from 'styled-components';
import Slider from 'react-slick';
import { Row } from '../../globalStyles';

export const CarouselImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	background: transparent;
    color: white;
    width: 150px;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	outline: none;
	border: none;
	height: 160px;
`;

export const ButtonContainer = styled(Row)`
    & svg {
		margin: 0.2rem 1.5rem;
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
		gap: 2rem;
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

import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from './CarouselData';
import { ButtonContainer,ReviewSlider,ImageWrapper,CarouselImage} from './Carousel.elements';
import { Row ,TextWrapper ,Heading, Section} from '../../globalStyles'; 
import { Cdata, ColorData } from '../../App2';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" margin ='0 0 1rem 0' inverse
				style={{color: ColorData.textDark}}	
				>
					{Cdata.title}
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: ColorData.tertiaryOne}}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{Cdata.blocks.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.imgURL} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold"
						style={{color: ColorData.textDark}}	
						>
							{el.mainHeading}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem"
						style={{color: ColorData.textDark}}	
						>
							{el.description}
						</TextWrapper>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
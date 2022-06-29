import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from './TestmonialData';
import { Tdata } from '../../App2';
import { ButtonContainer,ReviewSlider,ImageWrapper,CarouselImage} from './Testmonial.elements';
import { Row ,TextWrapper ,Heading, Section} from '../../globalStyles'; 
import { ColorData } from '../../App2';

const Testimonial = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" padding="50px 250px" inverse style = {{background: ColorData.tertiaryTwo}}>
			<Row justify="space-around" margin="0.2rem" wrap="wrap">
				<Heading width="auto" margin ='0 0 1rem 0' inverse style = {{color: ColorData.textDark}}>
					Testimonial
				</Heading>
			</Row>
			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{Tdata.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.imgURL} />
						<TextWrapper size="1.1rem" margin="0.7rem 0 0" weight="bold" style = {{color: ColorData.textDark}}>
							{el.heading}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" style = {{color: ColorData.textDark}}>
							{el.description}
						</TextWrapper>
					</ImageWrapper>
				))}
			</ReviewSlider>
            <Row justify="space-around">
            <ButtonContainer>
					<IconContext.Provider value={{ size: '2rem', color: 'black' }}>
						<FaChevronLeft onClick={sliderRef?.slickPrev} color={ColorData.secondary} />
                        <FaChevronRight onClick={sliderRef?.slickNext} color={ColorData.secondary} />
					</IconContext.Provider>
			</ButtonContainer>
            </Row>
		</Section>
	);
};

export default Testimonial;
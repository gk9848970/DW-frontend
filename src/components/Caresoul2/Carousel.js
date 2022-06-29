import React from 'react';
import { Button, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	CarouselSection,
	CarouselWrapper,
	CarouselHeading,
	CarouselContainer,
	CarouselCardInfo,
	CarouselCardPlan,
	CarouselCardCost,
	CarouselCardFeatures,
	CarouselCardText,
	CarouselCardFeature,
} from './Carousel.elements';
import { Cdata, ColorData } from '../../App2';

const CarouselSec = () => {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<CarouselSection id="pricing"
			style={{background: ColorData.tertiaryOne}}	
			>
				<CarouselWrapper>
					<CarouselHeading
					style={{color: ColorData.secondary}}	
					>
						{Cdata.title}
					</CarouselHeading>
					<TextWrapper
						style={{color: ColorData.textLight}}	
						maxWidth="460px"
						mb="2rem"
						size="1.2rem"
						lineHeight="1.3rem"
						align="center"
						weight="600"
					>
						{Cdata.description}
					</TextWrapper>
					<CarouselContainer>
						{Cdata.blocks.map((card, index) => (
								<CarouselCardInfo key={index}>
									<CarouselCardPlan
										style={{color: ColorData.tertiaryTwo}}	
									>{card.mainHeading}</CarouselCardPlan>
									<CarouselCardCost
										style={{color: ColorData.textLight}}	
									>{card.heading}</CarouselCardCost>
									<CarouselCardText
										style={{color: ColorData.textLight}}	
									>{card.subHeading}</CarouselCardText>
									<CarouselCardFeatures>
											<CarouselCardFeature 
											style={{color: ColorData.textLight}}		
											>{card.description}
											</CarouselCardFeature>
									</CarouselCardFeatures>
									<Button onClick={() => window.location.href=`https://${card.button.btnURL}`} >{card.button.text}</Button>
								</CarouselCardInfo>
						))}
					</CarouselContainer>
				</CarouselWrapper>
			</CarouselSection>
		</IconContext.Provider>
	);
};

export default CarouselSec;
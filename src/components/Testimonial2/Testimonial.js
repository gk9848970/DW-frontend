import React from 'react';
import { TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingHeading,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardFeature,
} from './Testimonial.elements';
import { ColorData, Tdata } from '../../App2';

const Testimonial = () => {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<PricingHeading
					style={{ color: ColorData.textDark}}
					>{Tdata.title}</PricingHeading>
					<TextWrapper
						style={{ color: ColorData.textDark}}
						maxWidth="460px"
						mb="2rem"
						size="1.2rem"
						lineHeight="1.3rem"
						align="center"
						weight="600"
					>
						{Tdata.description}
					</TextWrapper>
					<PricingContainer>
						{Tdata.blocks.map((card, index) => (
								<PricingCardInfo key={index}>
									<PricingCardPlan
									style={{ color: ColorData.textLight}}
									>{card.heading}</PricingCardPlan>
									<PricingCardCost
									style={{ color: ColorData.textLight}}
									>{card.subHeading}</PricingCardCost>
									<PricingCardFeatures>
											<PricingCardFeature
											style={{ color: ColorData.textLight}}
											>
												{card.description}
											</PricingCardFeature>
									</PricingCardFeatures>
								</PricingCardInfo>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
};

export default Testimonial;
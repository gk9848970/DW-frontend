import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './Features.elements';
import { ColorData, FeatureData } from '../../App2'; 

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about" 
		style={{background: ColorData.tertiaryOne}}
		>
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle
						style={{color: ColorData.textLight}}
					>{FeatureData.title}</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{FeatureData.blocks.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper src= {el.imgURL} > 
							</FeatureImageWrapper>
							<FeatureName
								style={{color: ColorData.textDark}}
							>{el.heading}</FeatureName>
							<FeatureText
								style={{color: ColorData.textDark}}
							>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;
import React from 'react';
import { Container } from '../../globalStyles';
import {
	FeatureText,
	FeatureSection,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './Features.elements';
import { ColorData, FeatureData } from '../../App2';

const Features = () => {
	return (
		<FeatureSection id="about"
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
						<FeatureColumn key={index}>
							<FeatureImageWrapper className={el.imgClass}>
								<img src={el.icon} alt=""/>
							</FeatureImageWrapper>
							<FeatureName
							style={{color: ColorData.textLight}}
							>{el.name}</FeatureName>
							<FeatureText
							style={{color: ColorData.textDark}}
							>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
	);
};

export default Features;
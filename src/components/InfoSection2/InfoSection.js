import React from 'react';
import { Button, Column, MainHeading, Row, TextWrapper } from '../../globalStyles';
import { HeroSection, ButtonContainer } from './InfoSection.elements';
import { ColorData, HeadData } from '../../App2';

const InfoSection = () => {
	return (
		<HeroSection id="hero" style={{ backgroundImage: `url(${HeadData.imgURL})` }}>
			<Row justify="center" align="center" height="100%" padding="2rem" width = '100%'>
				<Column align="center" mb="10%">
					<MainHeading
					style={{ color: ColorData.textLight}}
					>{HeadData.heading}</MainHeading>
					<TextWrapper
						size="clamp(1rem,3vw,1.3rem)"
						margin="0 0 2rem"
						lineHeight="1.1rem"
						maxWidth="480px"
						align="center"
						style={{ color: ColorData.textLight}}
					>{HeadData.description}
					</TextWrapper>
					<ButtonContainer>
							<Button big fontBig  onClick={() => window.location.href=`https://${HeadData.buttonOne.btnURL}`}>
								{HeadData.buttonOne.text}
							</Button>
							<Button big fontBig  onClick={() => window.location.href=`https://${HeadData.buttonTwo.btnURL}`}>
								{HeadData.buttonTwo.text}
							</Button>
					</ButtonContainer>
				</Column>
			</Row>
		</HeroSection>
	);
};

export default InfoSection;
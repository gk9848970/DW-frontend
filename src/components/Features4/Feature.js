import React from 'react';
import { Container, Heading, Row, Section, Text } from '../../globalStyles';
import { Feature } from './Features.elements';
import { ColorData, FeatureData } from '../../App2';

const Features = () => {
	return (
		<Section id="services" padding="60px 0"
		style={{ background: ColorData.tertiaryOne}}
		>
			<Container>
				<Row wrap="wrap" justify="center" gap="1.4rem">
					<Heading mb="1rem" inverse
					style={{ color: ColorData.textLight}}
					>
						Features
					</Heading>
					{FeatureData.map((el, index) => (
						<Feature key={index} md={3} sm={10}>
							<Text inverse weight="700" size="1.3rem"
							style={{ color: ColorData.textLight}}
							>
								{el.heading}
							</Text>
							<Text mb="auto" size="1rem"
							style={{ color: ColorData.textLight}}
							>
								{el.description}
							</Text>
						</Feature>
					))}
				</Row>
			</Container>
		</Section>
	);
};

export default Features;
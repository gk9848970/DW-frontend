import React from 'react';
import { BrandData } from '../../App2';
import { Container } from '../../globalStyles';
import {
	ClientSection,
	ClientColumn,
	ClientText,
	ClientTitle,
	ClientRow,
	ClientWrapper,
	ClientImage,
	ClientTextWrapper,
} from './Brands.elements';
import { ColorData } from '../../App2';

const Clients = () => {
	return (
		<ClientSection id="clients"
		style={{background: ColorData.tertiaryOne}}
		>
			<Container>
				<ClientTextWrapper>
					<ClientTitle
					style={{color: ColorData.textDark}}
					>Our Clients / partners</ClientTitle>
					<ClientText
					style={{color: ColorData.textDark}}
					>Discription</ClientText>
				</ClientTextWrapper>

				<ClientRow>
					{BrandData.map((clients, clientsIndex) => (
						<ClientColumn key={clientsIndex}>
							{clients.map((el, index) => (
								<ClientWrapper key={index}>
									<ClientImage src={el.image} />
								</ClientWrapper>
							))}
						</ClientColumn>
					))}
				</ClientRow>
			</Container>
		</ClientSection>
	);
};

export default Clients;
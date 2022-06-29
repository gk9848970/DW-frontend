import React from 'react';
import { Column, Container, Row, Section, TextWrapper } from '../../globalStyles';
import {
	FooterForm,
	FooterInput,
	FooterLogo,
	SocialIcon,
	WebsiteRights,
	FooterColumn,
	FooterSocialIcon,
	FooterRow,
	FooterLine,
	FooterLink,
	FooterLinkTitle,
	Button
} from './Footer.elements';
import { ColorData, FootData, typeOfDataNeeded } from "../../App2"

function Footer() {
	return (
		<Section padding="4rem 0 2rem"
		style={{background: ColorData.tertiaryOne}}
		>
			<Column justify="center" align="center" textAlign="center" mb="1.2rem" padding="1.2rem" >
				<TextWrapper size="1.7rem" weight="500" mb="1.2rem" 
				 style={{color: ColorData.textLight}}
				>
					{FootData.heading}
				</TextWrapper>
				<TextWrapper mb="1rem" spacing="1px"
				style={{color: ColorData.textLight}}
				>
					{FootData.subHeading}
				</TextWrapper>
				<FooterForm>
					<FooterInput name="email" type="email" placeholder={FootData.placeholderText} />
					<Button>{FootData.button.text}</Button>
				</FooterForm>
			</Column>
			<FooterRow>
				{FootData.blocks.map((el, index) => (
					<FooterColumn gap="0.5rem" key={index}>
						<FooterLinkTitle>
							{el.heading}
						</FooterLinkTitle>
						{el.links.map((link, linkIndex) => (
							<FooterLink key={linkIndex}
							onClick={() => window.location.href=`https://${link.linkURL}`}
							>
								{link.text}
							</FooterLink>
						))}
					</FooterColumn>
				))}
			</FooterRow>
			<Container>
				<FooterLine>
					<FooterLogo onClick={() => window.location.href=`https://${FootData.logoLink}`}>
						<SocialIcon src={FootData.logoImgURL} />
					</FooterLogo>
					<WebsiteRights>{FootData.copyright}</WebsiteRights>
					<Row justify="center" gap="2rem" align="center" width="240px">
						{typeOfDataNeeded.map((social, index) => (
							<FooterSocialIcon
								key={index}
								onClick={() => window.location.href=`https://${social.linkURL}`}
								aria-label={social.name}
							>
								{social.icon}
							</FooterSocialIcon>
						))}
					</Row>
				</FooterLine>
			</Container>
		</Section>
	);
}

export default Footer;
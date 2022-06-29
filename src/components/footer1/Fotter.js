import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './Footer.elements';
import { Row, Section } from '../../globalStyles';
import { ColorData, FootData, typeOfDataNeeded } from "../../App2"

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0"
		style={{background: ColorData.tertiaryOne}}
		>
			<FooterWrapper>
				<FooterGrid justify="space-between">
					{FootData.blocks.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle
							style={{color: ColorData.textLight}}
							>{footerItem.heading}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} onClick={() => window.location.href=`https://${link.linkURL}`}
								>
									{link.text}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
					 <FooterColumn id="footerLogo">
						<FooterLogo onClick={() => window.location.href=`https://${FootData.logoLink}`}>
							<SocialIcon src= {FootData.logoImgURL} alt="social icon" />
						</FooterLogo>
						<FooterAddress
						style={{color: ColorData.textLight}}
						>
							{FootData.address}
						</FooterAddress>
						<Row align="center" margin="auto 0 0 0" gap="1rem">
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
              		</FooterColumn>
				</FooterGrid>
				<FooterRights
				style={{color: ColorData.textLight}}
				>{FootData.copyright}</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
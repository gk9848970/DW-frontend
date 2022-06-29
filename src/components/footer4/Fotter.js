import React from 'react';
import { Container, Text } from '../../globalStyles';
import { FooterColumn, FooterRow, FooterSection, IconRow, Link , FooterSocialIcon,WebsiteRights} from './Footer.elements';
import { ColorData, FootData,typeOfDataNeeded } from '../../App2'

const Footer = () => {
	
	return (
		<FooterSection id="help">
			<Container>
				<FooterRow>
					<FooterColumn>
						<Text weight="700" size="1.5rem"
						style={{color: ColorData.textLight}}
						>
							{FootData.heading}
						</Text>
						<Text maxWidth="360px" size="0.9rem"  margin = '10px'
						style={{color: ColorData.textLight}}
						>
							{FootData.subHeading}
						</Text>
						<IconRow>
						{typeOfDataNeeded.map((social, index) => (
							<FooterSocialIcon
								key={index}
								onClick={() => window.location.href=`https://${social.linkURL}`}
								aria-label={social.name}
							>
								{social.icon}
							</FooterSocialIcon>
						))}
						</IconRow>
					</FooterColumn>
					{FootData.blocks.map((el, index) => (
						<FooterColumn key={index} md={2} sm={4}>
							<Text weight="700" mb="0.3rem" size="1.5rem"
							style={{color: ColorData.textLight}}
							>
								{el.heading}
							</Text>

							{el.links.map((link, ind) => (
								<Text margin = '5px' fontSize="0.9rem" key={ind}>
									<Link 
									onClick={() => window.location.href=`https://${link.linkURL}`}
									style={{color: ColorData.textLight}}
									>{link.text}</Link>
								</Text>
							))}
						</FooterColumn>
					))}
				</FooterRow>
				<WebsiteRights>{FootData.copyright}</WebsiteRights>
			</Container>
		</FooterSection>
	);
};

export default Footer;
import React from 'react'
import { 
	HeroContainer,
	HeroBg , 
	VideoBg ,
	HeroP ,
	HeroContent ,
	HeroH1,
	Row
	} from './InfoSection.elements'
import { ColorData, HeadData } from '../../App2'

const InfoSection = () => {
  return (
	<div>
	<HeroContainer>
		<HeroBg>
			<VideoBg style={{ backgroundImage: `url(${HeadData.imgURL})`}} />
		</HeroBg>
		<HeroContent>
			<HeroH1
			style={{ color: ColorData.textLight}}
			>
				{HeadData.heading}
			</HeroH1>
			<HeroP
			style={{ color: ColorData.textLight}}
			>
				{HeadData.description}
			</HeroP>
		<Row>
          <input name="name" type="text" 
		  placeholder= {HeadData.searchbarText}
		  style={{ background: ColorData.secondary}}
			/>
        </Row>
		</HeroContent>
	</HeroContainer>
	</div>
  )
}

export default InfoSection
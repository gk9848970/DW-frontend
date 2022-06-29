import React , {useState, useEffect,useRef} from 'react'
import { HeroSection, HeroWrapper ,HeroSlide,HeroSlider,HeroImage,HeroContent,SliderButtons,PrevArrow,NextArrow ,Button} from './InfoSection.elements'
import { SData } from './InfoSectionData'
import { ColorData, HeadData } from '../../App2'

const InfoSection = () => {

	const [current, setCurrent] = useState(0)
	const length = SData.length 
	const timeout = useRef (null)

	useEffect(
		() => {		
		const nextSlide = () => {
		setCurrent(current => (current=== length - 1 ? 0 : current + 1));
		};
		
		timeout.current = setTimeout(nextSlide, 3000);
		
		return function() {
			if (timeout.current) { 
				clearTimeout(timeout.current);
			}
		};
		},
		[current, length]
		);

	const nextSlide = () => {
		if (timeout.current) { 
			clearTimeout(timeout.current);
		}

		setCurrent (current=== length - 1 ? 0: current + 1)
		};

	const prevSlide = () => {
		if (timeout.current) { 
			clearTimeout(timeout.current);
		}

		setCurrent (current === 0 ? length - 1 : current - 1)
		};

	if(!Array.isArray(HeadData) || HeadData.length <= 0){
		return null
	}

  return (
	<HeroSection>
		<HeroWrapper>
			{HeadData.map((slide,index) => {
				return (
					<HeroSlide key={index} >
						{index === current && (
							<HeroSlider>
							<HeroImage src={slide.imgURL} alt=""/>
							<HeroContent>
								<h1
								style={{ color: ColorData.textLight}}
								>{slide.heading}</h1>
								<p
								style={{ color: ColorData.textLight}}
								>{slide.description}</p>
								<Button  onClick={() => window.location.href=`https://${slide.button.btnURL}`}
								style={{ color: ColorData.textLight ,background: ColorData.tertiaryOne }}
								>
									{slide.button.text}
								</Button>
							</HeroContent>
							</HeroSlider>
						)}
					</HeroSlide>
				);
			})}
			<SliderButtons> 
				<PrevArrow onClick={prevSlide} />
				<NextArrow onClick={nextSlide}/>
			</SliderButtons>
		</HeroWrapper>
	</HeroSection>
  )
}

export default InfoSection
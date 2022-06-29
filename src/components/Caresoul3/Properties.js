import React from 'react';
import { Container } from '../../globalStyles';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './Properties.elements';
// import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Cdata , ColorData} from '../../App2';

const Properties = () => {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();
/*
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
*/
	return (
		<ContentSec
		style={{background: ColorData.tertiaryOne}}
		>
			{Cdata.blocks.map((el, index) => (
			<Container key={index}>
				<ContentRow reverse = {el.reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
							style={{color: ColorData.textLight}}
							>
								{el.topline}
							</TopLine>
							<Heading
							style={{color: ColorData.textDark}}
							>
								{el.heading}
							</Heading>
							<Subtitle
							style={{color: ColorData.textDark}}
							>
								{el.description}
							</Subtitle>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
					>
							<ImgWrapper>
								<Img
									src={el.imgURL}
									alt=""
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
			))}
		</ContentSec>
	);
};

export default Properties;
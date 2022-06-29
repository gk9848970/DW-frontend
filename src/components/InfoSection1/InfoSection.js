import React from 'react';
import { Container , Button } from '../../globalStyles' ;
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle ,ImgWrapper,Img } from './InfoSection.elements'
import { HeadData,ColorData } from '../../App2';

const InfoSection = ({ imgStart ,alt,start }) => {
  return (
    <div> 
        <InfoSec style={{ background: ColorData.secondary }}>
            <Container>
                <InfoRow imgStart = {imgStart} > 
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine 
                            style={{ color: ColorData.tertiaryOne }}
                            >{HeadData.topline}</TopLine>
                            <Heading 
                            style={{ color: ColorData.textDark }}
                            >{HeadData.heading}</Heading>
                            <Subtitle
                            style={{ color: ColorData.textDark }}
                            >{HeadData.description}</Subtitle>
                               <Button  onClick={() => window.location.href=`https://${HeadData.button.btnURL}`}
                               style={{ color: ColorData.textLight ,background: ColorData.tertiaryOne }}
                               >
                                    {HeadData.button.text}
                                </Button> 
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start = {start}>
                            <Img src = {HeadData.imgURL} alt = {alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </div>
  )
}

export default InfoSection
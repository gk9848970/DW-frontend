import React from 'react'
import { FeatureData } from '../../App2'
import { ServicesContainer, ServicesH1 ,ServicesH2 ,ServicesWrapper ,ServicesCard ,ServicesIcon ,ServicesP } from './Features.elements'
import { ColorData } from '../../App2'

const Feature = () => {
  return (
    <>
        <ServicesContainer id="services"> 
            <ServicesH1
            style={{ color : ColorData.textLight}}
            >{FeatureData.title}</ServicesH1>
            <ServicesWrapper> 
                {FeatureData.blocks.map((el,index) => (
                  <ServicesCard key={index}>
                  <ServicesIcon src={el.imgURL}/>
                  <ServicesH2
                   style={{ color : ColorData.textDark}}
                  >{el.heading}</ServicesH2>
                  <ServicesP
                   style={{ color : ColorData.textDark}}
                  >{el.description}</ServicesP>
                  </ServicesCard>
                ))}
            </ServicesWrapper> 
        </ServicesContainer>
    </>
  )
}

export default Feature
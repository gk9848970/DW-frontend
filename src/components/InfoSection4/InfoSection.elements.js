import styled from 'styled-components'

export const HeroContainer = styled.div` 
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center; 
	padding: 0 30px;
	height: 700px; 
	position: relative;
	z-index: 1;
	@media screen and (max-width: 996px){
		height: 920px;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0; 
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.div`
	width: 100%;
	height: 100%;
	background: #232a24;
	background-position: center;
	background-size: cover;
`;

export const HeroContent = styled.div`
	height: 330px;
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const HeroH1 = styled.h1`

	color: #fff;
	font-size: 58px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}

	@media screen and (max-width: 480px) { 
		font-size: 40px;
	}
`

export const HeroP = styled.p`
	margin-top: 20px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px) { 
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
	width: 300px;
	margin-top: 18px;
    input {
      &[name="name"] {
        padding-left: 10px;
		padding-right: 10px;
		border-radius: 15px;
		height: 38px;
		outline: none;
		border: none;
      }
    }
	@media screen and (max-width: 996px){
		width: 250px;
		height: 40px;
	}
`;
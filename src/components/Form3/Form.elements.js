 import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	color: #fff;
	padding: 100px 0;
	background-size: cover;
	background-attachment: fixed;
`;

export const FormTitle = styled.h1`
	margin-top: 24px;
	margin-bottom: 20px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: #ef4b6c;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	padding: ${({ small }) => (small ? '0 50px' : '0 15px')};
	flex: 1;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormColumn2 = styled.div`
	margin-bottom: 15px;
	padding-right: 35px;
	padding-left: 35px;
	padding: ${({ small }) => (small ? '0 50px' : '0 70px')};
	flex: 1;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	max-width: 540px;
	padding-top: 0;
	width: 100%;
	> button {
		width: 100%;
		height: 50px;
		margin-top: 1rem;
		margin-bottom: 2rem;
		background: #ef4b6c;
		outline: none;
		border: none;
		color: #fff;
		font-size: 1rem;
	}
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	background-color: white;
	padding: 5px;
	text-align: center;
	margin-bottom: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 0.7rem;
	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	background: white;
	font-size: 1rem;
	color: #cfcfcf;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #fff;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 18px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
`;

export const Box = styled.span`
	background: #fefefe;
	padding: 10px;
	border-radius: 50px;
	color: black;
	> span {
		background: pink;
		padding: 5px 15px;
		border-radius: 50px;
		color: white;
		margin-right: 0.6rem;
	}
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	letter-spacing: 0.4rem;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? '#f7f8fa' : 'white')};
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#a9b3c1' : 'white')};
`;
import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormColumn2,
	Heading,
	Subtitle,
	TextWrapper,
} from './Form.elements';
import { Container, Button } from '../../globalStyles';
import validateForm from './Form.validate';
import { ColorData, FormData } from '../../App2';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, password, confirmPass });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('Application was submitted!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			color: 'white',
			boxShadow: '0px 0px 8px white',
			transition: {
				duration: 0.3,
				yoyo: Infinity,
			},
		},
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
	];
	return (
		<FormSection style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) ,url(${FormData.image})`}}>
			<Container>
				<FormRow>
					<FormColumn2>
						<TextWrapper>
							<Heading
							style={{color: ColorData.textLight}}	
							>
								{FormData.heading}
							</Heading>
							<Subtitle
							style={{color: ColorData.textLight}}	
							>
								{FormData.description}
							</Subtitle>
						</TextWrapper>
					</FormColumn2>
					<FormColumn small>
						<FormTitle
						style={{color: ColorData.textDark}}	
						>{FormData.title}</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}
							{FormData.blocks.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.labelText}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={el.placeholderText}
										value={el.value}
									/>
								</FormInputRow>
							))}

							<Button variants={buttonVariants} whileHover="hover" type="submit"
							style={{background: ColorData.textDark ,color: ColorData.textLight	}}	
							>
								{FormData.buttonText}
							</Button>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormButton,
	FormTitle,
} from './Form.elements';
import { Container } from '../../globalStyles';
import validateForm from './Form.validate';
import { ColorData, FormData } from '../../App2';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setName('');
		setEmail('');
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
	];
	return (
		<FormSection
		style={{ background: ColorData.tertiaryTwo }}
		>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle
						style={{ color: ColorData.textDark }}
						>{FormData.title}</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={el.label}
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
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}
							<FormButton type="submit"
							style={{ color: ColorData.textDark }}
							>{FormData.buttonText}</FormButton>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
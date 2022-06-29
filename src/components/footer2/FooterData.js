import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

//console.log(FootSicon);

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Heading',
		links: ['subheading', 'subheading', 'subheading', 'subheading'],
	},
	{
		title: 'Heading',
		links: ['subheading', 'subheading', 'subheading', 'subheading'],
	},
	{
		title: 'Heading',
		links: ['subheading', 'subheading', 'subheading', 'subheading'],
	},
	{
		title: 'Heading',
		links: ['subheading', 'subheading', 'subheading', 'subheading'],
	},
];



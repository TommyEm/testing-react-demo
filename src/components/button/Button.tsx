import * as React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
	all: unset;
	padding: 8px 16px;
	color: white;
	font-size: 16px;
	cursor: pointer;

	&.mod-type-primary {
		background-color: blue;
	}

	&.mod-type-secondary {
		background-color: red;
	}
`;


export interface ButtonProps {
	type?: 'primary' | 'secondary';
	label: string;
	onClick?: (e: React.MouseEvent) => void;
};

const Button = ({
	type = 'primary',
	label,
	...props
}: ButtonProps) => {
	return (
		<StyledButton
			type='button'
			className={`Button mod-type-${type}`}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

export default Button;
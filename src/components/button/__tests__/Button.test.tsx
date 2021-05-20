import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../Button.stories';


const { Primary, Secondary } = composeStories(stories);

test('renders a primary button', () => {
	render(<Primary {...Primary.args} />);
	expect(screen.getByRole('button')).toHaveTextContent('Button');
});

test('renders a secondary button', () => {
	render(<Secondary {...Secondary.args} />);
	expect(screen.getByRole('button')).toHaveTextContent('Button');
});

test('matches snapshot', () => {
	const tree = render(<Primary {...Primary.args} />);
	expect(tree).toMatchSnapshot();
});

import Shop from '../Shop';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const user = userEvent.setup();

test('renders shop page', async () => {
    render (<App/>);

    await user.click(screen.getByTestId("shop-link"));

    expect(screen.getByText(/~Go To Shopping Cart~/i)).toBeInTheDocument();
});


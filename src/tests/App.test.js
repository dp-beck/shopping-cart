import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Routing integration tests', () => {
    
        const user = userEvent.setup();

    test('home loads', async () => {
        render(
            <App />
            );

        expect(screen.getByText(/welcome to the animal crossing fish market/i)).toBeInTheDocument();
        
    });
    
    test('navigating to /shop', async () => {
        render(
            <App />
            );

        await user.click(screen.getByTestId("shop-link"));

        expect(screen.getByText(/go to shopping cart/i)).toBeInTheDocument();
    });

    test('navigating to nonexistent page', async () => {
        render(
            <App />
        );
        
    });
})


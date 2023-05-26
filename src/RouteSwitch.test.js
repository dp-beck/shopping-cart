import { render, screen } from '@testing-library/react';
import RouteSwitch from './RouteSwitch';
import userEvent from '@testing-library/user-event';

describe('Routing integration tests', () => {
    test('navigating to /shop', async () => {
        render(
            <RouteSwitch />
            );

        const user = userEvent.setup();

        expect(screen.getByText(/animal crossing fish market/i)).toBeInTheDocument();

        await user.click(screen.getByText(/shop/i));

        expect(screen.getByRole('heading')).toHaveTextContent('Shop');
    });

    test('navigating to nonexistent page', async () => {
           /*NEED TO FIGURE OUT HOW TO SET UP TEST*/
    });
})
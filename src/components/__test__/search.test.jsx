import { waitFor } from '@testing-library/react';
import React from 'react';

import renderWithProviders from '../../helper/test.utils'
import SearchModule from '../Search';

describe('SearchCars', () => {
  // Ngetes Render Cars
  it('should render fetch api and render data', async () => {
    const { getByText } = renderWithProviders(<SearchModule />);

    await waitFor(() => expect(getByText('Pilih Mobil')).toBeVisible());
  });
});

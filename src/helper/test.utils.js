import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import propTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

// As a basic setup, import your same slice reducers
import carDetailReducer from '../redux/features/carSlice';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { cars: carDetailReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: propTypes.node.isRequired,
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

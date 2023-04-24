import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import App from '../App';

describe('Working input', () => {
  it('has input', () => {
    render(<App />);
    const searchInput: HTMLInputElement = screen.getByLabelText('Search field');
    expect(searchInput).toBeInTheDocument();
  });

  it('changes search input', () => {
    render(<App />);
    const searchInput: HTMLInputElement = screen.getByLabelText('Search field');

    fireEvent.change(searchInput, {
      persist: jest.fn(),
      target: { value: 'Luke' },
    });

    expect(searchInput.value).toEqual('Luke');
  });
});

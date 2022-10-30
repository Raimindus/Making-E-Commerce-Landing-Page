import { fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import selectEvent from 'react-select-event';

import renderWithProviders from '../../helper/test.utils';
import SearchModule from '../Search';

const handlers = [
  rest.get(
    'https://bootcamp-rent-cars.herokuapp.com/customer/car',
    (req, res, ctx) =>
      res(
        ctx.json(
          {
            id: 338,
            name: 'afgddgasg',
            category: 'large',
            price: 1000001,
            status: true,
            start_rent_at: '2022-11-01T00:00:00.000Z',
            finish_rent_at: '2022-11-07T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667058760195-maxresdefault.jpg?alt=media',
            createdAt: '2022-10-27T12:27:40.083Z',
            updatedAt: '2022-10-30T16:49:09.281Z'
          },
          {
            id: 328,
            name: 'Tesla',
            category: 'small',
            price: 2000,
            status: true,
            start_rent_at: '2022-10-30T00:00:00.000Z',
            finish_rent_at: '2022-11-06T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666788892039-tesla.png?alt=media',
            createdAt: '2022-10-26T12:54:52.039Z',
            updatedAt: '2022-10-30T16:53:23.657Z'
          },
          {
            id: 322,
            name: 'New VW',
            category: 'small',
            price: 1000,
            status: true,
            start_rent_at: '2022-10-24T00:00:00.000Z',
            finish_rent_at: '2022-10-31T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666791806898-vw.png?alt=media',
            createdAt: '2022-10-26T12:49:38.412Z',
            updatedAt: '2022-10-30T17:09:02.371Z'
          },
          {
            id: 330,
            name: 'Lexus baru',
            category: 'medium',
            price: 300000000,
            status: true,
            start_rent_at: '2022-11-01T00:00:00.000Z',
            finish_rent_at: '2022-11-07T00:00:00.000Z',
            image: null,
            createdAt: '2022-10-26T13:16:42.289Z',
            updatedAt: '2022-10-30T17:09:59.138Z'
          },
          {
            id: 340,
            name: 'cicak',
            category: 'large',
            price: 120000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667058809690-Aesthetic-Wallpaper-1.jpg?alt=media',
            createdAt: '2022-10-29T15:53:29.697Z',
            updatedAt: '2022-10-29T15:53:29.697Z'
          },
          {
            id: 230,
            name: 'Hyundai Ionic',
            category: 'medium',
            price: 8000000,
            status: true,
            start_rent_at: '2022-10-27T00:00:00.000Z',
            finish_rent_at: '2022-10-29T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666585235205-2022-03-16-ionic-5-mobil-listrik-buatan-indonesia-pertama-yang-dilaunching-jokowi.jpg?alt=media',
            createdAt: '2022-10-24T04:20:35.214Z',
            updatedAt: '2022-10-30T09:42:05.753Z'
          },
          {
            id: 268,
            name: 'New Ferrari',
            category: 'large',
            price: 800000,
            status: true,
            start_rent_at: '2022-10-25T00:00:00.000Z',
            finish_rent_at: '2022-11-01T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666790288419-cars_1666538719900-vw.png?alt=media',
            createdAt: '2022-10-24T15:11:57.754Z',
            updatedAt: '2022-10-30T09:44:17.153Z'
          },
          {
            id: 288,
            name: 'Toyota Rush',
            category: 'medium',
            price: 250000,
            status: true,
            start_rent_at: '2022-10-27T00:00:00.000Z',
            finish_rent_at: '2022-10-29T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666630456135-terios.jpg?alt=media',
            createdAt: '2022-10-24T16:54:16.135Z',
            updatedAt: '2022-10-30T10:03:54.556Z'
          },
          {
            id: 323,
            name: 'Pajero Black',
            category: 'large',
            price: 1111,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666788740168-toyota.png?alt=media',
            createdAt: '2022-10-26T12:52:20.170Z',
            updatedAt: '2022-10-26T12:52:20.170Z'
          },
          {
            id: 325,
            name: 'VW',
            category: 'small',
            price: 2000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666788797826-vw.png?alt=media',
            createdAt: '2022-10-26T12:53:17.832Z',
            updatedAt: '2022-10-26T12:53:17.832Z'
          },
          {
            id: 327,
            name: 'Tesla New',
            category: 'small',
            price: 10000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666788866953-tesla.png?alt=media',
            createdAt: '2022-10-26T12:54:26.954Z',
            updatedAt: '2022-10-26T12:54:26.954Z'
          },
          {
            id: 333,
            name: 'Pajero Moladin',
            category: 'large',
            price: 10000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666791861389-toyota.png?alt=media',
            createdAt: '2022-10-26T13:44:21.390Z',
            updatedAt: '2022-10-26T13:44:21.390Z'
          },
          {
            id: 336,
            name: 'tester123456789asdadasd',
            category: 'medium',
            price: 5000000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666873555348-untitled.JPG?alt=media',
            createdAt: '2022-10-27T12:25:55.349Z',
            updatedAt: '2022-10-27T12:25:55.349Z'
          },
          {
            id: 337,
            name: 'test',
            category: 'small',
            price: 10000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image: null,
            createdAt: '2022-10-27T12:26:01.962Z',
            updatedAt: '2022-10-27T12:26:01.962Z'
          },
          {
            id: 329,
            name: 'Pajero',
            category: 'small',
            price: 10000,
            status: true,
            start_rent_at: '2022-10-31T00:00:00.000Z',
            finish_rent_at: '2022-10-31T00:00:00.000Z',
            image:
              'https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1666788916817-toyota.png?alt=media',
            createdAt: '2022-10-26T12:55:16.818Z',
            updatedAt: '2022-10-30T09:21:36.698Z'
          }
        ),
        ctx.delay(150)
      )
  )
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('SearchCars', () => {
  // Ngetes Render Cars
  it('should render fetch api and render data', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchModule />} />
        </Routes>
      </BrowserRouter>
    );
    const btn = getByText('Cari Mobil');
    fireEvent.click(btn);
    await waitFor(() => expect(getByText('Toyota Rush')).toBeVisible());
    const harga = getByText('Rp 250.000,00 / hari');
    expect(harga).toBeVisible();
  });

  // Ngetes filter setelah render api
  test('should remove Toyota Rush from view when filtering price', async () => {
    const { getByText, findByText } = renderWithProviders(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchModule />} />
        </Routes>
      </BrowserRouter>
    );

    const rush = await findByText('Toyota Rush');
    expect(rush).toBeVisible();
    await waitFor(() => expect(getByText('Toyota Rush')).toBeVisible());

    const selectPrice = getByText('Masukkan harga sewa perhari');

    await selectEvent.select(selectPrice, 'Rp.400.000-Rp.600.000');

    const btn = getByText('Cari Mobil');
    fireEvent.click(btn);

    // expect Toyota Rush to be removed from view
    await waitFor(() => expect(getByText('Toyota Rush')).not.toBeVisible());
  });
});

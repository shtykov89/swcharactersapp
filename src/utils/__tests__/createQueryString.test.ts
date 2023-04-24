import { createQueryString } from '../createQueryString';

it('have to be with search param', () => {
  expect(createQueryString(1, 'Luke')).toEqual('?search=Luke&page=1');
});
it('have to be without search param', () => {
  expect(createQueryString(1)).toEqual('?page=1');
});

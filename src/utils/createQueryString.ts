export const createQueryString = (page: number, search?: string): string =>
  search ? `?search=${search}&page=${page}` : `?page=${page}`;

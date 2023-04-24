export const getPagesNumber = (count: number, pageSize: number) =>
  Math.ceil(count / pageSize);

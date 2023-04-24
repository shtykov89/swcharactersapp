export const getPersonId = (url: string) => {
  return url.replace(/\D/g, '');
};

export const getTitleFromKey = (key: string): string => {
  const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
  return capitalizedKey.split('_').join(' ');
};

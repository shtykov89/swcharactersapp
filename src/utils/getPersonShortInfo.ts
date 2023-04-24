import { IPeople, PersonShortInfo } from '../types';

export const getPersonShortInfo = (person: IPeople): PersonShortInfo => {
  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  } = person;

  return {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  };
};

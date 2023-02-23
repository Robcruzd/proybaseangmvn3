import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 75166,
};

export const sampleWithPartialData: ICountry = {
  id: 96780,
  countryName: 'gold North Assimilated',
};

export const sampleWithFullData: ICountry = {
  id: 56023,
  countryName: 'Persistent',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

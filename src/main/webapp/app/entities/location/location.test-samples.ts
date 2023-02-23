import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 21606,
};

export const sampleWithPartialData: ILocation = {
  id: 95267,
  streetAddress: 'invoice grim',
  postalCode: 'West East',
  city: 'Thielboro',
};

export const sampleWithFullData: ILocation = {
  id: 24561,
  streetAddress: 'Liaison Optimization ubiquitous',
  postalCode: 'Ergonomic South',
  city: 'Bryceburgh',
  stateProvince: 'revolutionary',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

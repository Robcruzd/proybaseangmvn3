import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 9307,
};

export const sampleWithPartialData: IRegion = {
  id: 18233,
  regionName: 'application Future Fish',
};

export const sampleWithFullData: IRegion = {
  id: 42213,
  regionName: 'neglected Nigeria',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

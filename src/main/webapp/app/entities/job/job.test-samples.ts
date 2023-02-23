import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 94453,
};

export const sampleWithPartialData: IJob = {
  id: 84280,
  jobTitle: 'Principal Integration Agent',
};

export const sampleWithFullData: IJob = {
  id: 96978,
  jobTitle: 'Senior Usability Designer',
  minSalary: 87133,
  maxSalary: 41247,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

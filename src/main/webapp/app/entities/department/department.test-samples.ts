import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 93960,
  departmentName: 'Towels',
};

export const sampleWithPartialData: IDepartment = {
  id: 35425,
  departmentName: 'Senior XML',
};

export const sampleWithFullData: IDepartment = {
  id: 55448,
  departmentName: 'Towels and',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'orchid Rand',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

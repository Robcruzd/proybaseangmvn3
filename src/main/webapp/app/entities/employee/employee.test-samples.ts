import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 78907,
};

export const sampleWithPartialData: IEmployee = {
  id: 27746,
  firstName: 'Zechariah',
  lastName: 'Daugherty',
  email: 'Lucienne.Kirlin67@hotmail.com',
  hireDate: dayjs('2023-02-20T21:31'),
  salary: 99897,
  commissionPct: 85126,
};

export const sampleWithFullData: IEmployee = {
  id: 79683,
  firstName: 'Buck',
  lastName: 'Hettinger',
  email: 'Ezra_Okuneva91@yahoo.com',
  phoneNumber: 'sensor',
  hireDate: dayjs('2023-02-21T00:34'),
  salary: 99812,
  commissionPct: 546,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 50194,
};

export const sampleWithPartialData: IJobHistory = {
  id: 45809,
  endDate: dayjs('2023-02-20T07:14'),
  language: Language['SPANISH'],
};

export const sampleWithFullData: IJobHistory = {
  id: 94971,
  startDate: dayjs('2023-02-20T07:06'),
  endDate: dayjs('2023-02-20T20:07'),
  language: Language['ENGLISH'],
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

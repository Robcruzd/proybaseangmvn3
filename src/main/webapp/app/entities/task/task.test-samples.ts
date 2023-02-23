import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 59376,
};

export const sampleWithPartialData: ITask = {
  id: 15032,
  title: 'hastily Electric',
  description: 'Salvatore Montana Usability',
};

export const sampleWithFullData: ITask = {
  id: 96388,
  title: 'proactive geez',
  description: 'kindness instead THX',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import {axios} from '@app/lib/axios';
import {Habit} from '../types';

export const getHabits = async (): Promise<Habit[]> => {
  return await axios.get('/api/habits');
};

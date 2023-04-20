import {axios} from '@/lib/axios';
import {IHabit} from '@/types';

export const getHabits = async (): Promise<IHabit[]> => {
  return await axios.get('/api/habits');
};

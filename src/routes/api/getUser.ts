import {axios} from '@app/lib/axios';
import {UserBE} from '@app/context/types';

export const getUser = async (): Promise<UserBE> => {
  return await axios.get('/api/user');
};

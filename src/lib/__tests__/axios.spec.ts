import {axios, setApiToken} from '../axios';
import {mockHabits} from '@/mocks';

describe('Axios library', () => {
  it('should set authorization headers on setApiToken', async () => {
    setApiToken('test');
    expect(axios.defaults.headers.common.Authorization).toEqual('Bearer test');
  });

  it('should remove authorization headers on empty setApiToken', async () => {
    setApiToken('');
    expect(axios.defaults.headers.common.Authorization).toBeUndefined();
  });

  describe('interceptors', () => {
    it('should extract and return response data on success', async () => {
      const response = await axios.get('/api/habits');

      expect(response).toEqual(mockHabits);
    });

    it('should return error message on failure', async () => {
      try {
        await axios.get('/api/doesnt-exist');
      } catch (e) {
        expect(e).toEqual('Request failed with status code 404');
      }
    });
  });
});

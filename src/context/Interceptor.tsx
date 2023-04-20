import {createContext, useState, useEffect, useMemo} from 'react';
import {useAuth0} from 'react-native-auth0';
import {axios} from '../lib/axios';

export const InterceptorContext = createContext({isTokenSet: false});

const Interceptor = ({children}) => {
  const {loading, getCredentials} = useAuth0();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getCredentials();
        if (token && token.accessToken) {
          setAccessToken(token.accessToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (!loading) {
      getAccessToken();
    }
  }, [loading, getCredentials]);

  useMemo(() => {
    axios.interceptors.request.use(
      async config => {
        const getAccessToken = async () => {
          try {
            const token = await getCredentials();
            if (token && token.accessToken) {
              setAccessToken(token.accessToken);
            }
          } catch (error) {
            console.log(error);
          }
        };
        if (!loading) {
          getAccessToken();
        }
        if (accessToken) {
          console.log(
            '=== setting axios interceptor accessToken Interceptor.tsx [44] ===',
            accessToken,
          );
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }, [loading, getCredentials, accessToken]);

  return (
    <InterceptorContext.Provider value={{isTokenSet: !!accessToken}}>
      {children}
    </InterceptorContext.Provider>
  );
};

export default Interceptor;
